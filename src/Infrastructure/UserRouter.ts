import express from "express";
import { UserContoller } from "./UserController";
import {userContoller} from "./dependencies"





export const userRouter = express.Router();
// cuando se ejecute el caso de uso UserContoller que ejecute el método UserContoller
userRouter.post("/:id/welcome", userContoller.run.bind(userContoller));


// otra forma de hacerlo, pero como tenemos las dependencias pues las traemos.
// import { WelcomeEmailSender } from '../Application/WelcomeEmailSender';
// const welcomeEmailSender = new WelcomeEmailSender();
// const userContoller = new UserContoller(welcomeEmailSender);
// userRouter.post("/:id/welcome", userContoller.run.bind(UserContoller));
