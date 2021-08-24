import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BioCard from './BioCard/BioCard'

let teamHash = [
    {
        position: 1,
        title: 'Bob Massie',
        imagePath: './images/bmHead.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque purus, tristique at sagittis eget, pharetra nec nunc. Quisque cursus vitae nunc pulvinar vestibulum. Phasellus nec est dictum tortor efficitur sagittis venenatis varius dolor. Curabitur iaculis purus ac elit varius cursus. Sed pellentesque libero ac turpis sodales, in rutrum nibh laoreet. Vestibulum nec turpis vel erat scelerisque vulputate ut in nisi. Nullam a ligula felis. Integer et nisi sit amet lectus consequat vestibulum. Etiam faucibus ultrices risus ut elementum. Sed pellentesque lacus est, vel blandit nibh gravida ac. Phasellus aliquam libero in metus auctor, eget tincidunt velit porttitor. Pellentesque pellentesque rhoncus mi sit amet sollicitudin. Proin id mi sagittis, porttitor tellus sed, semper mauris.'
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
        description: 'Paul Wilson Jr. (P.J.) has worked in the video/film production industry for nearly 25 years and currently owns and operates Beyond Above Media LLC, a full service media production company.  As a producer, director, writer, videographer and editor he has been a part of many award-winning productions including the critically acclaimed film In the Company of Men, winner of the 1997 Sundance Film Festival’s Filmmaker’s trophy.  With extensive experience working on numerous broadcast series for ESPN, A&E, Fine Living Channel, Urban Movie Channel, Military Channel and Discovery Channel, P.J. is also a producer for ABC News and regularly contributes to feature and breaking news stories for Good Morning America and World News Tonight. \nRecent Awards include: 2021 Hermes Creative Awards (Gold), 2021 Telly Awards (Gold & 2 Silver), 2020 Telly Awards (2 Gold & 2 Silver), 2020 W3 Awards (Silver) and 2019 Telly Awards (Silver)'
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
