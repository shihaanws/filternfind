import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../redux/itemsSlice";
import { useState } from "react";

function CategoryFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.items);
  const [activeTab, setActiveTab] = useState("All");

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e));
  };

  return (
    <div role="tablist" className="tabs tabs-bordered mb-5 w-full md:w-[40%]">
      {["All", "Electronics", "Books", "Clothing"].map((ele) => (
        <a
          key={ele}
          role="tab"
          className={`tab ${activeTab === ele ? "tab-active" : ""}`}
          onClick={() => {
            handleCategoryChange(ele === "All" ? "" : ele);
            setActiveTab(ele);
          }}
        >
          {ele}
        </a>
      ))}
    </div>
  );
}

export default CategoryFilter;
