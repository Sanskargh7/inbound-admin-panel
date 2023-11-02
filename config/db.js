
import mongoose from 'mongoose';

const connection = async () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("database connected succesfully")
    }).catch((error) => {
        console.log(error)
    })
}
export default connection