import express from 'express';
import { addSignupUser,addSigninUser } from '../controllers/authcontroller.js';




const Router = express.Router();





Router.post("/signup",addSignupUser)
Router.post("/signin",addSigninUser)






export default Router