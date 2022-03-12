import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ActionLogsProvider } from "./providers/action-logs-provider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ActionLogsProvider>
      <App />
    </ActionLogsProvider>
  </StrictMode>,
  rootElement
);
