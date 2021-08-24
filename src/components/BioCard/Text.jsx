
import React from 'react'
export default function Description(props) {
    return (
        <div className={props.theme}>
           {props.children}
        </div>
    )
}
