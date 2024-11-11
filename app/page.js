"use client";
import React from "react";
import Filters from "../components/Filters";
import ItemList from "../components/ItemList";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Filters />
        <ItemList />
      </Provider>
    </div>
  );
}
