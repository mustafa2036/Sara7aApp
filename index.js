import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import { bootstrap } from './src/modules/bootstrap.js'
import session from 'express-session'
import path from 'path'
import cors from 'cors'
import mongoSession from 'connect-mongodb-session'
let mongoDBStore = mongoSession(session)

const app = express()
const port = process.env.PORT || 3000;

var store = new mongoDBStore({
    uri: 'mongodb://localhost:27017/sarahahApp1',
    collection: 'mySessions'
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store
}))

app.use(cors());
app.set("views", path.resolve() + "/views")
app.set("view engine", "ejs")
app.use(express.static(path.join(path.resolve(), "public")))

app.use(express.urlencoded( { extended: true } ))
bootstrap(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))