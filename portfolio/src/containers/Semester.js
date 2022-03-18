import Grid from "@mui/material/Grid";
import Course from "./Course";
import Typography from "@mui/material/Typography";

function Semester({ semester, courses }) {
  const coursesList = courses.map((course) => {
    return <Course title={course.title} description={course.description} />
  });

  return (
    <Grid container item direction="row" py={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography variant="subtitle1">{semester}</Typography>
      </Grid>
      { coursesList }
    </Grid>
  );
}

export default Semester;
