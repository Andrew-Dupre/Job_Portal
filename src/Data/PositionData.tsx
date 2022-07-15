interface Header {
  JobTitle: string;
  JobDescription: string;
  BaseSalary: string;
  Action: string;
}

interface Row {
  id: number;
  JobTitle: string;
  JobDescription: string;
  BaseSalary: string;
}

export const HeaderArray: Header[] = [
  {
    JobTitle: "Job Title",
    JobDescription: "Job Description",
    BaseSalary: "Salary",
    Action: "Action",
  },
];

export const RowArray: Row[] = [
  {
    id: 1,
    JobTitle: "Software Developer",
    JobDescription: "Develop software for company",
    BaseSalary: "Rs 20,000 - Rs 30,000",
  },
];
