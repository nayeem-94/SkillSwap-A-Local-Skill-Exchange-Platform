import React from "react";
import { Search, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Find a Provider",
    icon: <Search size={36} />,
    desc: "Browse through skilled professionals according to your needs.",
  },
  {
    id: 2,
    title: "Contact Easily",
    icon: <MessageSquare size={36} />,
    desc: "Chat with the provider and discuss what you need.",
  },
  {
    id: 3,
    title: "Get Your Service",
    icon: <CheckCircle size={36} />,
    desc: "Confirm the service and get your work done smoothly.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="text-indigo-600 flex justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
