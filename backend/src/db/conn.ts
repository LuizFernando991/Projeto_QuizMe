import mongoose from 'mongoose'

async function main() : Promise<void> {
    await mongoose.connect('mongodb://localhost:27017/quizme')
    console.log('Conectado ao banco de dados')
}
main().catch(err=>console.log(err))

export default mongoose