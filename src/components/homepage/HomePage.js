import React, { useContext } from "react";
import MainContainer from "./mainContainer/MainContainer";
import Sidebar from "./sidebar/Sidebar";
import "./home.scss";
import SidebarContext from "../../context/SidebarContext";

export default function HomePage() {
  const { isMenuOpen } = useContext(SidebarContext);
  return (
    <section className={`home flex ${isMenuOpen && "sidebar-on"}`}>
      <Sidebar />
      <MainContainer />
    </section>
  );
}
