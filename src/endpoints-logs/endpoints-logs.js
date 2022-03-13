import React from "react";
import styled from "styled-components";
import DataGridWrapper from "../components/data-grid";
import { ENDPOINTS_ACTIONS_GRID_COLUMNS } from "../constants";
import { ActionLogsContext } from "../providers/action-logs-provider";

const EndpointsActionsWrapper = styled.main`
  display: block;
  padding: 20px;
  margin-top: 50px;
`;

const ScreenLabel = styled.div`
  float: left;
  width: 100%;
  font-size: 20px;
`;

class EndpointsLogs extends React.Component {
  render() {
    return (
      <ActionLogsContext.Consumer>
        {(ctx) => {
          return (
            <EndpointsActionsWrapper>
              <ScreenLabel>Endpoints Action Logs</ScreenLabel>
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
