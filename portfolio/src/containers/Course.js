import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

function Course(props) {
  return (
    <Grid item lg={3} md={4} sm={12} xs={12}>
      <Card variant="outlined" raised={true}>
        <CardMedia component="img" image={props.image} alt="course image" />
        <CardHeader title={props.title} subheader={props.desc} />
      </Card>
    </Grid>
  );
}

export default Course;
