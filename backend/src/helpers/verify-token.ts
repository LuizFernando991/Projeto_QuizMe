import { Request, Response, NextFunction} from 'express'
import  jwt from 'jsonwebtoken'
import getToken from './get-token'

function verifyToken (req : Request, res : Response, next : NextFunction){

    if(!req.headers.authorization){
        return res.status(401).json({ message : 'invalid token'})
    }
    const token = getToken(req)
    if(!token){
        return res.status(401).json({ message : 'not authorized'})
    }
    try{
        const verified = jwt.verify(token, 'secret')
        next()
    }catch(err){
        res.status(400).json({ message : 'invalid token'})
    }
    
}

export default verifyToken