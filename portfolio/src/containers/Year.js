import { Typography } from "@mui/material";
import Semester from "./Semester";
import { Grid } from "@mui/material";

function Year({ year }) {
  const semestersList = year.semesters.map((semester) => {
    return <Semester semester={semester.semester} courses={semester.courses} />;
  });

  return (
    <Grid container py={3}>
        <Grid item>
          <Typography variant="h6">{year.year}</Typography>
        </Grid>
        { semestersList }
    </Grid>
  );
}

export default Year;
