import React from 'react'
import Text from './Text'
import Portrait from './Portrait'

export default function BioCard(props) {
    
    return (
        <div className={props.theme.cardWrapper}>
            <Portrait imgTheme={props.theme.teamImage} image={props.data.imagePath}></Portrait>
            <Text theme={props.theme.teamTitle}>{props.data.title}</Text>
            <Text theme={props.theme.teamDescription}>{props.data.description}</Text>
        </div>
    )
}
