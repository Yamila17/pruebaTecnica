import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutDrug from "../layout/LayoutDrug";
import LayoutHome from "../layout/LayoutHome";
import DetailCard from "../components/detailCard/DetailCard";
import SearchBar from "../components/searchbar/SearchBar";
import SimpleCard from "../components/simpleCard/SimpleCard";
import SearchBarBrandName from "../components/searchbarBrandName/SearchBarBrandName";

const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route index element={<SearchBar />} />
        <Route index element={<SearchBarBrandName />} />
        <Route index element={<SimpleCard />} />
      </Route>
      <Route path="/drug" element={<LayoutDrug />}>
        <Route path=":applicationNumber" element={<DetailCard />} />
      </Route>
    </Routes>
  );
};

export default RouterProvider;
