import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridWrapper({ rows, columns }) {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
