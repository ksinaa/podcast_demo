import mongoose from "mongoose";

interface IPodcast extends mongoose.Document{
    subject: String,
    file: Buffer,
    publisherId: String,
    duration: Number,
    describtion: String,
}

const podcast = new mongoose.Schema({
    
    subject: {
        type: String,
        required: true
    },
    file: {
        type: Buffer,
        required: false
    },
    publisherId: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: false
    },
    describtion: {
        type: String,
        required: false
    }

})

export default mongoose.model<IPodcast>('podcasts', podcast)