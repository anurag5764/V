import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const databaseConnection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://danurag983:fWCKKZsV4Ws31sHQ@viewflix-cluster.hpsiumr.mongodb.net/"
    )
    .then(() => {
      console.log("mongodb connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default databaseConnection;
