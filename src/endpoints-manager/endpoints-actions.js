import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const EndpointsActionsWrapper = styled.div`
  float: right;
  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

function EndpointsActions({ actions, onActionBtnClick, disabled }) {
  return (
    <EndpointsActionsWrapper>
      {actions.map((action) => {
        return (
          <Button
            key={action.actionType}
            variant="contained"
            disabled={disabled}
            onClick={() => onActionBtnClick(action.actionLabel)}
          >
            {action.actionLabel}
          </Button>
        );
      })}
    </EndpointsActionsWrapper>
  );
}

export default EndpointsActions;
