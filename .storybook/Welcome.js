import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
    .add('Welcome Page', ()=>{
        return(<h1>Welcome to Storybook</h1>); 
    }
);