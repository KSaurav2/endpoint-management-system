import React from "react";
import styled from "styled-components";
import DataGridWrapper from "../components/data-grid";
import { ENDPOINTS_ACTIONS_GRID_COLUMNS, TEXT } from "../constants";
import { ActionLogsContext } from "../providers/action-logs-provider";

const EndpointsActionsWrapper = styled.main`
  padding: 1.25rem;
  margin-top: 3.125rem;
`;

const ScreenLabel = styled.div`
  float: left;
  width: 100%;
  font-size: 1.2rem;
`;

class EndpointsLogs extends React.Component {
  render() {
    return (
      <ActionLogsContext.Consumer>
        {(ctx) => {
          return (
            <EndpointsActionsWrapper>
              <ScreenLabel id="screenLabel">{TEXT.ENDPOINT_ACTION_LOGS}</ScreenLabel>
              <DataGridWrapper
                rows={ctx.actionLogs}
                columns={ENDPOINTS_ACTIONS_GRID_COLUMNS}
              />
            </EndpointsActionsWrapper>
          );
        }}
      </ActionLogsContext.Consumer>
    );
  }
}

export default EndpointsLogs;
