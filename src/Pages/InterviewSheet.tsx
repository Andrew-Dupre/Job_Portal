import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Container, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { HeaderArray, RowArray } from "../Data/InterviewSheetData";
import { Colors } from "../Styles/colors";

const InterviewSheet = () => {
    return (
        <Container>
            <Table>
                <TableHead
                    style={{
                        backgroundColor: Colors.secondary,
                    }}
                >
                    {HeaderArray.map(header => {
                        return (
                            <TableRow>
                                <TableCell>{header.SheetName}</TableCell>
                                <TableCell>{header.CreatedBy}</TableCell>
                                <TableCell>{header.CreatedDate}</TableCell>
                                <TableCell>{header.Actions}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableHead>
                <TableBody>
                    {RowArray.map(row => {
                        return (
                            <TableRow>
                                <TableCell>{row.SheetName}</TableCell>
                                <TableCell>{row.CreatedBy}</TableCell>
                                <TableCell>{row.CreatedDate}</TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="actions"
                                        style={{
                                            color: Colors.primary,
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
};

export default InterviewSheet;
