import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Hero from './Hero/Hero'
import Support from './Support'
import Team from './Team'
import AWSTFooter from './AWSTFooter'

const useStyles = makeStyles((theme) => ({
    container: {
        // color: theme.palette.primary,
        // background: theme.palette.primary.dark,
        width: '100vw',
        // height: 'fit-content',
        zIndex:-10,
        
        // justifyContent: 'center',
        // alignContent: 'center',
        // height: '50vh',
        
      },
    
      
  }));

export default function MainContainer() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Hero />
            {/* Oral History */}
            {/* Civics Curriculum */}

            {/* <Support /> */}
            <Team />
            {/* Project Advisore */}
            {/* Staff Advisors */}
            {/* <AWSTFooter/> */}
        </div>
    )
}
