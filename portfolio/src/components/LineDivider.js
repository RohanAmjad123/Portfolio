import Grid from "@mui/material/Grid";

function LineDivider() {
  return (
    <Grid container justifyContent="center" sx={{my: 10}}>
      <Grid item sx={{ width: "50%", borderBottom: 5 }}></Grid>
    </Grid>
  );
}

export default LineDivider;
