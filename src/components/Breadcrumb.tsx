import React from "react";
import { IconType } from "react-icons";

interface BreadcrumbItem {
  text: string;
  Icon?: IconType;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-black">
      <ul className="flex space-x-2 items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {item.Icon && (
              <item.Icon
                className={`w-4 h-4 ${
                  index === 0 ? "text-petronas-primary" : ""
                }`}
              />
            )}
            <span
              className={`text-sm ${
                index === 0 ? "text-petronas-primary" : ""
              }`}
            >
              {item.text}
            </span>
            {index < items.length - 1 && (
              <span className="text-xs text-gray-400">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
