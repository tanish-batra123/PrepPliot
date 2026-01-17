import React from "react";
import { FaRocket, FaCrown, FaUser,FaRegUser } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import "../pages/upgrad.css"

export const Upgrad = () => {
  const upgradePlans = [
    {
      id: "free",
      name: "Free",
      icon: FaRegUser,
      price: 0,
      duration: "Forever",
      badge: "Starter",
      features: [
        "3 AI mock interviews per month",
        "Text-based interview only",
        "Basic AI feedback",
        "English language support",
        "Limited interview history",
      ],
      limitations: [
        "No voice answers",
        "No detailed evaluation report",
        "No progress tracking",
      ],
      cta: "Get Started",
      isPopular: false,
    },
    {
      id: "pro",
      name: "Pro",
      icon: FaRocket,
      price: 499,
      duration: "per month",
      badge: "Most Popular",
      features: [
        "Unlimited AI mock interviews",
        "Voice + Text answers",
        "Detailed AI evaluation report",
        "English + Hinglish support",
        "Full interview history",
        "Adaptive follow-up questions",
      ],
      limitations: [],
      cta: "Upgrade to Pro",
      isPopular: true,
    },
    {
      id: "premium",
      name: "Premium",
      icon: MdWorkspacePremium,
      price: 999,
      duration: "per month",
      badge: "Best Value",
      features: [
        "Everything in Pro",
        "Advanced confidence & communication scoring",
        "Personalized improvement roadmap",
        "Priority AI processing",
        "Downloadable interview reports (PDF)",
        "Progress analytics dashboard",
      ],
      limitations: [],
      cta: "Go Premium",
      isPopular: false,
    },
  ];

  return (
    <>
      <div className=" plan flex gap-8 justify-center mt-10">
        {upgradePlans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div key={plan.id} className="border rounded-2xl p-6">
              <Icon className="text-3xl mb-3 " />
              <h2 className="text-xl font-bold">{plan.name}</h2>
              <p className="text-2xl font-semibold">₹{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded cursor-pointer">
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
