import React from 'react'
export default function Summary(props) {
    
    return (
        <div className={props.theme}>
           {props.data}
        </div>
    )
}