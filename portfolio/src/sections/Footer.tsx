import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import EmailForm from '../forms/EmailForm'

function Footer () {
  return (
    <div>
      <Grid container direction="column" rowSpacing={3} py={5}>
        <Grid item>
          <Typography variant="h5">Contact Me</Typography>
        </Grid>
        <Grid item>
          <EmailForm />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
