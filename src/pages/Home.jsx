import Banner from "../compoments/home/Banner";
import Contact from "../compoments/home/Contact";
import Feature from "../compoments/home/Feature";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Feature/>
            <div className="w-full mx-auto">
            <Contact/>
            </div>
        </div>
    );
};

export default Home;