import React from "react";
import "./all_section.scss";
import ParentNode from "../ParentNode";

const data = [
  {
    name: "",
    isParent: true,
    isOpen: false,
  },
];

export default function All() {
  return (
    <section className="all f-col">
      {/* Fixed Header */}
      <div className="container">
        <nav className="nav flex">
          <h3>dfin</h3>
          <ul className="flex">
            <li>
              <button id="add" className="icon">
                <i class="fa-solid fa-plus"></i>
              </button>
            </li>
            <li>
              <button id="full-screen" className="icon">
                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
              </button>
            </li>
            <li>
              <button id="collapse" className="icon">
                <i class="fa-solid fa-angles-left"></i>
              </button>
            </li>
          </ul>
        </nav>

        <br />
        <br />
      </div>

      {/* Main Content */}

      <div className="all-nodes container">
        <br />
        <br />
        <div className="collections">
          {data.map((node) => {
            return <ParentNode node={node} />;
          })}
        </div>
      </div>
    </section>
  );
}
