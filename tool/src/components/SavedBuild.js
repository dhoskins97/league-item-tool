import React from 'react';
import '../styling/SavedBuild.scss'

export const SavedBuild = (props) => {
    return (
        <div class="build-container">{props.name}</div>
    )
}