import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Paper, Container } from "@mui/material";
import { rows, columns } from "../Data/dummy";
import { Colors } from "../Styles/colors";

export default function Config() {
  const [pageSize, setPageSize] = React.useState<number>(10);

  return (
    <Container>
      <Paper sx={{ padding: 5, borderRadius: 3 }}>
        <Card
          sx={{ height: 131 + 10 * 50 + "px", width: "100%", margin: "auto" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 20, 30]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            sx={{
              boxShadow: 2,
              "& .MuiDataGrid-columnHeaders": {
                background: Colors.secondary,
                color: Colors.primary,
                fontWeight: 600,
                font: 12,
              },

              "& .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
              "& .MuiDataGrid-footerContainer": {
                background: Colors.secondary,
                color: Colors.primary,
              },
              "*::-webkit-scrollbar": {
                width: "7px",
              },
              "*::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "*::-webkit-scrollbar-thumb": {
                background: "#D9D9D9",
                borderRadius: "5px",
              },
            }}
          />
        </Card>
      </Paper>
    </Container>
  );
}
