import React from 'react'
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import Semester from './Semester'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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
    <Grid item container rowSpacing={3}>
      <Accordion>
        <Grid item >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{year}</Typography>
          </AccordionSummary>
        </Grid>
        <AccordionDetails>
          { semestersList }
        </ AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default Year
