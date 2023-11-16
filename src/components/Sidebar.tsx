import React, { useState, ReactNode } from "react";
import { FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  sections: { title: string; component: ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, sections }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFilter = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className={`fixed z-30 top-0 left-0 h-full w-64 bg-light rounded-md text-dark1 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
        <FaTimes />
      </button>
      <div className="mt-6">
        {sections.map((section, index) => (
          <div key={index} className="mb-2">
            <div
              onClick={() => toggleFilter(index)}
              className="cursor-pointer px-4 py-2 flex items-center"
            >
              {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
              <span className="ml-2">{section.title}</span>
            </div>
            {activeIndex === index && section.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
