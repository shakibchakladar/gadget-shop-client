const FeaturedCard = () => {
  return (
    <div className="transition-transform delay-75 transform shadow-xl featured-card card card-compact bg-base-100 w-96 hover:scale-105">
      <figure>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1Du163lWirdyScfJ7W74LTMerWCq6560Kw&s"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
