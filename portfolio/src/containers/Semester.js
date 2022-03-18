import Grid from "@mui/material/Grid";

function Semester( props ) {
  return (
    <Grid container spacing={2} alignItems="bottom" justifyContent="flex-start">
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <h2>{props.title}</h2>
      </Grid>
      { props.children }
    </Grid>
  );
}

export default Semester;
