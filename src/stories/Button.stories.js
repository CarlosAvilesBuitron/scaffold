import React from 'react';
import {storiesOf} from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

//Components
import Button from '../atoms/Button';

//Story
storiesOf('Buttons', module)
    .addWithJSX(
        'Universal Button', 
        ()=>{return(
        <Button 
        bg={text('bg', `green`)}
        copy={text('copy', `Click here`)}
        >My Button</Button>)},  
        { info: {text:`Generic button that accepts a color.`, inline: true, header: false }}
    );