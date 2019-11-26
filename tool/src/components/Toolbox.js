import React from 'react';

import { SavedContainer } from './SavedContainer'
import { Build } from './Build'
import { NewBuild } from './NewBuild'

import '../styling/Toolbox.scss'

export const Toolbox = () => {
    return (
        <div class="main-container">
            <div class="title-container">Itemization Tool</div>
            <SavedContainer />
            < Build />
            <></>
        </div>
    )
}