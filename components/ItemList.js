"use client";

import { useSelector } from "react-redux";
import { selectItems } from "../redux/itemsSlice";

import { AnimatePresence, motion } from "framer-motion";

const ItemList = () => {
  const items = useSelector(selectItems);

  const getCategoryImage = (category) => {
    switch (category) {
      case "Electronics":
        return "./electronics.jpeg";
      case "Books":
        return "./books.jpeg";
      case "Clothing":
        return "./clothing.jpeg";
      default:
        return "https://via.placeholder.com/300x200?text=Item";
    }
  };

  return (
    <div className="item-list pb-10 m-24 mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={getCategoryImage(item.category)}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary ml-2">NEW</div>
              </h2>
              <p>Date Added: {new Date(item.dateAdded).toLocaleDateString()}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.category}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ItemList;
