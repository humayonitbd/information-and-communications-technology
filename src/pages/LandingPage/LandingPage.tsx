import BannerSec from "../../components/ui/BannerSec/BannerSec";
import NeedService from "../NeedService/NeedService";
import NoticeSec from "../NoticeSec/NoticeSec";
import OurService from "../OurService/OurService";

const LandingPage = () => {
    return (
        <div className="w-11/12 mx-auto">
          <BannerSec />
          <NoticeSec />
          <OurService />
          <NeedService />
        </div>
    );
};

export default LandingPage;