import React from 'react';
import { SavedBuild } from './SavedBuild'
import '../styling/SavedContainer.scss';

export const SavedContainer = () => {
    let data = ["Saved1", "Saved2", "Saved3", "Saved4", "Saved5", "Saved6", "Saved7"]
    
    return (
        <div class="saved-container">
            {data.map(build => {
                return <SavedBuild name={build} />
            })}
        </div>
    )
}