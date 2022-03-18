import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Year from "../containers/Year";

const coursesData = [
  {
    year: 2022, 
    semesters: [
      {
        semester: "Winter",
        courses: [
          {
            title: "CPSC 559",
            description: "Introduction to Distributed Systems",
          },
          {
            title: "SENG 401",
            description: "Software Architecture",
          },
          {
            title: "SENG 438",
            description: "Software Testing, Reliability, and Quality",
          },
          {
            title: "SENG 533",
            description: "Software Performance Evaluation",
          },
        ],
      },
    ],
  },
  {
    year: 2021,
    semesters: [
      {
        semester: "Fall",
        courses: [
          {
            title: "CPSC 441",
            description: "Computer Networks",
          },
          {
            title: "ENCM 511",
            description: "Embedded Systems Interfacing",
          },
          {
            title: "ENSF 480",
            description: "Principles of Software Design",
          },
        ],
      },
      {
        semester: "Spring",
        courses: [
          {
            title: "CPSC 457",
            description: "Principles of Operating Systems",
          },
          {
            title: "ENGG 513",
            description: "Roles and Responsibilities of Prof. Engineers in Society",
          },
        ],
      },
      {
        semester: "Winter",
        courses: [
          {
            title: "CPSC 471",
            description: "Database Management Systems",
          },
          {
            title: "ENCM 369",
            description: "Computer Organization",
          },
          {
            title: "ENSF 409",
            description: "Principles of Software Development",
          },
          {
            title: "SENG 471",
            description: "Software Requirements Engineering",
          },
        ],
      },
    ],
  },
  {
    year: 2020, 
    semesters: [
      {
        semester: "Fall",
        courses: [
          {
            title: "ENEL 353",
            description: "Digital Circuits",
          },
          {
            title: "MATH 271",
            description: "Discrete Mathematics",
          },
          {
            title: "SAST 203",
            description: "Understanding South Asia",
          },
        ],
      },
      {
        semester: "Summer",
        courses: [
          {
            title: "CPSC 319",
            description: "Data Structures and Algorithms",
          },
          {
            title: "ENEL 327",
            description: "Signals and Transforms",
          },
        ],
      },
      {
        semester: "Spring",
        courses: [
          {
            title: "ENSF 337",
            description: "Programming Fundamentals for Software and Computer Engineers",
          },
        ],
      },
      {
        semester: "Winter",
        courses: [
          {
            title: "COMS 363",
            description: "Professional Technical Communication",
          },
          {
            title: "ENGG 201",
            description: "Behaviour of Liquids, Gases, and Solids",
          },
          {
            title: "ENGG 209",
            description: "Engineering Economics",
          },
          {
            title: "ENGG 225",
            description: "Fundamentals of Electrical Circuits and Machines",
          },
          {
            title: "ENGG 481",
            description: "Technology and Society",
          },
        ],
      },
    ],
  },
  {
    year: 2019, 
    semesters: [
      {
        semester: "Fall",
        courses: [
          {
            title: "ECON 201",
            description: "Principles of Microeconomics",
          },
          {
            title: "ENGG 200",
            description: "Engineering Design and Communication",
          },
          {
            title: "ENGG 319",
            description: "Probability and Statistics for Engineers",
          },
          {
            title: "MATH 375",
            description: "Differential Equations for Engineers and Scientists",
          },
          {
            title: "PHYS 369",
            description: "Acoustics, Optics, and Radiation",
          },
        ],
      },
      {
        semester: "Winter",
        courses: [
          {
            title: "ENGG 202",
            description: "Engineering Statics",
          },
          {
            title: "MATH 267",
            description: "University Calculus II",
          },
          {
            title: "PHYS 259",
            description: "Electricity and Magnetism",
          },
        ],
      },
    ],
  },
  {
    year: 2018, 
    semesters: [
      {
        semester: "Fall",
        courses: [
          {
            title: "CHEM 209",
            description: "General Chemistry For Engineers",
          },
          {
            title: "ENGG 233",
            description: "Computing for Engineers",
          },
          {
            title: "MATH 211",
            description: "Linear Algebra",
          },
          {
            title: "MATH 249",
            description: "Introductory Calculus",
          },
        ],
      },
    ],
  },
];

function Courses() {

  const yearsList = coursesData.map((year) => {
    return <Year year={year} />
  });

  return (
    <div>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Courses
      </Typography>
      { yearsList }
    </div>
  );
}

export default Courses;
