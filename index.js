import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import session from 'express-session'
import path from 'path'
import cors from 'cors'
import mongoSession from 'connect-mongodb-session'
import homeRouter from './src/modules/home/home.routes.js'
import loginRouter from './src/modules/login/login.routes.js'
import messageRouter from './src/modules/messages/messages.routes.js'
import registerRouter from './src/modules/register/register.routes.js'
import userRouter from './src/modules/user/user.routes.js'
let mongoDBStore = mongoSession(session)

const app = express()
const port = process.env.PORT || 3000;

var store = new mongoDBStore({
    uri: 'mongodb+srv://Saraha-app:MFoYBtW4BonX9BjX@cluster0.qqwtl.mongodb.net/Saraha-app',
    collection: 'mySessions'
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store
}))

app.use(cors());
app.set("/views", path.resolve() + "/views")
app.set("view engine", "ejs")
app.use(express.static(path.join(path.resolve(), "/public")))

app.use(express.urlencoded( { extended: true } ))
// api endpoint
app.use('/api/saraha/home', homeRouter)
app.use('/api/signup', registerRouter)
app.use('/api/signin', loginRouter)
app.use('/api/messages', messageRouter)
app.use('/api/user', userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))