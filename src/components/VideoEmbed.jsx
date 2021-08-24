import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    embed: {
        // color: theme.palette.primary,
        // background: theme.palette.secondary.dark,
        width: '85%',
        height: '100%',
        position: "relative",
        // paddingBottom: "56.25%" /* 16:9 */,
        // paddingTop: "1vh" /* 16:9 */,
        margin: 'auto',
      },
      iframe: {
        position: "absolute",
        top: 15,
        left: 0,
        width: "100%",
        height: "85.1%"
      }
           
  }));

const YoutubeEmbed = ({ embedId }) => {
    const classes = useStyles();
    return (
        <div className={classes.embed}>
            <iframe className={classes.iframe} src="https://www.youtube.com/embed/pnyyMFMYcjU" 
                title="Are We Safer Today" 
                frameBorder="0" 
                allow="autoplay;" 
                >
            </iframe>
        </div>
)};


export default YoutubeEmbed;