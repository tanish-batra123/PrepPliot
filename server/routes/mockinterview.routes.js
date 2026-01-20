import express from "express";
import { createMockInterview,getMockInterviewById,getUserMockInterviews } from "../controllers/mockinterview.js";

export const router=express.Router()

router.post("/create", createMockInterview);
router.get("/user", getUserMockInterviews);
router.get("/:mockId", getMockInterviewById);
