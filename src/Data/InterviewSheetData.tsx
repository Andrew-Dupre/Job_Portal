export interface Data {
    SheetName: string;
    CreatedBy: string;
    CreatedDate: string;
}

function createData(SheetName: string, CreatedBy: string, CreatedDate: string): Data {
    return {
        SheetName,
        CreatedBy,
        CreatedDate,
    };
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export const headCells: HeadCell[] = [
    { id: "SheetName", numeric: false, disablePadding: true, label: "Sheet Name" },
    { id: "CreatedBy", numeric: false, disablePadding: true, label: "Created By" },
    { id: "CreatedDate", numeric: false, disablePadding: true, label: "Created Date" },
];

export const rows = [
    createData("Junior SE Interview Sheet", "John Doe", "2020-01-01"),
    createData("Senior SE Interview Sheet", "John Doe", "2020-01-01"),
    createData("Accountant Interview Sheet", "John Doe", "2020-01-01"),
    createData("Director Interview Sheet", "John Doe", "2020-01-01"),
    createData("Accountant Interview Sheet", "John Doe", "2020-01-01"),
    createData("Senior SE Interview Sheet", "John Doe", "2020-01-01"),
];
