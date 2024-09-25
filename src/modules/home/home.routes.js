import { Router } from "express"
import { home } from "./home.controller.js";

let homeRouter = Router();

homeRouter.get('/home', home)

export default homeRouter;