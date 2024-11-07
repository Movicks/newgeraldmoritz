import LawyerCard from "../components/team/LawyerCard"


// Define an interface for each lawyer's data in the array
interface Lawyer {
  name: string;
  specialty: string;
  experience: number;
  bio: string;
  photo?: string;
}

// Example usage of LawyerCard component with sample data
const OurTeam: React.FC = () => {
  // Array of lawyer objects, typed as Lawyer[]
  const lawyers: Lawyer[] = [
    {
      name: "Dr. Jessica Thompson",
      specialty: "Corporate Law",
      experience: 7,
      bio: "Specializes in mergers and acquisitions, compliance, and corporate governance.",
      photo: "https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3eWVyfGVufDB8fDB8fHww",
    },
    {
      name: "Gerald Moritz",
      specialty: "Criminal Law",
      experience: 20,
      bio: "Expert in defense cases involving fraud, theft, and other white-collar crimes.",
      photo: "https://static.wixstatic.com/media/c837a6_fcc650591f97425ea6b2cd6407d7c62a~mv2.jpg/v1/fill/w_466,h_591,fp_0.50_0.23,q_80,usm_0.66_1.00_0.01,enc_auto/Attorney-2.jpg",
    },
    {
      name: "Emily Chen",
      specialty: "Intellectual Property",
      experience: 5,
      bio: "Expert in patent law, trademark disputes, and copyright issues.",
      photo: "https://plus.unsplash.com/premium_photo-1682095232087-66abe7250678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVuc2UlMjBsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "James Patel",
      specialty: "Real Estate Law",
      experience: 10,
      bio: "Specializes in property transactions, zoning laws, and landlord-tenant disputes.",
      photo: "https://media.istockphoto.com/id/1130251642/photo/indian-advocate-shoot.webp?a=1&b=1&s=612x612&w=0&k=20&c=XpnLyesUh0hiBlKeSSyCXuNuZWQf63sgsxdMkMC7IFM=",
    },
    {
      name: "Hiroshi Tanaka",
      specialty: "Family Law",
      experience: 18,
      bio: "Focuses on child custody, divorce settlements, and prenuptial agreements.",
      photo: "https://media.istockphoto.com/id/1021766070/photo/unhappy-divorce-couple-having-conflict-husband-and-wife-during-divorce-process-with-senior.webp?a=1&b=1&s=612x612&w=0&k=20&c=wenrsMzSo6-CLOTDEoDW4cdzaQ4EiT_c0ecAesKj_uU=",
    },
];


  return (
    <div className="flex flex-col items-center py-4 lg:px-[2rem]">
        <b className="text-3xl text-center text-red-500">Our Team</b>
       
    <div className="flex flex-wrap justify-center py-5">
      {lawyers.map((lawyer, index) => (
        <LawyerCard
          key={index}
          name={lawyer.name}
          specialty={lawyer.specialty}
          experience={lawyer.experience}
          bio={lawyer.bio}
          photo={lawyer.photo}
        />
      ))}
      </div>
    </div>
  );
};

export default OurTeam;