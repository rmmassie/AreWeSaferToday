import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    teamWrapper: {
        color: theme.palette.secondary.dark,
        background: theme.palette.primary.light,
        width: '100vw',
        height: '25vh',
        flexFlow: 'column wrap',
        justifyContent: 'space-evenly',
        
      },
    }
));
export default function Team() {
    const classes = useStyles();
    return (
        <div className={classes.teamWrapper}>
            <h4>Meet the Team Stuff</h4>
        </div>
    )
}
