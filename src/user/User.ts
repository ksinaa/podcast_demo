import mongoose from "mongoose";

interface IUser extends mongoose.Document {
    userName: String;
    email: String
    password: String
}

const Users = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // podcasts: {

    // },
    // history: {

    // }

})


export default mongoose.model<IUser>('users', Users);