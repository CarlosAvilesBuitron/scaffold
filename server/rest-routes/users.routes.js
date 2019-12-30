//import controller
const controller = require('../rest-controllers/users.controllers');

module.exports = (app) =>{
    
    app.get('/server/users', controller.users);
    
    app.get('/server/user/:id', controller.user);
    
    app.post('/server/user', controller.new);
    
    app.put('/server/user/:id', controller.update);
    
    app.delete('/server/user/delete', controller.delete);
    
};