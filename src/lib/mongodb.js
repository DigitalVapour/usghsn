import mongoose from "mongoose";

export default async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;
        connection.on('connect', () => {
            console.log("Connected to MongoDB successfully");
        })
        connection.on('error', (error) => {
            console.log("Error connecting to MongoDB", error);
            process.exit()
        })

    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}