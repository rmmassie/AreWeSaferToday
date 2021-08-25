import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BioCard from './BioCard/BioCard'

let teamHash = [
    {
        position: 1,
        title: 'Bob Massie',
        imagePath: './images/bmHead.png',
        description: 'Executive Producer Bob Massie brings decades of experience to the Naptown Team. Massie has been honored with business awards (the Kelley School of Business, Inc. Magazine, Experian and others) as well as film awards (a dozen Telly Awards and most recently Laurels for a film that was “Official Selection” in the Heartland Film Festival.'
    },
    {
        position: 2,
        title: 'Shelby Hiltunen',
        imagePath: './images/shHead.png',
        description: 'Producer Shelby Hiltunen is a writer, producer, director, and professionally trained actress (William Esper Studio, New York City). Most recently, Shelby produced an award-winning scripted series, The Usual, for which she earned accolades from Hollywood New Directors, the International New York Film Festival and other industry organizations.  She has a new documentary series in development focused on women who are transforming our world -- Rare Air. '
    },
    {
        position: 3,
        title: 'PJ Wilson',
        imagePath: './images/pjwHead.png',
        description: 'Paul Wilson Jr. (P.J.) has worked in the video/film production industry for nearly 25 years and currently owns and operates Beyond Above Media LLC, a full-service media production company. An award-winning producer, director, writer, videographer and editor, PJ has been a part of many award-winning productions.  His clients include ESPN, A&E, Discovery Channel, ABC News, Good Morning America and other major networks. '
    }
]

const useStyles = makeStyles((theme) => ({
    teamHeader: {
        color: theme.palette.primary.dark,
        background: theme.palette.secondary.dark,
        width: '100%',
        height: 'auto',
        fontSize: '32px',
        padding: '1vw',
        textAlign:'center'
    },
    [theme.breakpoints.down('sm')]: {
        teamWrapper: {
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'center',
            width: '100vw',
            // padding: '3vw'
        },
        cardWrapper: {
            color: theme.palette.secondary.light,
            background: theme.palette.primary.dark,
            width: '100%',
            // height: 'fit-content',
            justifyContent: 'center',
            padding: '2vw'
        },
        teamDescription: {
            width: '100%',
            textAlign:'left',
            color: theme.palette.primary.dark,
            background: theme.palette.secondary.light,
            fontSize: '20px',
            padding: '2vh'
           },
        teamTitle: {
            color: theme.palette.secondary.light,
            background: theme.palette.primary.light,
            width: '100%',
            height: 'auto',
            fontSize: '32px',
            padding: '5vw',
            textAlign:'center',
        },
        teamImage: {
            padding: '1vh',
            display:'block',
            margin:'auto',
            width: '80%',
            borderRadius: '50%'
    },
    },
    [theme.breakpoints.between('sm','md')]: {
        teamWrapper: {
            background: theme.palette.primary.dark,
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            width: '100vw',
            // padding: '3vw'
        },
        cardWrapper: {
            color: theme.palette.secondary.light,
            background: theme.palette.primary.dark,
            width: '50%',
            // height: 'fit-content',
            justifyContent: 'center',
            padding: '2vw'
        },
        teamDescription: {
            width: '100%',
            textAlign:'left',
            color: theme.palette.primary.dark,
            background: theme.palette.secondary.light,
            fontSize: '28px',
            padding: '2vh'
           },
        teamTitle: {
            color: theme.palette.secondary.light,
            background: theme.palette.primary.light,
            width: '100%',
            height: 'auto',
            fontSize: '32px',
            padding: '5vw',
            textAlign:'center',
        },
        teamImage: {
            padding: '1vw',
            display:'block',
            margin:'auto',
            width: '80%',
            borderRadius: '50%'
    },
    },
    [theme.breakpoints.up('lg')]: {
        teamWrapper: {
            background: theme.palette.primary.dark,
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            width: '100vw',
            // padding: '3vw'
        },
        cardWrapper: {
            color: theme.palette.secondary.light,
            background: theme.palette.primary.dark,
            width: '33%',
            // height: 'fit-content',
            justifyContent: 'center',
            padding: '2vw'
        },
        teamDescription: {
            width: '100%',
            textAlign:'left',
            color: theme.palette.primary.dark,
            background: theme.palette.secondary.light,
            fontSize: '18px',
            padding: '2vh'
           },
        teamTitle: {
            color: theme.palette.secondary.light,
            background: theme.palette.primary.light,
            width: '100%',
            height: 'auto',
            fontSize: '32px',
            padding: '2vw',
            textAlign:'center',
        },
        teamImage: {
            padding: '1vw',
            display:'block',
            margin:'auto',
            width: '80%',
            borderRadius: '50%'
    },
    },
 
}
    
));

export default function Team() {
    const classes = useStyles();
    
    return (
        
        
        <div className={classes.teamWrapper}>
            <div className={classes.teamHeader}>Our Team</div>
          {
              teamHash.map(person => {
                  return (<BioCard theme={classes} data={person} ></BioCard>)
              })
          }

        </div>
    )
}
