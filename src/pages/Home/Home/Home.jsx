import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Featured from "./Featured";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <AboutUs></AboutUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;