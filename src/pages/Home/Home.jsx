import InviteFriends from "./InviteFriends/InviteFriends";
import NewArrival from "./NewArrival/NewArrival";
import Slider from "./Slider/Slider";

const Home = () => {
    const bannerSlides = [
        {
            imgLeft: "https://i.ibb.co/YWy227c/prada-model.png",
            imgRight: "https://i.ibb.co/grWvFgk/prada-bg.png",
            logo: "https://i.ibb.co/KWr4W9m/prada-logo.png",
            mottoOne: "Big Fashion Festival",
            mottoTwo: "50% - 80% off"
        },
        {
            imgLeft: "https://i.ibb.co/DM3vw8r/gucci.jpg",
            imgRight: "https://i.ibb.co/NnqwyTq/light-gray-concrete-wall-1.jpg",
            logo: "https://i.ibb.co/3yBRSpp/gucci-logo-png-7604.png",
            mottoOne: "Summer Surge",
            mottoTwo: "30% off"
        },
        {
            imgLeft: "https://i.ibb.co/RbNf0k0/h-m.jpg",
            imgRight: "https://i.ibb.co/r4KmpyC/75.jpg",
            logo: "https://i.ibb.co/JK08mXH/hm-logo-1.png",
            mottoOne: "Black Friday Discount",
            mottoTwo: "60% off"
        }
    ]
    return (
        <div>
            <InviteFriends></InviteFriends>
            <Slider slides={bannerSlides}></Slider>
            <NewArrival/>
        </div>
    );
};

export default Home;