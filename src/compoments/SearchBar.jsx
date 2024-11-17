import { IoSearch } from "react-icons/io5";

const SearchBar = ({handleSearch}) => {
    return (
        <div>
            <form className="flex items-center gap-2" onSubmit={handleSearch}>
                <input type="text" placeholder="Search Product" name="search" className="max-w-md p-2 my-2 border border-black rounded-md" />
                <button className="btn ">
                <IoSearch />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;