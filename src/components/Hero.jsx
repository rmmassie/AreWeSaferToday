import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        // color: theme.palette.primary,
        // background: theme.palette.primary.dark,
        width: '100vw',
        height: '100vh',
        zIndex:-10,
        //display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        padding: '2vw'
      },
      top: {
        color: theme.palette.primary.dark,
        fontSize: '2vw',
        textAlign: 'left',
        width: '80vw',
        
        alignSelf: 'flex-start',
    },
    mid: {
        color: theme.palette.secondary.dark,
        fontSize: '8vw',
        textAlign: 'center',
        width: '80vw',
        
        alignSelf: 'flex-start',
    },
    btm: {
        color: theme.palette.primary.dark,
        fontSize: '2vw',
        textAlign: 'right',
        width: '80vw',
        
        alignSelf: 'flex-end',
      }

    }
));
export default function Hero() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
           <div className={classes.top}>
           <p>
                20 Years After September 11th,
                </p>
            </div>
            <div className={classes.mid}>
            <p>
                Are We Safer Today?
                </p>
            </div>
            <div className={classes.btm}>
               
            <p>  A retrospective account of September </p>
            <p>  11th, 2001, the 9/11 Commission, and </p>
            <p>  the men who authored it. </p>
                
            </div>
        </div>
    )
}
