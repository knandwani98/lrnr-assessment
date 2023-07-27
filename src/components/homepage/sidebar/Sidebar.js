import React, { useContext } from "react";
import "./sidebar.scss";
import SidebarContext from "../../../context/SidebarContext";
import All from "./all/All";
import Board from "./board/Board";
import Graph from "./graph/Graph";
import Recent from "./recent/Recent";

export default function Sidebar() {
  const { isMenuOpen, activeMenu } = useContext(SidebarContext);

  return isMenuOpen ? (
    <aside className="side-bar">
      <div className="main">
        {isMenuOpen && activeMenu === "all" && <All />}
        {isMenuOpen && activeMenu === "board" && <Board />}
        {isMenuOpen && activeMenu === "graph" && <Graph />}
        {isMenuOpen && activeMenu === "recent" && <Recent />}
      </div>
    </aside>
  ) : (
    ""
  );
}
