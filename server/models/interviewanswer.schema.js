import mongoose from "mongoose";

const interviewAnswerSchema=new mongoose.Schema(
  {
    mockId: { type: String, required: true, index: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    aiFeedback: { type: String },
    rating: { type: Number },

  },
  {
    timestamps:true,
  }
)

export default mongoose.model("interviewAnswer",interviewAnswerSchema)