import mongoose from "mongoose"

let isConnect = false

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnect) {
        console.log("Connected to MongoDB");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "shared_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnect = true;
        console.log("MongoDB Connected")

    } catch (error) {
        console.log(error)
    }
}
