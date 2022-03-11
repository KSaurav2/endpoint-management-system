import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const EndpointsActionsWrapper = styled.div`
  float: right;
  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

function EndpointsActions({ actions }) {
  return (
    <EndpointsActionsWrapper>
      {actions.map((action) => {
        return <Button variant="contained">{action.actionLabel}</Button>;
      })}
    </EndpointsActionsWrapper>
  );
}

export default EndpointsActions;
