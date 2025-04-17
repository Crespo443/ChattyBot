import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MONGODB Connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`MONGODB Connection Error ${error}`);
    }
}

export default connectDB