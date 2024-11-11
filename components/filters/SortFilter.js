import { useDispatch, useSelector } from "react-redux";
import { setSortBy, setSortOrder } from "../../redux/itemsSlice";

function SortFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.items);

  const handleSortChange = (e) => {
    const [sortBy, sortOrder] = e.target.value.split("-");
    dispatch(setSortBy(sortBy));
    dispatch(setSortOrder(sortOrder));
  };

  return (
    <div className="mb-4 w-full md:max-w-xs">
      <label className="label text-indigo-950">Sort by:</label>
      <select
        onChange={handleSortChange}
        className="select select-bordered w-full bg-white text-black"
      >
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  );
}

export default SortFilter;
