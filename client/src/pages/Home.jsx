import { useUser } from "@clerk/clerk-react";
import "../pages/home.css";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  const howItWorks = [
    {
      icon: "📝",
      title: "Create Your Profile",
      description:
        "Sign up and fill in your details so we can personalize your interview experience.",
    },
    {
      icon: "🤖",
      title: "AI Mock Interview",
      description:
        "Practice real interview questions with our AI-powered mock interview system.",
    },
    {
      icon: "📊",
      title: "Get Instant Feedback",
      description:
        "Receive performance insights and suggestions to improve your interview skills.",
    },
  ];

  const navigate=useNavigate()
  const handlebtn=()=>{
    navigate("/signin")

  }


  return (
    <section className="grid-bg min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      {/* Hero */}
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Your Personal AI Interview Coach
      </h1>

      <p className="text-gray-600 text-lg mb-6 max-w-xl">
        Double your chances of landing that job offer with our AI-powered
        interview prep
      </p>

      <button
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        onClick={handlebtn}
      >
        Get Started →
      </button>

      {/* How it works */}
      <section className="mt-16">
        <h3 className="text-3xl font-semibold mb-3">How it Works?</h3>

        <p className="text-gray-600 text-lg mb-10">
          Give mock interview in just 3 simple easy steps
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
