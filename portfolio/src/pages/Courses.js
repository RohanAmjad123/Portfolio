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
      <h1>Courses</h1>
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
          <Semester title="Summer 2020">
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
          <Semester title="Spring 2020">
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
          <Semester title="Winter 2020">
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
            <Typography variant="h4">2019</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Semester title="Fall 2019">
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
          <Semester title="Winter 2019">
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
            <Typography variant="h4">2018</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Semester title="Fall 2018">
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
    </Container>
  );
}

export default Courses;
