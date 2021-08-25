import React from 'react'

export default function Portrait(props) {
    console.log('Card: Image: ', props)
    return (
        <div >
            <img className={props.theme} src={props.image} alt="Not Here" />        
        </div>
    )
}
