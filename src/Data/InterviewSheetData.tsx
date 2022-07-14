interface Header {
    SheetName: string;
    CreatedBy: string;
    CreatedDate: string;
    Actions: string;
}

interface Row {
    id: number;
    SheetName: string;
    CreatedBy: string;
    CreatedDate: string;
}

export const HeaderArray: Header[] = [{ SheetName: "Sheet Name", CreatedBy: "Created By", CreatedDate: "Created At", Actions: "Actions" }];
export const RowArray: Row[] = [
    {
        id: 1,
        SheetName: "Junior SE Interview Sheet",
        CreatedBy: "Thomas Lee",
        CreatedDate: "2020-01-01",
    },
    {
        id: 2,
        SheetName: "Senior SE Interview Sheet",
        CreatedBy: "Jefferson Lee",
        CreatedDate: "2020-01-01",
    },
    {
        id: 3,
        SheetName: "Accountant Interview Sheet",
        CreatedBy: "Andrea Thomas",
        CreatedDate: "2020-01-01",
    },
];
