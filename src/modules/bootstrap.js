import homeRouter from "./home/home.routes.js"
import loginRouter from "./login/login.routes.js"
import registerRouter from "./register/register.routes.js"
import messageRouter from "./messages/messages.routes.js"
import userRouter from "./user/user.routes.js"


export const bootstrap = (app) => {
    app.use('/', homeRouter)
    app.use('/', loginRouter)
    app.use('/', registerRouter)
    app.use('/', userRouter)
    app.use('/messages', messageRouter)
}