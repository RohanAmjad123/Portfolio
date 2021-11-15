import Course from "../containers/Course";
import Semester from "../containers/Semester";
import Container from "@mui/material/Container"

function Courses() {
    return (
        <Container>
            <h1>Courses</h1>
            <Semester title="Fall 2021"> 
                <Course title="CPSC 441" desc="Computer Networks" />
                <Course title="ENCM 511" desc="Embedded Systems Interfacing" />
                <Course title="ENSF 480" desc="Principles of Software Design" />
            </Semester>
            <Semester title="Spring 2021"> 
                <Course title="CPSC 457" desc="Principles of Operating Systems" />
                <Course title="ENGG 513" desc="Roles and Responsibilities of Prof. Engineers in Society" />
            </Semester>
            <Semester title="Winter 2021"> 
                <Course title="CPSC 471" desc="Database Management Systems" />
                <Course title="ENCM 369" desc="Computer Organization" />
                <Course title="ENSF 409" desc="Embedded Systems Interfacing" />
                <Course title="SENG 471" desc="Principles of Software Development" />
            </Semester>
        </Container>
    );
}

export default Courses;