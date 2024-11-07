export default function Ranking() {
    const RankingsData = [
        {
            id: 0,
            Num: "120",
            Desc: "Cases"
        },
        {
            id: 1,
            Num: "90%",
            Desc: "Client Satisfaction"
        },
        {
            id: 2,
            Num: "20",
            Desc: "Years of experience"
        },
        {
            id: 3,
            Num: "+100",
            Desc: "5-star ratings on Google"
        },
        {
            id: 4,
            Num: "5",
            Desc: "Attorneys"
        }
    ];

    return (
        <ul className="grid gap-2 lg:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 items-center">
            {RankingsData.map((item, index) => (
                <li key={index} className="w-full border-t-2 border-red-500 p-2 flex flex-col h-[7rem] justify-between shadow-lg bg-[#262727]">
                    <h1 className="font-bold text-xl text-white">{item.Num}</h1>
                    <p className="text-white text-md font-serif text-sm md::text-md">{item.Desc}</p>
                </li> 
            ))}
        </ul>
    );
}
