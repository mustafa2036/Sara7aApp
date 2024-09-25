import { connect } from "mongoose";

// 1- Connect Database With mongodb
export const dbConnection =  connect('mongodb+srv://Saraha-app:MFoYBtW4BonX9BjX@cluster0.qqwtl.mongodb.net/Saraha-app')
.then(() => {
    console.log('database Connected');
})
.catch(() => {
    console.log('error');
})