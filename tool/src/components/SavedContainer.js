import React from 'react';
import { SavedBuild } from './SavedBuild'

export const SavedContainer = () => {
    let data = ["Saved1", "Saved2", "Saved3" ]
    
    return (
        <div>
            {data.map(build => {
                return <SavedBuild name={build} />
            })}
        </div>
    )
}