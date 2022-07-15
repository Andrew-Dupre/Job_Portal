import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../Data/dummy";
import { Colors } from "../Styles/colors";
import { colors } from "@mui/material";

export default function Config() {
  const [pageSize, setPageSize] = React.useState<number>(5);

  return (
    <div style={{ height: 500, width: "90%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        sx={{
          boxShadow: 2,
          "& .header-color": {
            background: Colors.secondary,
            color: Colors.primary,
            fontWeight: 600,
            font: 12,
            "& > .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          },
          "& .css-17jjc08-MuiDataGrid-footerContainer": {
            background: Colors.secondary,
            color: Colors.primary,
          },
        }}
      />
    </div>
  );
}
