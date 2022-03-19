import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Course from './Course'

function Semester ({ semester, courses }) {
  const coursesList = courses.map((course) => <Course title={course.title} description={course.description} />)

  return (
    <Grid container item direction="row" py={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography variant="subtitle1">{semester}</Typography>
      </Grid>
      { coursesList }
    </Grid>
  )
}

export default Semester
