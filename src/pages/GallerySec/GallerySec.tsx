import img1 from "../../assets/GalleryImage/1.jpg";
import img2 from "../../assets/GalleryImage/2.jpeg";
import img3 from "../../assets/GalleryImage/3.jpeg";
import img4 from "../../assets/GalleryImage/4.jpeg";
import img5 from "../../assets/GalleryImage/5.jpg";
import img6 from "../../assets/GalleryImage/6.jpg";
import img7 from "../../assets/GalleryImage/7.jpeg";
import img8 from "../../assets/GalleryImage/8.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GallerySec = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#213D61] text-center mb-8">
          আমাদের ছবি সংগ্রহশালা
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <button className="bg-[#00a751f3] text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-[#213D61] transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySec;
