import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid, Container, Paper } from '@mui/material'
import { useSpring, animated } from '@react-spring/web'

function Home () {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  const paperStyle = {
    backgroundColor: '#000000'
  }

  const typographyColor = {
    color: 'white'
  }

  return (
    <Paper sx={paperStyle}>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{ height: '100vh' }}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <animated.div style={fadeIn}>
            <Grid item>
              <Typography sx={typographyColor} variant="h2">Rohan Amjad</Typography>
            </Grid>
            <Grid item>
              <Typography sx={typographyColor} variant="h4">Software Engineering, BSc</Typography>
            </Grid>
            <Grid item>
              <Typography sx={typographyColor} variant="h5">
                Schulich School of Engineering | University of Calgary
              </Typography>
            </Grid>
          </animated.div>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Home
