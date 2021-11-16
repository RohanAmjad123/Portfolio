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

function Courses() {
  return (
    <Container>
      <Typography variant="h2">Courses</Typography>
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
            <Course
              title="CPSC 441"
              desc="Computer Networks"
              image={images["computer_networks.jpg"].default}
            />
            <Course
              title="ENCM 511"
              desc="Embedded Systems Interfacing"
              image={images["embedded_systems_interfacing.jpg"].default}
            />
            <Course
              title="ENSF 480"
              desc="Principles of Software Design"
              image={images["white.jpg"].default}
            />
          </Semester>
          <Semester title="Spring 2021">
            <Course
              title="CPSC 457"
              desc="Principles of Operating Systems"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 513"
              desc="Roles and Responsibilities of Prof. Engineers in Society"
              image={images["white.jpg"].default}
            />
          </Semester>
          <Semester title="Winter 2021">
            <Course
              title="CPSC 471"
              desc="Database Management Systems"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENCM 369"
              desc="Computer Organization"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENSF 409"
              desc="Principles of Software Development"
              image={images["white.jpg"].default}
            />
            <Course
              title="SENG 471"
              desc="Software Requirements Engineering"
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
            <Typography variant="h4">2020</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Semester title="Fall 2020">
            <Course
              title="ENEL 353"
              desc="Digital Circuits"
              image={images["white.jpg"].default}
            />
            <Course
              title="MATH 271"
              desc="Discrete Mathematics"
              image={images["white.jpg"].default}
            />
            <Course
              title="SAST 203"
              desc="Understanding South Asia"
              image={images["white.jpg"].default}
            />
          </Semester>
          <Semester title="Summer 2020">
            <Course
              title="CPSC 319"
              desc="Data Structures and Algorithms"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENEL 327"
              desc="Signals and Transforms"
              image={images["white.jpg"].default}
            />
            
          </Semester>
          <Semester title="Spring 2020">
            <Course
              title="ENSF 337"
              desc="Programming Fundamentals for Software and Computer Engineers"
              image={images["white.jpg"].default}
            />
          </Semester>
          <Semester title="Winter 2020">
            <Course
              title="COMS 363"
              desc="Professional Tehcnical Communication"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 201"
              desc="Behaviour of Liquids, Gases, and Solids"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 209"
              desc="Engineering Economics"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 225"
              desc="Fundamentals of Electrical Circuits and Machines"
              image={images["white.jpg"].default}
            />
            <Course
              title="ENGG 481"
              desc="Technology and Society"
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
              desc="General Chemistry of Engineers"
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
