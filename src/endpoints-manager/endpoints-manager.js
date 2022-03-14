import styled from "styled-components";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import EndpointsActions from "./endpoints-actions";
import EndpointsGridRenderer from "./endpoints-grid-renderer";
import { ENDPOINTS_ACTIONS, TEXT } from "../constants";
import { useActionLogs } from "../providers/action-logs-provider";
import dynamicRefsUtil from "../utils/dynamic-refs-util";
import { toast } from "react-toastify";
import Loader from "../components/loader";

const ScreenLabel = styled.div`
  float: left;
  width: 100%;
  font-size: 1.25rem;
`;

const EndpointsManagerWrapper = styled.main`
  padding: 1.25rem;
  margin-top: 3.125rem;
`;

function reducer(state = [], action) {
  switch (action.type) {
    case TEXT.ADD: {
      const stateCopy = [...state];
      const idx = stateCopy.indexOf(action.payload);
      if (idx > -1) {
        stateCopy.splice(idx, 1);
      } else {
        stateCopy.push(action.payload);
      }
      return stateCopy;
    }
    case TEXT.CLEAR: {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default function EndpointsManager() {
  const [endpointsData, setEndpointsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addActionLogs } = useActionLogs();
  const [selectedEndpointsData, setSelectedEndpointsData] = useReducer(
    reducer,
    []
  );

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60")
      .then((response) => response.json())
      .then((response) => {
        setEndpointsData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(TEXT.API_ERROR);
      });
  }, []);

  const clearSelectedEndpointsData = () => {
    selectedEndpointsData.forEach((deviceName) => {
      const cardRef = dynamicRefsUtil.getRef(deviceName);
      cardRef.current.classList.remove(TEXT.SELECTED);
    });
    setSelectedEndpointsData({ type: TEXT.CLEAR });
  };

  const onActionBtnClick = (actionLabel) => {
    const actionLogsPayload = {
      id: new Date().getTime(),
      action: actionLabel,
      devices: selectedEndpointsData.toString(),
      time: new Date().toLocaleString()
    };
    addActionLogs(actionLogsPayload, () => {
      toast.success(TEXT.ACTION_SUCCESS);
      clearSelectedEndpointsData();
    });
  };

  const onGridItemClick = useCallback(
    (event) => {
      const deviceName = event.target.getAttribute("data-id");
      const cardRef = dynamicRefsUtil.getRef(deviceName);
      if (cardRef.current.classList.contains(TEXT.SELECTED)) {
        cardRef.current.classList.remove(TEXT.SELECTED);
      } else {
        cardRef.current.classList.add(TEXT.SELECTED);
      }
      setSelectedEndpointsData({ type: TEXT.ADD, payload: deviceName });
    },
    [setSelectedEndpointsData]
  );

  return (
    <EndpointsManagerWrapper>
      <ScreenLabel>{TEXT.AVAILABLE_ENDPOINTS}</ScreenLabel>
      <EndpointsActions
        actions={ENDPOINTS_ACTIONS}
        disabled={!selectedEndpointsData.length}
        onActionBtnClick={onActionBtnClick}
      />
      <EndpointsGridRenderer
        endpointsData={endpointsData}
        onGridItemClick={onGridItemClick}
      />
      <Loader open={isLoading} />
    </EndpointsManagerWrapper>
  );
}
