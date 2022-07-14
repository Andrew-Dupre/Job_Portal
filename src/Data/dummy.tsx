interface headers {
  headerName: string;
  width: number;
}

interface rows {
  name: string;
  departement: string;
  email: string;
}

export const columns: headers[] = [
  { headerName: "Name", width: 50 },
  { headerName: "Departement", width: 80 },
  { headerName: "Email", width: 80 },
  { headerName: "Actions", width: 30 },
];

export const rows: rows[] = [
  {
    name: "Andrew",
    departement: "Digital",
    email: "andrew@gmail.com",
  },
];
