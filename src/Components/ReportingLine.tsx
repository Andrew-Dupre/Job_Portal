import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Paper, Container, Button } from "@mui/material";
import { rows, columns } from "../Data/dummy";
import { Colors } from "../Styles/colors";
import { Add, Upload, Download } from "@mui/icons-material";

export default function Config() {
  const [pageSize, setPageSize] = React.useState<number>(10);

  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        height: "80vh",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "330px",
          }}
        >
          <Button
            startIcon={<Add />}
            variant="contained"
            sx={{
              backgroundColor: "#28475C",
              "&:hover": {
                backgroundColor: "#2e526a",
              },
            }}
            size="small"
          >
            Add
          </Button>
          <Button
            startIcon={<Upload />}
            variant="contained"
            sx={{
              backgroundColor: "#0F62FE",
              "&:hover": {
                backgroundColor: "#2d76fe",
              },
            }}
            size="small"
          >
            Upload
          </Button>
          <Button
            startIcon={<Download />}
            variant="contained"
            sx={{
              backgroundColor: "#A0BCC2",
              "&:hover": {
                backgroundColor: "#adc5cb",
              },
            }}
            size="small"
          >
            Download
          </Button>
        </div>
      </div>
      <Container>
        <Card
          sx={{
            height: 131 + 10 * 50 + "px",
            width: "100%",
            margin: "auto",
            marginTop: 5,
          }}
        >
          <DataGrid
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
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 20, 30]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          />
        </Card>
      </Container>
    </Paper>
  );
}
