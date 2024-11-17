import { TfiFilter } from "react-icons/tfi";

const Filterbar = ({
  setBrand,
  setCategory,
  handleReset,
  uniqueCategory,
  uniqueBrand,
}) => {
  return (
    <div className="min-h-screen gap-1 p-4 py-5 pb-10 bg-gray-200">
      <div className="flex items-center justify-center p-2">
        <TfiFilter />
        <h2 className="text-2xl font-bold">Filter</h2>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div>
          <select
            className="w-full max-w-xs select select-primary"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Brands</option>
            {uniqueBrand.map((brand, i) => (
              <option key={i} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            className="w-full max-w-xs select select-primary"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Categoris</option>
            {uniqueCategory.map((category,i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={handleReset} className="w-full mt-4 btn">
        Reset
      </button>
    </div>
  );
};

export default Filterbar;
