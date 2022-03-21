import React from 'react'
import Typography from '@mui/material/Typography'
import ConstructionIcon from '@mui/icons-material/Construction'
import { Grid } from '@mui/material'

function Projects () {
  return (
    <div>
      <Typography variant="h3" sx={{ pb: 6, pt: 10 }}>Projects</Typography>
      <Grid container direction="row" columnSpacing={1}>
        <Grid item>
          <Typography variant="body1">Coming soon!</Typography>
        </Grid>
        <Grid item>
          <ConstructionIcon />
        </Grid>
      </Grid>
    </div>
  )
}

export default Projects
