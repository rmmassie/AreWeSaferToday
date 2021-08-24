import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Text from './Text'
import VideoEmbed from '../VideoEmbed'
import Image from './Image'

const headerText = {
    leadin: '',
    large: '9-11',
    summary: 'Are We Safer Today?” is a multi‐faceted project by NapTown Media focused on the work and the impact of the 9/11 Commission, two decades after the terrorist attacks on the United States. '
}


const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
    
    },
    [theme.breakpoints.between('sm','md')]: {
        container: {
            // background: theme.palette.primary.dark,
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            height: '50vh',
            width: '100vw',
            // padding: '3vw'
        },
    },
    [theme.breakpoints.up('lg')]: {
        container: {
            background: theme.palette.secondary.dark,
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
           // padding: '3vw'
        },
        tl: {
            // background: theme.palette.primary.dark,
            width: '50%',
            height: '35%'
        },
        tr: {
            // background: theme.palette.primary.dark,
            width: '50%',
            height: '35%'
        },
      
        bl: {
            // background: theme.palette.secondary.dark,
            width: '50%',
            height: '50%'
        },
        br: {
            // background: theme.palette.secondary.dark,
            width: '50%',
            height: '50%',
            // padding: '5vh',
        },
        summaryText: {
            padding: '3vh',
            color: theme.palette.primary.dark,
            fontSize: '28px'
        },
        logoImage: {
            padding: '2vw',
            display:'block',
            margin:'auto',
            width: '80%',
            // height: 'auto',
            // paddingBottom: '53.46%'
            // borderRadius: '50%'
    },
    },
    
 
}
));
export default function Hero() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
           <div className={classes.tl}>
               <Image imgTheme={classes.logoImage} image={'./images/logo.png'}/> 
           </div>
           <div className={classes.tr}>
               <Image imgTheme={classes.logoImage} image={'./images/headerimg.png'}/> 
           </div>
            
            <div className={classes.bl}>
                <VideoEmbed />
           </div>
            <div className={classes.br}>
                <Text theme={classes.summaryText} data={headerText.summary}/>
            </div>
        </div>
    )
}
