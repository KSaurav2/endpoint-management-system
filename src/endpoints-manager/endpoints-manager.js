import styled from "styled-components";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import EndpointsActions from "./endpoints-actions";
import EndpointsGridRenderer from "./endpoints-grid-renderer";
import { ENDPOINTS_ACTIONS } from "../constants";
import { useActionLogs } from "../providers/action-logs-provider";
import dynamicRefsUtil from "../utils/dynamic-refs-util";
import { toast } from "react-toastify";

const ScreenLabel = styled.div`
  float: left;
  width: 100%;
  font-size: 20px;
`;

const EndpointsManagerWrapper = styled.main`
  display: block;
  padding: 20px;
  margin-top: 50px;
`;

function reducer(state = [], action) {
  switch (action.type) {
    case "ADD": {
      const stateCopy = [...state];
      const idx = stateCopy.indexOf(action.payload);
      if (idx > -1) {
        stateCopy.splice(idx, 1);
      } else {
        stateCopy.push(action.payload);
      }
      return stateCopy;
    }
    case "CLEAR": {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default function EndpointsManager() {
  const [endpointsData, setEndpointsData] = useState([]);
  const { addActionLogs } = useActionLogs();
  const [selectedEndpointsData, setSelectedEndpointsData] = useReducer(
    reducer,
    []
  );

  useEffect(() => {
    fetch("https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60")
      .then((response) => response.json())
      .then((response) => setEndpointsData(response))
      .catch((err) => {
        toast.error("Error while fetching endpoints data");
      });
  }, []);

  const clearSelectedEndpointsData = () => {
    selectedEndpointsData.forEach((deviceName) => {
      const cardRef = dynamicRefsUtil.getRef(deviceName);
      cardRef.current.classList.remove("selected");
    });
    setSelectedEndpointsData({ type: "CLEAR" });
  };

  const onActionBtnClick = (actionLabel) => {
    const actionLogsPayload = {
      id: new Date().getTime(),
      action: actionLabel,
      devices: selectedEndpointsData.toString(),
      time: new Date().toLocaleString()
    };
    addActionLogs(actionLogsPayload, () => {
      toast.success("Action Successful!");
      clearSelectedEndpointsData();
    });
  };

  const onGridItemClick = useCallback(
    (event) => {
      const deviceName = event.target.getAttribute("data-devicename");
      const cardRef = dynamicRefsUtil.getRef(deviceName);
      if (cardRef.current.classList.contains("selected")) {
        cardRef.current.classList.remove("selected");
      } else {
        cardRef.current.classList.add("selected");
      }
      setSelectedEndpointsData({ type: "ADD", payload: deviceName });
    },
    [setSelectedEndpointsData]
  );

  return (
    <EndpointsManagerWrapper>
      <ScreenLabel>Available Endpoints</ScreenLabel>
      <EndpointsActions
        actions={ENDPOINTS_ACTIONS}
        disabled={!selectedEndpointsData.length}
        onActionBtnClick={onActionBtnClick}
      />
      <EndpointsGridRenderer
        endpointsData={endpointsData}
        onGridItemClick={onGridItemClick}
      />
    </EndpointsManagerWrapper>
  );
}
