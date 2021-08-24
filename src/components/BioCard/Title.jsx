
import React from 'react'

export default function Title(props) {
    let className = props.classes
    let text = props.text
    return (
        <div className={className}>
            {text}
        </div>
    )
}
