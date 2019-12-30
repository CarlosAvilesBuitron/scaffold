import React from 'react';
import {storiesOf} from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

//Components
import Button from '../../atoms/Button';

//Story
storiesOf('Buttons', module)
    .addDecorator(withInfo)
    .add(
        'Universal Button', 
        ()=>{return(
        <Button 
        bg={text('bg', `green`)}
        copy={text('copy', `Click here`)}
        >My Button</Button>)},  
        { info: {text:`Generic button that accepts a color.`, inline: true, header: false }}
    );