import express from 'express';
import homeController from '../controllers/homeController'
let router = express.Router()
let initWebRoute = (app) =>{
    router.post('/api/creatLogin',homeController.handleCreatLogin)
    router.post('/api/login',homeController.handleLogin)
    return app.use('/',router);
}
module.exports = initWebRoute;