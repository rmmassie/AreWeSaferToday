import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
   
//       iframe: {
//         // position: "relative",
//         // top: 5,
//         // left: 0,
//         width: "100%",
//         height: "100%"
//       }
           
//   }));

const YoutubeEmbed = (props) => {
    console.log(props)
    // const classes = useStyles();
    return (
        // <div className={props.theme}>
            <iframe className={props.theme} src="https://www.youtube.com/embed/ngfqhE_6m0E" 
                title="Are We Safer Today" 
                frameBorder="0" 
                allow="autoplay;" 
                >
            </iframe>
        // </div>
)};


export default YoutubeEmbed;