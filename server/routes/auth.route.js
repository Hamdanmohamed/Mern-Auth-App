import express from 'express';
import { addSignupUser } from '../controllers/authcontroller.js';




const Router = express.Router();





Router.post("/signup",addSignupUser)






export default Router