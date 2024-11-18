import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import axios from "axios";
import WishlistDatarow from "./WishlistDatarow";
import Loding from "../../../pages/Loding";

const Mywishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading,setLoading]=useState(false)
  const [lastestData,setLatestData]=useState(true)
  const userData = useUserData();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchWishlist = async () => {
      await axios
        .get(`http://localhost:4000/wishlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setWishlist(res.data));
        setLoading(false)
        
    };
    if (userData._id && token) {
      fetchWishlist();
    }
  }, [token, userData._id,lastestData]);


//   remove data from my wishlist 


  return (
    <div>
      <h2 className="text-2xl font-bold text-center"> wishlist: <span className="text-red-700">{wishlist.length}</span> </h2>
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
    {loading? <Loding/>:
      <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
          >
            Title
          </th>
          <th
            scope="col"
            className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
          >
            Category
          </th>
          <th
            scope="col"
            className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
          >
            Price
          </th>
          {/*  */}
          <th
            scope="col"
            className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
          >
            Delete
          </th>
          <th
            scope="col"
            className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
          >
            {/* Update */}
          </th>
        </tr>
      </thead>
      <tbody>
       {
        wishlist.map(wishItem=><WishlistDatarow key={wishItem._id} wishItem={wishItem} setLatestData={setLatestData}/>)
       }
      </tbody>
    </table>}
        
      </div>
    </div>
  );
};

export default Mywishlist;



