const app = require('./app');
const { react } = require('./config');
const next = require('next');

//check environment
const dev = true;

//set up Next.JS
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    
    //our master react route
    app.get('*', (req,res) => {
        return handle(req,res); 
    });

    //run the app on a set port instead of serverless
    app.listen(react, () =>{
        console.log(`Server is running locally: http://localhost:${react}`);
    });

    
});

