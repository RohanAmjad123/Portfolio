import Course from "../containers/Course";
import Semester from "../containers/Semester";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../images/Courses/", false, /\.(png|jpe?g|svg)$/)
);

const courses = {
  2018: {
    Fall: {
      1: {
        title: "CHEM 209",
        description: "General Chemistry For Engineers",
      },
      2: {
        title: "ENGG 233",
        description: "Computing for Engineers",
      },
      3: {
        title: "MATH 211",
        description: "Linear Algebra",
      },
      4: {
        title: "MATH 249",
        description: "Introductory Calculus",
      },
    },
  },
  2019: {
    Winter: {
      1: {
        title: "ENGG 202",
        description: "Engineering Statics",
      },
      2: {
        title: "MATH 267",
        description: "University Calculus II",
      },
      3: {
        title: "PHYS 259",
        description: "Electricity and Magnetism",
      },
    },
    Fall: {
      1: {
        title: "ECON 201",
        description: "Principles of Microeconomics",
      },
      2: {
        title: "ENGG 200",
        description: "Engineering Design and Communication",
      },
      3: {
        title: "ENGG 319",
        description: "Probability and Statistics for Engineers",
      },
      4: {
        title: "MATH 375",
        description: "Differential Equations for Engineers and Scientists",
      },
      5: {
        title: "PHYS 369",
        description: "Acoustics, Optics, and Radiation",
      },
    },
  },
  2020: {
    Winter: {
      1: {
        title: "COMS 363",
        description: "Professional Technical Communication",
      },
      2: {
        title: "ENGG 201",
        description: "Behaviour of Liquids, Gases, and Solids",
      },
      3: {
        title: "ENGG 209",
        description: "Engineering Economics",
      },
      4: {
        title: "ENGG 225",
        description: "Fundamentals of Electrical Circuits and Machines",
      },
      5: {
        title: "ENGG 481",
        description: "Technology and Society",
      },
    },
    Spring: {
      1: {
        title: "ENSF 337",
        description: "Programming Fundamentals for Software and Computer Engineers",
      },
    },
    Summer: {
      1: {
        title: "CPSC 319",
        description: "Data Structures and Algorithms",
      },
      2: {
        title: "ENEL 327",
        description: "Signals and Transforms",
      },
    },
    Fall: {
      1: {
        title: "ENEL 353",
        description: "Digital Circuits",
      },
      2: {
        title: "MATH 271",
        description: "Discrete Mathematics",
      },
      3: {
        title: "SAST 203",
        description: "Understanding South Asia",
      },
    },
  },
  2021: {
    Winter: {
      1: {
        title: "CPSC 471",
        description: "Database Management Systems",
      },
      2: {
        title: "ENCM 369",
        description: "Computer Organization",
      },
      3: {
        title: "ENSF 409",
        description: "Principles of Software Development",
      },
      4: {
        title: "SENG 471",
        description: "Software Requirements Engineering",
      },
    },
    Spring: {
      1: {
        title: "CPSC 457",
        description: "Principles of Operating Systems",
      },
      2: {
        title: "ENGG 513",
        description: "Roles and Responsibilities of Prof. Engineers in Society",
      },
    },
    Fall: {
      1: {
        title: "CPSC 441",
        description: "Computer Networks",
      },
      2: {
        title: "ENCM 511",
        description: "Embedded Systems Interfacing",
      },
      3: {
        title: "ENSF 480",
        description: "Principles of Software Design",
      },
    },
  },
  2022: {
    Winter: {
      1: {
        title: "CPSC 559",
        description: "Introduction to Distributed Systems",
      },
      2: {
        title: "SENG 401",
        description: "Software Architecture",
      },
      3: {
        title: "SENG 438",
        description: "Software Testing, Reliability, and Quality",
      },
      4: {
        title: "SENG 533",
        description: "Software Performance Evaluation",
      },
    },
  },
};

function Courses() {
  return (
    <Container>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Courses
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderLeft: 5,
            borderColor: "black",
            backgroundColor: "#e6e6e6",
          }}
        >
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4">2021</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Semester title="Fall 2021">
            <Course title="CPSC 441" desc="Computer Networks" />
            <Course title="ENCM 511" desc="Embedded Systems Interfacing" />
            <Course title="ENSF 480" desc="Principles of Software Design" />
          </Semester>
          <Semester title="Spring 2021">
            <Course title="CPSC 457" desc="Principles of Operating Systems" />
            <Course
              title="ENGG 513"
              desc="Roles and Responsibilities of Prof. Engineers in Society"
            />
          </Semester>
          <Semester title="Winter 2021">
            <Course title="CPSC 471" desc="Database Management Systems" />
            <Course title="ENCM 369" desc="Computer Organization" />
            <Course
              title="ENSF 409"
              desc="Principles of Software Development"
            />
            <Course title="SENG 471" desc="Software Requirements Engineering" />
          </Semester>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderLeft: 5,
            borderColor: "black",
            backgroundColor: "#e6e6e6",
          }}
        >
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4">2020</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Semester title="Fall 2020">
            <Course title="ENEL 353" desc="Digital Circuits" />
            <Course title="MATH 271" desc="Discrete Mathematics" />
            <Course title="SAST 203" desc="Understanding South Asia" />
          </Semester>
          <Semester title="Summer 2020">
            <Course title="CPSC 319" desc="Data Structures and Algorithms" />
            <Course title="ENEL 327" desc="Signals and Transforms" />
          </Semester>
          <Semester title="Spring 2020">
            <Course
              title="ENSF 337"
              desc="Programming Fundamentals for Software and Computer Engineers"
            />
          </Semester>
          <Semester title="Winter 2020">
            <Course
              title="COMS 363"
              desc="Professional Technical Communication"
            />
            <Course
              title="ENGG 201"
              desc="Behaviour of Liquids, Gases, and Solids"
            />
            <Course title="ENGG 209" desc="Engineering Economics" />
            <Course
              title="ENGG 225"
              desc="Fundamentals of Electrical Circuits and Machines"
            />
            <Course title="ENGG 481" desc="Technology and Society" />
          </Semester>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderLeft: 5,
            borderColor: "black",
            backgroundColor: "#e6e6e6",
          }}
        >
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4">2019</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Semester title="Fall 2019">
            <Course
              title="ECON 201"
              desc="Principles of Microeconomics"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 200"
              desc="Engineering Design and Communication"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 319"
              desc="Probability and Statistics for Engineers"
              image={images["white.jpg"].default}
            />
            <Course
              title="MATH 375"
              desc="Differential Equations for Engineers and Scientists"
              image={images["white.jpg"].default}
            />
            <Course
              title="PHYS 369"
              desc="Acoustics, Optics, and Radiation"
              image={images["white.jpg"].default}
            />
          </Semester>
          <Semester title="Winter 2019">
            <Course
              title="ENGG 202"
              desc="Engineering Statics"
              image={images["white.jpg"].default}
            />
            <Course
              title="MATH 267"
              desc="University Calculus II"
              image={images["white.jpg"].default}
            />
            <Course
              title="PHYS 259"
              desc="Electricity and Magnetism"
              image={images["white.jpg"].default}
            />
          </Semester>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderLeft: 5,
            borderColor: "black",
            backgroundColor: "#e6e6e6",
          }}
        >
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4">2018</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Semester title="Fall 2018">
            <Course
              title="CHEM 209"
              desc="General Chemistry for Engineers"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 233"
              desc="Computing for Engineers"
              image={images["white.jpg"].default}
            />
            <Course
              title="MATH 211"
              desc="Linear Algebra"
              image={images["white.jpg"].default}
            />
            <Course
              title="MATH 249"
              desc="Introductory Calculus"
              image={images["white.jpg"].default}
            />
          </Semester>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default Courses;
