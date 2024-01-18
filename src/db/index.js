import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB = async () => {

    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`DB connected successfully`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch(err) {
        console.log('Error occured while connecting DB ', err);
        console.log('Exiting process');
        process.exit(1);
    }


}

export default connectDB;