import multer from 'multer'
import path from 'path'

// Destinatio to store the images

const imageStorage = multer.diskStorage({
    
    destination : (req, file, cb)=>{
        const folder = 'src/public/images'
        cb(null, folder)
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now()+String(Math.floor(Math.random()*10)) + path.extname(file.originalname))
    }
})

const imageUpload = multer({
    storage : imageStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error ('Just png or jpg files'))
        }
        cb(null, true)
    }
})

export default imageUpload