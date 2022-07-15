import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

const handleActionclick = (index: any) => {
  alert(index);
};

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "departement",
    headerName: "Departement",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    align: "center",
    headerAlign: "center",
    flex: 0.5,
    disableColumnMenu: true,
    renderCell: (params) => {
      return (
        <IconButton
          onClick={() => {
            handleActionclick(params.row.id);
          }}
        >
          <MoreVertIcon />
        </IconButton>
      );
    },
  },
];

export const rows = [
  { id: 1, name: "Snow", departement: "Digital", email: "email@example.com" },
  { id: 2, name: "Lannister", departement: "IT", email: "email@example.com" },
  {
    id: 3,
    name: "Lannister",
    departement: "Marketing",
    email: "email@example.com",
  },
  {
    id: 4,
    name: "Stark",
    departement: "Marketing",
    email: "email@example.com",
  },
  {
    id: 5,
    name: "Targaryen",
    departement: "Digital",
    email: "email@example.com",
  },
  {
    id: 6,
    name: "Melisandre",
    departement: "IT",
    email: "email@example.com",
  },
  { id: 7, name: "Clifford", departement: "IT", email: "email@example.com" },
  {
    id: 8,
    name: "Frances",
    departement: "Digital",
    email: "email@example.com",
  },
  {
    id: 9,
    name: "Roxie",
    departement: "Digital",
    email: "email@example.com",
  },
  {
    id: 10,
    name: "Roxie",
    departement: "Digital",
    email: "email@example.com",
  },
  {
    id: 11,
    name: "Roxie",
    departement: "Digital",
    email: "email@example.com",
  },
];
