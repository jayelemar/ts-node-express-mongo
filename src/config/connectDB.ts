import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,  // Corrected option name
        } as ConnectOptions);
        console.log(`MongoDB Connected: ${connect.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
