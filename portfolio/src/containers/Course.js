import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

function Course(props) {
  return (
    <Grid item lg={3} md={4} sm={12} xs={12}>
      <Card variant="outlined" raised={true}>
        <CardHeader title={props.title} subheader={props.desc} />
      </Card>
    </Grid>
  );
}

export default Course;
