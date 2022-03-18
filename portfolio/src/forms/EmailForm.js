import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function EmailForm() {
  return (
    <Grid container md={6} direction="column" spacing={2}>
      <Grid item>
        <TextField fullWidth label="Name" />
      </Grid>
      <Grid item>
        <TextField fullWidth label="Email" />
      </Grid>
      <Grid item>
        <TextField multiline fullWidth label="Message"/>
      </Grid>
      <Grid item>
        <Button variant="contained">Send</Button>
      </Grid>
    </Grid>
  );
}

export default EmailForm;
