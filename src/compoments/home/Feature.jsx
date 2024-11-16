import FeaturedCard from "../FeaturedCard";

const Feature = () => {
    return (
        <div className="mt-24 mb-16">
            <h2 className="text-3xl font-bold text-center">Fetured</h2>
            <div className="justify-between grid-cols-3 gap-3 m-2 mt-20 mb-6 md:grid">
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>

            </div>
            
        </div>
    );
};

export default Feature;