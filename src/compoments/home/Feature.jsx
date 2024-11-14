import FeaturedCard from "../FeaturedCard";

const Feature = () => {
    return (
        <div className="mt-24 mb-16">
            <h2 className="text-3xl text-center font-bold">Fetured</h2>
            <div className="md:flex justify-between gap-3 mt-20 mb-6">
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>

            </div>
            
        </div>
    );
};

export default Feature;