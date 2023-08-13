import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionCardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const AccordionCard: React.FC<AccordionCardProps> = ({
  title,
  subtitle,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border px-6 py-4 bg-white rounded shadow-sm w-full overflow-hidden divide-y-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="pb-3">
          <h2 className="text-lg text-gray-900 font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}{" "}
        </div>
        <div>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
        } overflow-hidden`}
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        <div className="pt-3">{children}</div>
      </div>
    </div>
  );
};

export default AccordionCard;
