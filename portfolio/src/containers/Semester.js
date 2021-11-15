import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Semester (props) {
    return (
        <Container maxWidth="lg">
            <h2>{props.title}</h2>
            <Grid container alignItems="center" justifyContent="flex-start">  
                {props.children}
            </Grid>
        </Container>
    );
}

export default Semester;