import React from "react";
import { Star } from "lucide-react";

const providers = [
  {
    id: 1,
    name: "John Doe",
    skill: "Web Developer",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Sarah Parker",
    skill: "Graphic Designer",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Michael Smith",
    skill: "Digital Marketer",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
];

const TopRatedProviders = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
        Top Rated Providers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {providers.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-xl transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-28 h-28 rounded-full mx-auto object-cover mb-4"
            />

            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-500">{p.skill}</p>

            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
              <Star size={18} />
              <span className="font-medium">{p.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
