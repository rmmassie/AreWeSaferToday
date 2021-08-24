import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles';
import VideoEmbed from './VideoEmbed'
import Hero from './Hero'
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
        
        justifyContent: 'center',
        alignContent: 'center',
        height: '50vh',
        
      },
    
      
  }));

export default function MainContainer() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Hero />
            <VideoEmbed/>
            <Support />
            <Team />
            <AWSTFooter/>
        </div>
    )
}
