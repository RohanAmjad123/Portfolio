import React from 'react'
import { Typography, Grid } from '@mui/material'
import Semester from './Semester'

interface SemesterObj {
  semester: string,
  courses: {
    title: string,
    description: string
  }[]
}

function Year ({ year, semesters }: { year: number, semesters: SemesterObj[] }) {
  const semestersList = semesters.map((semester) => <Semester key={semester.semester} semester={semester.semester} courses={semester.courses} />)

  return (
    <Grid container py={3}>
      <Grid item>
        <Typography variant="h6">{year}</Typography>
      </Grid>
      { semestersList }
    </Grid>
  )
}

export default Year
