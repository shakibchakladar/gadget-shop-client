import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const AddProduct = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const description = data.description;
    const category = data.category;
    const image=data.image;
    const email = user.email;
    const product = {
      title,
      brand,
      price,
      stock,
      description,
      category,
      email,
      image
    };
    const token=localStorage.getItem('access-token')

    axios.post("http://localhost:4000/add-products",product,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Successfully added",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  };

  return (
    <div>
      <h2 className="mb-12 text-2xl font-bold text-center">Add product</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Product title"
              className="input input-bordered"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-sm font-light text-red-500">
                title is required
              </p>
            )}
          </div>
          <div className="flex justify-around">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Brand name "
                className="input input-bordered"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <p className="text-sm font-light text-red-500">
                  brand is required
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-sm font-light text-red-500">
                  price is required
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="Stock "
                className="input input-bordered"
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <p className="text-sm font-light text-red-500">
                  stock is required
                </p>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description "
              className="input input-bordered"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-sm font-light text-red-500">
                description is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category "
              className="input input-bordered"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <p className="text-sm font-light text-red-500">
                category is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="Image Url "
              className="input input-bordered"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-sm font-light text-red-500">
                image is required
              </p>
            )}
          </div>
          <div className="mt-6 form-control">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
