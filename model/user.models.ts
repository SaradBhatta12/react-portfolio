import mongoose, { Document, Schema } from "mongoose";

// Define an interface representing a document in MongoDB
interface IAdmin extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema corresponding to the document interface
const AdminSchema: Schema<IAdmin> = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create a model
const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);

// // Ensure there is only one admin document in the collection
// Admin.countDocuments({}, (err: any, count: number) => {
//   if (err) {
//     console.error(err);
//   } else if (count === 0) {
//     // If no admin user exists, create one
//     const admin = new Admin({
//       username: "sarad",
//       password: "saradbhatta", // Ensure to hash the password in a real application
//       email: "saradbhatt2@gmail.com",
//     });
//     admin.save((err: any) => {
//       if (err) {
//         console.error("Error creating admin user:", err);
//       } else {
//         console.log("Admin user created successfully");
//       }
//     });
//   } else {
//     console.log("Admin user already exists");
//   }
// });

export default Admin;
