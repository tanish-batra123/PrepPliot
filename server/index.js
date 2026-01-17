import express from "express"
const app=express();
const PORT=3000;

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("backend is running")
})
app.listen(PORT,()=>{
  console.log(`server is running on port : http://localhost:${PORT}`)
})