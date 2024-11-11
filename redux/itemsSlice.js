import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 49.99, dateAdded: '2023-10-01' },
    { id: 2, name: "Novel - 'The Great Escape'", category: 'Books', price: 15.99, dateAdded: '2023-09-15' },
    { id: 3, name: 'Bluetooth Speaker', category: 'Electronics', price: 29.99, dateAdded: '2023-07-10' },
    { id: 4, name: 'Organic Cotton T-Shirt', category: 'Clothing', price: 19.99, dateAdded: '2023-06-20' },
    { id: 5, name: 'Cooking Recipe Book', category: 'Books', price: 25.5, dateAdded: '2023-08-05' },
    { id: 6, name: '4K Monitor', category: 'Electronics', price: 299.99, dateAdded: '2023-02-11' },
    { id: 7, name: 'Woolen Scarf', category: 'Clothing', price: 12.0, dateAdded: '2023-01-25' },
    { id: 8, name: 'Desk Lamp', category: 'Electronics', price: 34.75, dateAdded: '2023-09-17' },
    { id: 9, name: 'Hiking Backpack', category: 'Clothing', price: 79.5, dateAdded: '2023-05-30' },
    { id: 10, name: 'Wireless Mouse', category: 'Electronics', price: 18.99, dateAdded: '2023-08-21' },
  ],
  filters: {
    search: '',
    category: '',
    priceRange: { min: 0, max: 500 },
    sortBy: 'name', 
    sortOrder: 'asc', 
  }
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.filters.sortOrder = action.payload;
    },
  },
});

export const { setSearch, setCategoryFilter, setPriceRange, setSortBy, setSortOrder } = itemsSlice.actions;

export const selectItems = (state) => {
  const { items, filters } = state.items;

  let filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.category ? item.category === filters.category : true) &&
      item.price >= filters.priceRange.min &&
      item.price <= filters.priceRange.max
    );
  });

  if (filters.sortBy === 'name') {
    filteredItems.sort((a, b) => {
      const compare = a.name.localeCompare(b.name);
      return filters.sortOrder === 'asc' ? compare : -compare;
    });
  } else if (filters.sortBy === 'price') {
    filteredItems.sort((a, b) => {
      const compare = a.price - b.price;
      return filters.sortOrder === 'asc' ? compare : -compare;
    });
  }

  return filteredItems;
};

export default itemsSlice.reducer;
