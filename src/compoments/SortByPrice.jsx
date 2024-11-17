const SortByPrice = ({setSort}) => {
  return (
    <div>
      <select className="w-full max-w-xs select select-primary" onChange={(e) => setSort(e.target.value)}>
        <option value="asc">low to high</option>
        <option value="desc">High to low</option>
      </select>
    </div>
  );
};

export default SortByPrice;
