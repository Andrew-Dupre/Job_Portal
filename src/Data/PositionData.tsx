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
  {
    id: 2,
    JobTitle: "Web Developer",
    JobDescription: "Concentrate on building and maintaining websites ",
    BaseSalary: "Rs 25,000 - Rs 35,000",
  },
  {
    id: 3,
    JobTitle: "Receptionist",
    JobDescription: "Welcome and direct customers",
    BaseSalary: "Rs 21,000 - Rs 25,000",
  },
  {
    id: 4,
    JobTitle: "Cleaner",
    JobDescription: "Clean the office",
    BaseSalary: "Rs 18,000 - Rs 22,000",
  },
  {
    id: 5,
    JobTitle: "IT Technician",
    JobDescription: "Take care of IT Department",
    BaseSalary: "Rs 28,000 - Rs 32,000",
  },
  {
    id: 6,
    JobTitle: "Project Manager",
    JobDescription: "Lead development team to complete a project",
    BaseSalary: "Rs 27,000 - Rs 30,000",
  },
  {
    id: 7,
    JobTitle: "Accountant",
    JobDescription: "Take care of the finances of the company",
    BaseSalary: "Rs 26,000 - Rs 30,000",
  },
];
