import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmailForm from "../forms/EmailForm.js";

function Footer() {
  return (
    <div>
      <Grid container direction="column" spacing={3} py={5}>
        <Grid item>
          <Typography variant="h5">Contact Me</Typography>
        </Grid>
        <Grid item>
            <EmailForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
