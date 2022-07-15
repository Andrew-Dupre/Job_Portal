import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../Data/dummy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { Colors } from "../Styles/colors";

export default function ReviewLine() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
