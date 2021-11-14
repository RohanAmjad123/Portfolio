import Container from "../containers/Container";
import SemesterContainer from "../containers/SemesterContainer";

function Courses() {
    return (
        <div>
            <h1>Courses</h1>
            <SemesterContainer title="Fall 2021"> 
                <Container title="CPSC 441" desc="Computer Networks" />
                <Container title="ENSF 480" desc="Principles of Software Design" />
                <Container title="ENCM 511" desc="Embedded Systems Interfacing" />
            </SemesterContainer>
            <SemesterContainer title="Spring 2021"> 
                <Container title="CPSC 457" desc="Operating Systems" />
            </SemesterContainer>
            <SemesterContainer title="Winter 2021"> 
                <Container title="SENG 471" desc="Requirements Engineering" />
            </SemesterContainer>
        </div>
    );
}

export default Courses;