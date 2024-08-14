import BannerSec from "../../components/ui/BannerSec/BannerSec";
import EminetParsons from "../EminetParsons/EminetParsons";
import GallerySec from "../GallerySec/GallerySec";
import NeedService from "../NeedService/NeedService";
import NoticeSec from "../NoticeSec/NoticeSec";
import OurService from "../OurService/OurService";
import VideoSec from "../VideoSec/VideoSec";

const LandingPage = () => {
    return (
        <div className="w-11/12 mx-auto">
          <BannerSec />
          <NoticeSec />
          <OurService />
          <NeedService />
          <EminetParsons />
          <GallerySec />
          <VideoSec />
        </div>
    );
};

export default LandingPage;