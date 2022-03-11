import styled from "styled-components";
import EndpointsManager from "./endpoints-manager/endpoints-manager";
import "./styles.css";

const PageHeading = styled.h1`
  text-align: center;
`;

export default function App() {
  return (
    <div className="App">
      <PageHeading>Endpoints Manager</PageHeading>
      <EndpointsManager />
    </div>
  );
}
