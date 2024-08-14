import { Router } from "express";
import { handleRegister, registerMessage } from "./register.controller.js";


let registerRouter = Router();

registerRouter.get('/register', registerMessage)

registerRouter.post('/handleRegister', handleRegister)

export default registerRouter;