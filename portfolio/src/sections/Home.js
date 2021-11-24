import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <Container sx={{ height: "100vh"}}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ height: "100vh" }}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Grid item>
          <Typography variant="h2">Rohan Amjad</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">Software Engineering, BSc</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Schulich School of Engineering | University of Calgary
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
