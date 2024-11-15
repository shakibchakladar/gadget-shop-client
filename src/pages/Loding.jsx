import { MoonLoader } from "react-spinners";

const Loding = () => {
  return (
    <div className="flex items-center justify-center min-w-full min-h-full my-auto">
      <MoonLoader
        color={"#000000"}
        loading={"true"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loding;
