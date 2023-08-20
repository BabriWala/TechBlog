import mongoose from "mongoose";

const connection = async () => {
  try {
    // console.log(process.env.MONGO)
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection is Failed");
  }
};

export default connection;