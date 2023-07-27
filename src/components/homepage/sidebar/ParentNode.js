import React from "react";

export default function ParentNode({ node }) {
  return (
    <>
      {/* Parent Node */}
      <div className="node">
        <legend>{node.isParent && node.isOpen ? "" : ""}collection.1</legend>
        <ul className="parent">
          <li></li>
        </ul>
      </div>
      {/* Parent Node End */}
    </>
  );
}
