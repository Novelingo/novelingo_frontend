import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronRight, FaTimes } from 'react-icons/fa';
import Filter from './Filter';

interface Filter {
  title: string;
  options: { id: string, title: string }[];
}

interface SidebarProps {
  filters: Filter[];
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onClose }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);  // State to track visibility

  useEffect(() => {
    setIsVisible(true);  // Set the sidebar to be visible when the component mounts
  }, []);

  const toggleFilter = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleClose = () => {
    setIsVisible(false);  // Animate the sidebar out
    setTimeout(onClose, 300);  // Call the provided onClose function after the animation duration
  };

  return (
    <div className={`fixed z-30 top-0 left-0 h-full w-64 bg-light rounded-md text-dark1 transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={handleClose} className="absolute top-4 right-4 text-2xl">
        <FaTimes />
      </button>
      <div className='mt-6'>
        {filters.map((filter, index) => (
          <div key={index} className="mb-2">
            <div
              onClick={() => toggleFilter(index)}
              className="cursor-pointer px-4 py-2 flex items-center"
            >
              {filter.options && activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
              <span className="ml-2">{filter.title}</span>
            </div>
            {activeIndex === index && filter.options && (
              <div className="pl-4 text-sm">
                <Filter options={filter.options} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
