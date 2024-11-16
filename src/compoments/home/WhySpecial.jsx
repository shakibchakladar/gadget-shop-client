const WhySpecial = () => {
  return (
    <div className="text-center">
      <div className="p-10 m-2"></div>
      <div className="p-5 m-5 space-y-5 text-center my-7">
        <h2 className="text-5xl font-bold font-poppins ">Why is it special?</h2>
        <p>
          Discover why Nextdwell stands out as the pinnacle of dining
          excellence,
          <br />
        </p>
      </div>
      <div className="hero min-h-[800px] bg-base-200 p-10">
        <div className="flex-col justify-between hero-content lg:flex-row gap-x-8">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/5MWrHjY/tierra-mallorca-Np-Tb-VOkkom8-unsplash.jpg"
              className="w-full rounded-lg shadow-2xl "
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold font-poppins text-[#FA7F08]">
              What We offer
            </h1>
            {/* <p className="md:p-5">
                At Nextdwell, we understand that dining is more than just a meal;
                its an experience. As your premier destination for culinary
                excellence, we pride ourselves on offering more than just
                delicious food we offer a symphony of flavors, ambiance, and
                service that elevate every dining occasion. Our commitment to
                quality is unwavering, reflected in every aspect of our menu, from
                the freshest ingredients to the innovative presentation of each
                dish. What sets us apart is our dedication to creating memorable
                moments for our guests, where every visit is a journey of
                discovery and delight. Whether youre craving comfort classics or
                adventurous flavors, FlavorFlow promises an unparalleled dining
                experience that leaves a lasting impression. Join us and taste the
                difference today
              </p> */}
            <div className="py-3 space-y-5">
              <ul className="space-y-5">
                <li className="text-xl font-semibold list-disc">
                  Personalized Service: We understand that every client is
                  unique, and so are their needs. Our dedicated team of
                  experienced real estate professionals is committed to
                  providing personalized service that is customized to your
                  preferences and requirements. From the initial consultation to
                  closing the deal, we ensure that you feel supported and
                  informed every step of the way.
                </li>
                <li className="text-xl font-semibold list-disc">
                  Extensive Market Knowledge: Our team possesses an in-depth
                  understanding of the real estate market. We stay up-to-date
                  with the latest market trends, property values, and
                  neighborhood insights. This expertise allows us to offer
                  accurate advice and strategic guidance, ensuring that you make
                  well-informed decisions whether you are buying, selling, or
                  renting.
                </li>
                <li className="text-xl font-semibold list-disc">
                  Innovative Technology: We leverage cutting-edge technology to
                  enhance your real estate experience. Our state-of-the-art
                  website and mobile app provide easy access to property
                  listings, virtual tours, and detailed property information.
                  Our advanced search filters help you find your dream home
                  quickly and efficiently.
                </li>
              </ul>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySpecial;
