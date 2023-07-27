import React, { useState } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import SidebarContext from "./context/SidebarContext";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  return (
    <SidebarContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        activeMenu,
        setActiveMenu,
        searchInput,
        setSearchInput,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </SidebarContext.Provider>
  );
}
