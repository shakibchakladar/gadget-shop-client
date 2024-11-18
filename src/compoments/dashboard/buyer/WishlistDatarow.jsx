import axios from "axios";
import Swal from "sweetalert2";
import useUserData from "../../../hooks/useUserData";

const WishlistDatarow = ({ wishItem,setLatestData }) => {
    const userData=useUserData();
    const userEmail=userData?.email;
    const handleRemoveFromWishlist = async() => {
        await axios
           .patch("http://localhost:4000/wishlist/remove", {
             userEmail: userEmail,
             productId: wishItem?._id,
           })
           .then((res) => {
             if(res.data.modifiedCount){
               Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: "Product delete from wishlist",
                 showConfirmButton: false,
                 timer: 1500
               });
               setLatestData((prev)=>!prev)
             }
           });
       };
  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="relative block">
              <img
                alt="profile"
                src={wishItem.image}
                className="object-cover h-10 mx-auto rounded w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {wishItem?.title}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
          {wishItem?.category}
        </p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
          ${wishItem?.price}
        </p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <button onClick={handleRemoveFromWishlist}
          //   onClick={() => setIsDeleteOpen(true)}
          aria-label="Delete property"
          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 rounded-full opacity-50"
          ></span>
          <span className="relative">Remove</span>
        </button>
        {/* Delete modal */}
        {/* <DeleteModal
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModal}
          handleDelete={handleDelete}
          id={property?._id} // Ensure using `_id` for consistency
        /> */}
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <button
          //   onClick={openUpdateModal}
          aria-label="Update property"
          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
          ></span>
          <span className="relative">Add to cart</span>
        </button>
        {/* Update Modal */}
        {/* <UpdateRoomModal
          isOpen={isUpdateOpen}
          closeUpdateModal={closeUpdateModal}
          property={property}
        /> */}
      </td>
    </tr>
  );
};

export default WishlistDatarow;
