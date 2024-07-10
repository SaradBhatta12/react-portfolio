import mongoose, { Schema, Document } from "mongoose";

interface Expriences extends Document {
  title: string;
  conpany_name: string;
  duration: string;
  tasks: string;
}

const exprienceSechma: Schema<Expriences> = new Schema({
  title: { type: String, required: true },
  conpany_name: { type: String, required: true },
  duration: { type: String, required: true },
  tasks: { type: String, required: true },
});

const exprience = mongoose.model<Expriences>("exprience", exprienceSechma);
export default exprience;
