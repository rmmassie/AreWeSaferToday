import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerWrapper: {
        color: theme.palette.secondary.light,
        background: theme.palette.primary.dark,
        width: '100vw',
        height: '25vh',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'space-evenly',
        padding: '0'
      },
     logo: {
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: '1vh'
        
     },
     footerInfo: {
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: '1vh',
        display: 'inline-block',
        alignSelf: 'flex-end',
     }
    }
));
export default function AWSTFooter() {
    const classes = useStyles();
    return (
        <div className={classes.footerWrapper}>
            <div className={classes.logo}>Logo</div>
            <div className={classes.footerInfo}>
                <p>NapTown Media, Inc.</p>
                <p>Indianapolis, Indiana  46259</p>   
                <p>contact@naptownmedia.com</p>   
                  
                
            </div>
        </div>
    )
}

