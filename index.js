const serverless = require('serverless-http');
const app = require('./app');

const next = require('next');

//check environment
const dev = false;

//set up Next.JS
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    
    //our master react route
    app.get('*', (req,res) => {
        return handle(req,res); 
    });
    
});

//export the app for use with serverless
module.exports.handler = serverless(app);


