import React from 'react'
import { Grid, Typography, Paper, Container } from '@mui/material'
import EmailForm from '../forms/EmailForm'
import ConstructionIcon from '@mui/icons-material/Construction'

function Footer () {
  return (
    <Paper>
      <Container>
        <Grid container direction="column" rowSpacing={3} pb={5} pt={8}>
          <Grid item>
            <Typography variant="h5">Contact Me</Typography>
          </Grid>
          <Grid item container direction="row" columnSpacing={1}>
          <Grid item>
            <Typography variant="body1">Coming soon!</Typography>
          </Grid>
          <Grid item>
            <ConstructionIcon />
          </Grid>
        </Grid>
          <Grid item>
            <EmailForm />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Footer
