import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Addinterview =() => {

  const navigate=useNavigate()
  const { getToken } = useAuth(); 
  const [isOpen, setIsopen] = useState(false);
  const[value,setvalue]=useState({
    jobPosition:"",
    jobDescription:"",
    yearOfExperience:"",
  })

  const handleChange=(e)=>{
    const{name,value}=e.target
    setvalue((prev)=>({
    ...prev,[name]:value
    }))

  }
    const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const token =await getToken();
       const res = await axios.post(
      "http://localhost:3000/api/mock/create",
      {
        jobPosition: value.jobPosition,
        jobDescription: value.jobDescription,
        experience: Number(value.yearOfExperience),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

     console.log("Interview created:", res.data);
     navigate(`/interview/${res.data.data.mockId}`)

    
    setvalue({
      jobPosition: "",
      jobDescription: "",
      yearOfExperience: "",
    });
    setIsopen(false);
      
    } catch (error) {
      console.error("Error creating interview:", error);
    }
  };

  return (                                                                                                 
    <div>
      {/* Card */}
      <div
        className="p-8 border-2 border-dashed rounded-lg bg-secondary w-[280px] h-[160px]
        flex flex-col items-center justify-center cursor-pointer hover:border-primary transition ml-10"
        onClick={() => setIsopen(true)}
      >
        <h2 className="text-2xl">+</h2>
        <p className="text-sm text-gray-500">Create Interview</p>
      </div>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsopen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Tell us more about the job you are interviewing for
            </DialogTitle>
            <DialogDescription>
              Fill details to start AI interview session.
            </DialogDescription>
          </DialogHeader>

          {/* Form Body */}
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-semibold">
                Job Position / Role Name
              </label>
              <Input
                type="text"
                className="bg-secondary mt-1"
                placeholder="Ex: Full Stack Developer"
                name="jobPosition"
                required
                value={value.jobPosition}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Job Description / Tech Stack
              </label>
              <Input
                type="text"
                className="bg-secondary mt-1"
                placeholder="Ex: React, Node, MongoDB"
                name="jobDescription"
                required
                value={value.jobDescription}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Years of Experience
              </label>
              <Input
                type="number"
                className="bg-secondary mt-1"
                placeholder="Ex: 2"
                name="yearOfExperience"
                required
                value={value.yearOfExperience}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end gap-3 pt-3">
              <Button
                variant="ghost"
                onClick={() => setIsopen(false)}
                type="button"
              >
                Cancel
              </Button>
              <Button type="submit">
                Start Interviewing
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
