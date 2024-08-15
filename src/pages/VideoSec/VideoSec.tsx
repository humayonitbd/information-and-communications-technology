import { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa"; // Import the play icon from react-icons
import { TiDelete } from "react-icons/ti";
const VideoSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src:any) => {
    setVideoSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoSrc("");
  };

  return (
    <div className="py-10 bg-[#fff]  text-white mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="shadow-xl p-2 rounded-lg" data-aos="fade-right">
          <div
            className="relative h-64 overflow-hidden cursor-pointer"
            onClick={() =>
              openModal("https://www.youtube.com/embed/GT9ShGE_qjg")
            }
          >
            <img
              src="https://img.youtube.com/vi/GT9ShGE_qjg/hqdefault.jpg"
              alt="Video 1 Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity"></div>
            <FaPlay className="absolute inset-0 m-auto text-white text-4xl opacity-80" />
          </div>
        </div>

        <div className="shadow-xl p-2 rounded-lg" data-aos="fade-up">
          <div
            className="relative h-64  overflow-hidden  cursor-pointer"
            onClick={() =>
              openModal("https://www.youtube.com/embed/DH1ttiUst_w")
            }
          >
            <img
              src="https://img.youtube.com/vi/DH1ttiUst_w/hqdefault.jpg"
              alt="Video 2 Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity"></div>
            <FaPlay className="absolute inset-0 m-auto text-white text-4xl opacity-80" />
          </div>
        </div>
        <div className="shadow-xl p-2 rounded-lg" data-aos="fade-left">
          <div
            className="relative h-64  overflow-hidden   cursor-pointer"
            onClick={() =>
              openModal("https://www.youtube.com/embed/_r58G5iM_NU")
            }
          >
            <img
              src="https://img.youtube.com/vi/_r58G5iM_NU/hqdefault.jpg"
              alt="Video 3 Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity"></div>
            <FaPlay className="absolute inset-0 m-auto text-white text-4xl opacity-80" />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="bg-black bg-opacity-90 w-8/12 h-3/4 mx-auto mb-20 mt-32  p-4 relative"
      >
        <iframe
          className="w-full h-full"
          src={videoSrc}
          title="Video"
          allowFullScreen
        />
        <button onClick={closeModal} className="absolute top-2 right-2">
          <TiDelete className="bg-red-500 text-slate-100 rounded-full  text-4xl" />
        </button>
      </Modal>
    </div>
  );
};

export default VideoSec;
