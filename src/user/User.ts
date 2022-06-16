import mongoose from "mongoose";

import Podcast from '../podcast/Podcast'

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
    podcasts: [{
        podcastId: String 
    }],
    history: [{
        podcastId: String,
        time: Number
    }],
    subscribe: [{
        userId: String
    }]


})


export default mongoose.model<IUser>('users', Users);