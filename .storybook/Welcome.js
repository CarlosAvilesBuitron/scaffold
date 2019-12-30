import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
    .add(
        'Welcome Page', 
        ()=>{return(
            <React.Fragment>
                <h1>Scaffold with Serverless</h1>
                <p>UI example of Storybook implementation on a Severless NextJS app.</p>
            </React.Fragment>
        )   
    }
);
