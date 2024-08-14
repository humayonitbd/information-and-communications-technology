import bannarImg from "../../../assets/bannar image/banner.png";

const BannerSec = () => {
    return (
     
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={bannarImg}
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
          <button className="px-6 py-3 text-white bg-[#00a751f3] rounded-lg hover:bg-[#3c7e5cf3]">
            আরও জানুন
          </button>
        </div>
      </div>
    );
};

export default BannerSec;