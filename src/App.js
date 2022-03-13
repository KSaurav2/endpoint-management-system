import EndpointsManager from "./endpoints-manager/endpoints-manager";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import EndpointsLogs from "./endpoints-logs/endpoints-logs";
import { APP_LINKS, TEXT } from "./constants";
import AppHeader from "./components/app-header";

export default function App() {
  return (
    <div className="App">
      <AppHeader
        appName={TEXT.ENDPOINT_MANAGEMENT_SYSTEM}
        appLinks={APP_LINKS}
      />
      <Routes>
        <Route path="/" element={<EndpointsManager />} />
        <Route path="manager" element={<EndpointsManager />} />
        <Route path="logs" element={<EndpointsLogs />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
