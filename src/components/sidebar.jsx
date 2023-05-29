import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button
        className="sidebar-toggle bg-gray-200 hover:bg-gray-300 px-4 py-2"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
      <ul className="sidebar-menu">
        <li className="py-2">Menu Item 1</li>
        <li className="py-2">Menu Item 2</li>
        <li className="py-2">Menu Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
