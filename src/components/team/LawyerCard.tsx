import React from "react";

// Define an interface for LawyerCard props
interface LawyerCardProps {
  name: string;
  specialty: string;
  experience: number;
  bio: string;
  photo?: string;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ name, specialty, experience, bio, photo }) => {
  return (
    <div className="w-[22rem] md:w-[17.5rem] bg-black shadow-lg rounded-lg overflow-hidden md:mx-1 my-1 border border-gray-200">
      {/* Profile Photo */}
      <img
        className="w-full h-[15rem] object-fill bg-center"
        src={photo || "https://via.placeholder.com/150"}
        alt={`${name}'s profile`}
      />

      {/* Lawyer Information */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-100">{name}</h2>
        <p className="text-gray-300 text-sm mt-1">{specialty}</p>
        <p className="text-gray-300 text-sm">Experience: {experience} years</p>
        <p className="text-gray-400 mt-4 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default LawyerCard;
