import React from 'react'import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useSpring, animated } from '@react-spring/web'

function Home () {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <div>
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
            <Typography variant="h2">Rohan Amjad</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">Software Engineering, BSc</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              Schulich School of Engineering | University of Calgary
            </Typography>
          </Grid>
        </animated.div>
      </Grid>
    </div>
  )
}

export default Home
