import React from 'react';
import PageBuilder from '../PageBuilder';
import GrapesjsMain from '../../components/GrapeConfig';

const AppContainer = (props) => {
    return (
        <div>
            <GrapesjsMain {...props}/>
        </div>
    )
}

export default AppContainer