import React from "react";

interface NavItem {
  icon: string;
  label: string;
}

interface LeftNavProps {
  items: NavItem[];
}

const LeftNav: React.FC<LeftNavProps> = ({ items }) => {
  return (
    <nav className="bg-white flex flex-col items-center">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 px-4 py-2 sm:px-2 rounded-md text-center"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-8 h-8 sm:w-6 sm:h-6 min-w-[24px] min-h-[24px]"
            />
            <span className="hidden">{item.label}</span>
            {/* <span className="text-sm md:inline-block hidden">{item.label}</span> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNav;
