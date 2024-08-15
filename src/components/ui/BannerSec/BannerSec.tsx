import { useState, useEffect } from "react";
import bannarImg1 from "../../../assets/bannar image/banner.png";
import bannarImg2 from "../../../assets/bannar image/Banner-1.jpg";


const images = [bannarImg1, bannarImg2];
const BannerSec = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);


    return (
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
          </h2>
          <p className="text-lg md:text-xl mb-6">
            আমাদের আধুনিক প্রযুক্তি ও পরিষেবার সাথে আপনার ভবিষ্যতকে উন্নত করুন।
          </p>
          <a href="#serviceSection">
            <button className="px-6 py-3 text-white bg-[#00a751f3] rounded-lg hover:bg-[#3c7e5cf3]">
              আরও জানুন
            </button>
          </a>{" "}
        </div>
      </div>
    );
};

export default BannerSec;