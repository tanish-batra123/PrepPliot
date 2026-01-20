import mongoose from "mongoose";

 const mockInterviewSchema = new mongoose.Schema(
  {
    mockId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    jobPosition: {
      type: String,
      required: true,
      trim: true
    },
     jobDescription: {
      type: String,
      required: true,
      trim: true
    },
    experience:{
      type: Number,
      required: true,
    },
    createdBy: {
      type: String, 
      required: true,
      index: true
    },

  },
  {
    timestamps: true
  }
)
export default mongoose.model("MockInterview", mockInterviewSchema);