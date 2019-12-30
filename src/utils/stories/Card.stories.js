import React from 'react';
import {storiesOf} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

//Components
import Card from '../../atoms/Card';

//Story
storiesOf('Cards', module)
    .addDecorator(withInfo)
    .add(
        'Card Panels', 
        ()=>{return(
        <Card title="Sample">My Card Content</Card>)},  
        { info: 
            {
                text:`Card wrapper for information.`,
                styles: {
                    header: {
                        h1: {
                            color: 'red',
                        }
                    }
                }
            }
        }
    );