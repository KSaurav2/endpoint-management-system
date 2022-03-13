import styled from "styled-components";
import React, { useCallback, useReducer, useState } from "react";
import EndpointsActions from "./endpoints-actions";
import EndpointsGridRenderer from "./endpoints-grid-renderer";
import { ENDPOINTS_ACTIONS } from "../constants";
import { useActionLogs } from "../providers/action-logs-provider";
import dynamicRefsUtil from "../utils/dynamic-refs-util";
import { toast } from "react-toastify";

const dummyData = [
  {
    id: 1,
    deviceName: "WWWW7W24.random.net",
    status: "Online",
    applicationCount: 39,
    operatingSystem: "Windows 10 Enterprise",
    ipAddress: "90.93.75.137"
  },
  {
    id: 2,
    deviceName: "W4743WW6.random.net",
    status: "Offline",
    applicationCount: 40,
    operatingSystem: "Slax",
    ipAddress: "149.46.86.99"
  },
  {
    id: 3,
    deviceName: "WW1W3800.example.org",
    status: "Offline",
    applicationCount: 34,
    operatingSystem: "Slax",
    ipAddress: "232.35.100.119"
  },
  {
    id: 4,
    deviceName: "W2W6542W.machine.org",
    status: "Offline",
    applicationCount: 48,
    operatingSystem: "Windows 7",
    ipAddress: "158.171.254.190"
  },
  {
    id: 5,
    deviceName: "82WWWW0W.random.net",
    status: "Offline",
    applicationCount: 33,
    operatingSystem: "Windows 10 Enterprise",
    ipAddress: "213.212.252.165"
  },
  {
    id: 6,
    deviceName: "9W9WWWWW.example.org",
    status: "Offline",
    applicationCount: 33,
    operatingSystem: "Windows 7",
    ipAddress: "107.151.126.172"
  },
  {
    id: 7,
    deviceName: "W65W9WWW.random.net",
    status: "Online",
    applicationCount: 30,
    operatingSystem: "Fedora",
    ipAddress: "213.247.86.79"
  },
  {
    id: 8,
    deviceName: "217WWW47.random.net",
    status: "Online",
    applicationCount: 41,
    operatingSystem: "Fedora",
    ipAddress: "83.106.124.88"
  },
  {
    id: 9,
    deviceName: "8W1336WW.brain.com",
    status: "Online",
    applicationCount: 37,
    operatingSystem: "Slax",
    ipAddress: "25.158.52.163"
  },
  {
    id: 10,
    deviceName: "75W50847.brain.com",
    status: "Online",
    applicationCount: 36,
    operatingSystem: "Windows 7",
    ipAddress: "145.161.213.232"
  }
];

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
  const [endpointsData, setEndpointsData] = useState(dummyData);
  const { addActionLogs } = useActionLogs();
  const [selectedEndpointsData, setSelectedEndpointsData] = useReducer(
    reducer,
    []
  );

  const clearSelectedEndpointsData = () => {
    selectedEndpointsData.forEach((deviceName) => {
      const cardRef = dynamicRefsUtil.getRef(deviceName);
      cardRef.current.classList.remove("selected");
    });
    setSelectedEndpointsData({ type: "CLEAR" });
  };

  const onActionBtnClick = (actionLabel) => {
    const actionLogsPayload = {
      action: actionLabel,
      devices: selectedEndpointsData,
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
