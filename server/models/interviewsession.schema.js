import mongoose from "mongoose";

const interviewSessionSchema=new mongoose.Schema(
  {
    mockId:{type:String,required:true,index:true,},
    userId:{type:string, required:true,},
     currentQuestionIndex: {type:Number,default:0},
     status: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
    },
  },
  {
    timestamps:true,
  }
)

export default mongoose.model("InterviewSession",interviewSessionSchema)