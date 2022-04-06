import { Response } from 'express'
import User, { UserInterface } from '../models/User'
import jwt from 'jsonwebtoken'

interface JwtPayload{
    name : string
    id : string
}

async function getUserByToken (token : string , res : Response) : Promise<UserInterface|void> { 
    
    const { id } = jwt.verify(token, 'secret') as JwtPayload

    const user  = await User.findOne({ _id : id }).select('-password')
    
    if(user){
        return user
    }
    return
}

export default getUserByToken