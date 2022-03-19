import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

function Course ({ title, description }) {
  return (
    <Grid item lg={3} md={4} sm={12} xs={12}>
      <Card variant="outlined" raised>
        <CardHeader title={title} subheader={description} />
      </Card>
    </Grid>
  )
}

export default Course
