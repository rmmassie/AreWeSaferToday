import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Text from './Text'
import VideoEmbed from '../VideoEmbed'
import ReactPlayer from 'react-player';
import Image from './Image'
import Box from '@material-ui/core/Box'

const headerText = {
    leadin: 'Are We Safer Today?',
    large: '9-11',
    summary: 'The members of the 9/11 Commission reunite to reflect on the largest investigation in US history and to assess our nation’s progress over the last 20 years.  The film will air on public television in the fall of 2022.'
}

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        container: {
            background: theme.palette.primary.dark,
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            // padding: '3vw'
        },
        heroLogo: {
            margin: 'auto',
            padding: '2vh',
            width: 150,
            position: 'absolute',
            top: 55,
            left: 5,
            zIndex: 100,
        },
        heroText: {
            background: theme.palette.secondary.main,
            width: '90vw',
            height: 'auto',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '2vh',
            
        },
        heroTextInternal: {
            color: theme.palette.primary.dark,
            fontSize: '20px',
        },
        heroVideo: {
            width: '100vw',
            height: '58%',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: "2vh" /* 16:9 */,
        },
        lowerHolder: {
            boxSizing: 'border-box',
            resize: 'horizontal',
            overflow: 'auto',
            maxWidth: '100%',
            height: '65vh',
            position: 'absolute',
            bottom: 10,
            left: 0,
            // width: '100%',
            // height: '55vh'
        }
    },
    [theme.breakpoints.between('sm','md')]: {
        container: {
            backgroundImage: 'url(./images/meeting.jpg)',
            backgroundPosition: 'center', /* Center the image */
            backgroundRepeat: 'no-repeat', /* Do not repeat the image */
            backgroundSize: '100% auto ', /* Resize the background image to cover the entire container */
            height: '100vh',
            width: '100vw',
        },
        heroLogo: {
            margin: 'auto',
            padding: '2vh',
            width: 150,
            position: 'absolute',
            top: 55,
            left: 5,
            zIndex: 100,
        },
        heroText: {
            background: theme.palette.secondary.main,
            // margin: 'auto',
            padding: '2vh',
            width: '35vw',
            position: 'absolute',
            bottom: '3vh',
            left: '3vh',
            zIndex: 100,
            
        },
        heroTextInternal: {
            color: theme.palette.primary.dark,
            fontSize: '20px',
        },
        heroVideo: {
            width: '67vw',
            height: '70%',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: "2vh" /* 16:9 */,
        },
        lowerHolder: {
            boxSizing: 'border-box',
            resize: 'horizontal',
            // overflow: 'auto',
            maxWidth: '100%',
            height: '58vh',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            overflow: 'hidden'

            // width: '100%',
            // height: '55vh'
        }
    },
    [theme.breakpoints.up('lg')]: {
        container: {
            backgroundImage: 'url(./images/meeting.jpg)',
            backgroundPosition: 'center', /* Center the image */
            backgroundRepeat: 'no-repeat', /* Do not repeat the image */
            backgroundSize: '100%', /* Resize the background image to cover the entire container */
            // display: 'flex',
            // flexFlow: 'column wrap',
            // justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            // padding: '3vw'
        },
        heroLogo: {
            margin: 'auto',
            padding: '2vh',
            width: 150,
            position: 'absolute',
            top: 55,
            left: 5,
            zIndex: 100,
        },
        heroTextdesc: {
            background: theme.palette.secondary.main,
            // margin: 'auto',
            padding: '2vh',
            width: '35vw',
            position: 'absolute',
            bottom: '3vh',
            left: '3vh',
            zIndex: 100,
            
        },
        heroTexttitle: {
            background: theme.palette.secondary.main,
            // margin: 'auto',
            padding: '2vh',
            width: '35vw',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
           
            
        },
        heroText: {
            color: theme.palette.primary.dark,
            fontSize: '22px',
        },

        heroTextInternal: {
            color: theme.palette.primary.dark,
            fontSize: '16px',
        },
        heroVideo: {
            width: '50vw',
            height: '100%',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: "2vh" /* 16:9 */,
        },
        corpLogo: {
            margin: 'auto',
            padding: '2vh',
            width: 600,
            position: 'absolute',
            top: '32%',
            right: '50%',
            transform: 'translate(50%,-50%)',
            zIndex: 100,
        }
       
    },
 
}
));
export default function Hero() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
                <Image image={'./images/ntlogo_h.png'} theme={classes.heroLogo} />
                <Image image={'./images/logo.png'} theme={classes.corpLogo} />
                    {/* <ReactPlayer url={'https://www.youtube.com/watch?v=ngfqhE_6m0E'}/> */}
                    <Box boxShadow={6} bgcolor='#ededed' className={classes.heroTexttitle}>
                        <Text theme={classes.heroTextInternal} data={headerText.leadin}/>
                    </Box>
                    <Box boxShadow={6} bgcolor='#ededed' className={classes.heroTextdesc}>
                        <Text theme={classes.heroTextInternal} data={headerText.summary}/>
                    </Box>
               
            <div className="heroTrailer">
            </div>
        </div>
    )
}
