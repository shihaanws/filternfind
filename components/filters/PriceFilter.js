import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../redux/itemsSlice";

export default function PriceFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.items);

  const handlePriceRangeChange = (min, max) => {
    dispatch(setPriceRange({ min, max }));
  };

  //   const highestPrice = items.reduce(
  //     (max, item) => Math.max(max, item.price),
  //     items[0].price
  //   );

  return (
    <div className=" text-indigo-950		">
      <div className="flex items-center justify-start gap-6 mb-2">
        <div className="">
          <span>Min: ${filters.priceRange.min}</span>
          <input
            type="range"
            min="0"
            max="300"
            value={filters.priceRange.min}
            onChange={(e) =>
              handlePriceRangeChange(
                Number(e.target.value),
                filters.priceRange.max
              )
            }
            className="range range-accent"
          />
        </div>

        <div>
          <span>Max: ${filters.priceRange.max}</span>

          <input
            type="range"
            min="0"
            max="300"
            value={filters.priceRange.max}
            onChange={(e) =>
              handlePriceRangeChange(
                filters.priceRange.min,
                Number(e.target.value)
              )
            }
            className="range range-accent"
          />
        </div>
      </div>
    </div>
  );
}

