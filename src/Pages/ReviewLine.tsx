import React from "react";
import Container from "@mui/material/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const columns = [{ field: "id", headerName: "ID", width: 70 }];

export default function ReviewLine() {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((header) => {
              return <TableCell>{header.headerName}</TableCell>;
            })}
          </TableRow>
        </TableHead>
      </Table>
    </Container>
  );
}
