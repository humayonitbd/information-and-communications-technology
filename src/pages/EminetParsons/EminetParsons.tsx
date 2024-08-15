import samsulArefin from "../../assets/EminateParsons/sochib.jpg";
import sahabuddin from "../../assets/EminateParsons/rastopoti.jpeg";
import Unus from "../../assets/EminateParsons/Dr. Muhammad Yunus (1).jpg.jpg";
import asifNazrul from "../../assets/EminateParsons/prothomalo-english_2024-08-09_iodygb6r_ad2 asif.webp";
import AOS from "aos";
import "aos/dist/aos.css"; 
import {useEffect} from "react"

const EminetParsons = () => {
 useEffect(() => {
   AOS.init();
 }, []);
  const eminentPersons = [
    {
      name: "মোঃ সাহাবুদ্দিন",
      title: "মহামান্য রাষ্ট্রপতি",
      image: sahabuddin,
      url: "https://bn.wikipedia.org/wiki/%E0%A6%AE%E0%A7%8B%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AE%E0%A6%A6_%E0%A6%B8%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AC%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%A8",
    },
    {
      name: "ড. মুহাম্মদ ইউনূস",
      title: "মাননীয় প্রধান উপদেষ্টা",
      image: Unus,
      url: "https://bn.wikipedia.org/wiki/%E0%A6%AE%E0%A7%81%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AE%E0%A6%A6_%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A7%82%E0%A6%B8",
    },
    {
      name: "আসিফ নজরুল",
      title: "আইন উপদেষ্টা",
      image: asifNazrul,
      url: "https://bn.wikipedia.org/wiki/%E0%A6%86%E0%A6%B8%E0%A6%BF%E0%A6%AB_%E0%A6%A8%E0%A6%9C%E0%A6%B0%E0%A7%81%E0%A6%B2",
    },
    {
      name: "মোঃ সামসুল আরেফিন",
      title: "সচিব",
      image: samsulArefin,
      url: "https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%AE%E0%A6%B8%E0%A7%81%E0%A6%B2_%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%AB%E0%A6%BF%E0%A6%A8",
    }
  ];

  return (
    <div className="py-16 bg-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#213D61] mb-12">
          উল্লেখযোগ্য ব্যক্তিবর্গ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {eminentPersons.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden"
              data-aos="fade-right"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#213D61] mb-2">
                  {person.name}
                </h4>
                <p className="text-gray-600 mb-4">{person.title}</p>
                <a href={person.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#00a751f3] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#009648] transition-colors duration-300">
                    See more
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EminetParsons;
