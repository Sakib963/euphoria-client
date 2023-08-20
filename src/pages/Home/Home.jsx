import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import InviteFriends from "./InviteFriends/InviteFriends";
import NewArrival from "./NewArrival/NewArrival";
import Slider from "./Slider/Slider";
import TrendingOffers from "./TrendingOffers/TrendingOffers";
import TopBrandsDeal from "./TopBrandsDeal/TopBrandsDeal";

const Home = () => {
    
    return (
        <div>
            <InviteFriends/>
            <Slider/>
            <TrendingOffers/>
            <NewArrival/>
            <TopBrandsDeal/>
            <Gallery/>
            <AboutUs/>
        </div>
    );
};

export default Home;