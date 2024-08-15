import bannarImg from "../../assets/bannar image/banner.png";

const ServiceBanaar = ({name}:{name:string | undefined}) => {
  return (
    <div className="relative w-full h-52 overflow-hidden">
      <img
        src={bannarImg}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
        <h2 className="text-3xl md:text-3xl mb-4 font-bold">
          {name}
        </h2>
        <p className="text-lg md:text-xl mb-6">
          আমাদের আধুনিক প্রযুক্তি ও পরিষেবার সাথে আপনার ভবিষ্যতকে উন্নত করুন।
        </p>
       
      </div>
    </div>
  );
};

export default ServiceBanaar;
