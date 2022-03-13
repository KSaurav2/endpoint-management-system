import EndpointsManager from "./endpoints-manager/endpoints-manager";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppHeader from "./header/app-header";
import { Routes, Route } from "react-router-dom";
import EndpointsLogs from "./endpoints-logs/endpoints-logs";

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<EndpointsManager />} />
        <Route path="manager" element={<EndpointsManager />} />
        <Route path="logs" element={<EndpointsLogs />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
