const AuthenticaitonController = require('./controllers/AuthenticationController')


module.exports = (app) => {
    app.post('/register',
        AuthenticaitonController.register)
}