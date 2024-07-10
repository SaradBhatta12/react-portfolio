import mongoose, { ConnectOptions } from "mongoose";

const ConnectDB = (): void => {
  mongoose
    .connect(`${process.env.Mongo_Uri}`, {
      dbName: "portfolio",
    } as ConnectOptions)
    .then(() => {
      console.log("successfully connect with db");
    })
    .catch((err: any) => {
      console.log("failed to connect with db" + err);
    });
};

export default ConnectDB;
