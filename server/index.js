import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cors from "cors"
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { router as  mockInterviewRouter } from "./routes/mockinterview.routes.js";
import { connectdb } from "./utils/db.js";
const app=express();
const PORT=3000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("backend is running")
})
await connectdb()

app.use("/api/mock",ClerkExpressRequireAuth(),mockInterviewRouter)



app.listen(PORT,()=>{
  console.log(`server is running on port : http://localhost:${PORT}`)
})