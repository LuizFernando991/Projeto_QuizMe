import mongoose from '../db/conn'
import { Schema, Document, Types } from 'mongoose'


export interface UserInterface extends Document {
    name : string
    email : string
    password : string
    image ?: string
    qtd_correct_answers : number
    qtd_wrong_answers : number
}

const UserSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    qtd_correct_answers : {
        type : Number,
        default : 0
    },
    qtd_wrong_answers : {
        type : Number,
        default : 0
    }
})

export default mongoose.model<UserInterface>('User', UserSchema)

