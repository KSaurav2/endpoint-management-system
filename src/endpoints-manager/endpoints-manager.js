import styled from "styled-components";
import React, { useState } from "react";
import EndpointsActions from "./endpoints-actions";
import EndpointsGridRenderer from "./endpoints-grid-renderer";
import { ENDPOINTS_ACTIONS } from "../constants";

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
  padding: 20px;
`;

export default function EndpointsManager() {
  const [endpointsData, setEndpointsData] = useState(dummyData);

  return (
    <EndpointsManagerWrapper>
      <ScreenLabel>Available Endpoints</ScreenLabel>
      <EndpointsActions actions={ENDPOINTS_ACTIONS} />
      <EndpointsGridRenderer endpointsData={endpointsData} />
    </EndpointsManagerWrapper>
  );
}
