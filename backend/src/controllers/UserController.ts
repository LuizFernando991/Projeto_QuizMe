import { Request, Response } from 'express'
import  User  from '../models/User'
import bcrypt from 'bcrypt'
import getUserByToken from '../helpers/getUserByToken'
import createToken from '../helpers/create-token'
import getToken from '../helpers/get-token'

export default class UserController {

    public static async registerUser (req : Request, res : Response) : Promise<Response>{

        const { name , email , password, confirmPassword } = req.body
        // Validade if all data is not empty
        if(!name){
            return res.status(422).json({ message : 'name is required'})
        }
        if(!email){
            return res.status(422).json({ message : 'email is required'})
        }
        if(!password){
            return res.status(422).json({ message : 'password is required'})
        }
        if(!confirmPassword){
            return res.status(422).json({ message : 'confirmPassword is required'})
        }
        if(password !== confirmPassword){
            return res.status(422).json({ message : 'password must match with confirmPassword'})
        }
        // Validate if user already exists
        const userExists = await User.findOne({ email : email })

        if(userExists){ 
            return res.status(422).json({message : 'user already exists ta parando aqui'})
        }
        // Encrypting password before save in db    
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password.trim(), salt)
        // Create new User
        const user = new User({
            name : name.trim(),
            email : email.trim(),
            password : passwordHash,
            image : ''
        })
        try{
            await user.save()
            // Return token to front-end
            return createToken(user, req, res)
        }catch(err){
            return res.status(500).json({ message : 'internal error'})
        }
    }

    public static async loginUser(req : Request, res : Response) : Promise<Response>{
        
        const { email, password } = req.body
        if(!email){
            return res.status(422).json({message : 'email is required'}) 
        }
        if(!password){
            return res.status(422).json({message : 'password is required'})
        }
        // check if user exists
        const user = await User.findOne({ email : email })
        if(!user){
            return res.status(422).json({message : 'user not found'})
        }else{
            // check if password match with db password
            const checkPassword = await bcrypt.compare(password, user.password)
            if(!checkPassword){
                return res.status(422).json({message : 'wrong password'})
            }
            return await createToken(user, req, res)

        }
    }

    public static async getUser (req : Request, res : Response) : Promise<Response>{

        const userToken = getToken(req)

        if(!userToken){
            return res.status(401).json({ message : 'unauthorized'})
        }

        const user = await getUserByToken(userToken, res)

        
        if(!user){
            return res.status(422).json({ messagem : 'User not found'})
        }
        return res.status(200).json(user)
    }

    public static async newUserAnswer (req : Request, res : Response) : Promise<Response>{

        const userToken = getToken(req)
        if(!userToken){
            return res.status(401).json({ message : 'unauthorized'})
        }
        const user = await getUserByToken(userToken, res)
        let newUser
        if(!user){
            return res.status(404).json({ message : 'user not found'})
        }else{
            const { isCorrect } = req.body
            if(isCorrect){
                let new_qtd_correct_answers = user.qtd_correct_answers + 1
                newUser = { qtd_correct_answers : new_qtd_correct_answers}
            }else{
                let new_qtd_wrong_answers = user.qtd_wrong_answers + 1
                newUser = { qtd_wrong_answers : new_qtd_wrong_answers}
            }
        }
        try{
            const updatedUser = await User.findOneAndUpdate({ _id : user._id}, newUser)
            return res.status(200).json({user : updatedUser})
        }catch(err){
            return res.status(500).json({ message : 'internal error'})
        }  
    }

    public static async updateUser (req : Request, res : Response ) : Promise<Response>{
        
        const userToken = getToken(req)
        if(!userToken){
            return res.status(401).json({ message : 'unauthorized'})
        }

        const user = await getUserByToken(userToken, res)
        if(!user){
            return res.status(404).json({ message : 'user not found'})
        }

        const dataUpdated = req.body
        if(!dataUpdated){
            return res.status(422).json({ message : 'data is required'})
        }
        
        try{
            const updatedUser = await User.findOneAndUpdate({_id : user._id}, dataUpdated).select('-password')
            return res.status(200).json({user : updatedUser})
        }catch(err){
            return res.status(500).json({ message : 'internal error'})
        }

    }

}  