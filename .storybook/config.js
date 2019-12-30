import { configure, setAddon, addDecorator} from '@storybook/react';

//Addons
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator(withInfo); 
addDecorator(withKnobs);
setAddon(JSXAddon);

const
    req = require.context('../src', true, /.stories.js$/),
    loadStories = ()=>{
        require('./Welcome');
        req.keys().forEach(file => req(file));
    };
    
configure(loadStories, module);
    
    