import axios from "axios";
import useUserData from "../hooks/useUserData";
import Swal from "sweetalert2";

const ProductCard = ({ product}) => {
  const userData = useUserData();
  const userEmail = userData?.email;

  const handleWishlist = async() => {
   await axios
      .patch("http://localhost:4000/wishlist/add", {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if(res.data.modifiedCount){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product add to wishlist",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };
  return (
    <div className="w-full m-2 transition-transform delay-75 transform shadow-xl featured-card card card-compact bg-base-100 hover:scale-105 max-h-96">
      <figure>
        <img src={product.image} alt="product name " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <h2>Brand: {product.brand}</h2>
        <h2>Stock: {product.stock}</h2>
        <p>
          {product.description.length > 50
            ? `${product.description.slice(0, 50)}...`
            : `${product.description}`}
        </p>
        <div className="justify-center card-actions">
          <button onClick={handleWishlist} className="btn btn-primary">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
