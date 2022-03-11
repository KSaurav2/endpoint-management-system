export const ENDPONT_ITEMS_MAPPER = Object.freeze([
  { id: "deviceName", label: "Device Name", type: "primary" },
  { id: "status", label: "Status", type: "secondary" },
  { id: "applicationCount", label: "Application Count", type: "secondary" },
  { id: "operatingSystem", label: "Operating System", type: "secondary" },
  { id: "ipAddress", label: "IP Address", type: "secondary" }
]);

export const ENDPOINTS_ACTIONS = Object.freeze([
  { actionType: "scan", actionLabel: "Scan" },
  { actionType: "terminate", actionLabel: "Terminate" }
]);
