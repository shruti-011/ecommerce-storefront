import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 499,
      category: "Men",
      image: "https://picsum.photos/200/300?1",
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 999,
      category: "Men",
      image: "https://picsum.photos/200/300?2",
    },
    {
      id: 3,
      name: "Floral Dress",
      price: 799,
      category: "Women",
      image: "https://picsum.photos/200/300?3",
    },
    {
      id: 4,
      name: "Sneakers",
      price: 1299,
      category: "Shoes",
      image: "https://picsum.photos/200/300?4",
    },
  ],

  activeCategory: "ALL",
  searchTerm: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    },

    resetCategory: (state) => {
      state.activeCategory = "ALL";
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setCategory, resetCategory, setSearchTerm } =
  productsSlice.actions;

export default productsSlice.reducer;
