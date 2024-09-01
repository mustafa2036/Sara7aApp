import { connect } from "mongoose";

// 1- Connect Database With mongodb
export const dbConnection =  connect('mongodb://localhost:27017/sarahahApp1')
.then(() => {
    console.log('database Connected');
})
.catch(() => {
    console.log('error');
});