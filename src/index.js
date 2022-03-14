import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ActionLogsProvider } from "./providers/action-logs-provider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="/endpoint-management-system">
      <ActionLogsProvider>
        <App />
      </ActionLogsProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
