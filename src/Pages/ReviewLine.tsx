import React from "react";
import Container from "@mui/material/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Icon,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { Colors } from "../Styles/colors";
import { rows, columns } from "../data/dummy"; //dummy data

export default function ReviewLine() {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((header) => {
              return (
                <TableCell style={{ width: header.width }}>
                  {header.headerName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.departement}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <IconButton
                    style={{ color: Colors.primary }}
                    aria-label="actions"
                    onClick={() => {
                      alert("Actions");
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
