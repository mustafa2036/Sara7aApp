import { Router } from "express"
import { messages } from "./messages.controller.js";


let messageRouter = Router();

messageRouter.get('/', messages)

export default messageRouter;