import FeaturedCard from "../compoments/FeaturedCard";

const Products = () => {
    return (
        <div>
            <h2 className="my-4 text-4xl">Our Products </h2>
            <div className="grid gap-3 md:grid-cols-3">
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
            </div>
            
        </div>
    );
};

export default Products;