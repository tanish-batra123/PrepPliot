import MockInterview from "../models/mockinterview.schema.js"
import crypto from "crypto";

export const createMockInterview = async (req, res) => {
  try {
    const { jobPosition, jobDescription, experience } = req.body;
    const createdBy = req.auth.userId;

    if (!jobPosition || !jobDescription || experience===undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const mockId = `mock_${crypto.randomBytes(4).toString("hex")}`;

    const mockInterview = await MockInterview.create({
      mockId,
      jobPosition,
      jobDescription,
      experience,
      createdBy,
    });

    res.status(201).json({
      success: true,
      data: mockInterview,
    });
  } catch (error) {
    console.error("Create Mock Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMockInterviewById=async(req,res)=>{
  try {
    const{mockId}=req.params;

    const mockInterview=await MockInterview.findOne({mockId})

    if(!mockInterview){
      return res.status(404).json({ message: "Mock interview not found" });
    }
     res.status(200).json({
      success: true,
      data: mockInterview,
    });
    
  } catch (error) {
    console.error("Get Mock Error:", error);
    res.status(500).json({ message: "Server error" });
  }

}

export const getUserMockInterviews=async (req,res)=>{
  try {
   const createdBy = req.auth.userId;
   const interviews= await MockInterview.find({createdBy}).sort({ createdAt: -1 });
   res.status(200).json({
      success: true,
      data: interviews,
    });
    
  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({ message: "Server error" });
  }
}