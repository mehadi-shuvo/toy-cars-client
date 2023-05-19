import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Featured from "./Featured";
import Gallery from "./Gallery";
import ToyCategory from "./ToyCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <AboutUs></AboutUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;