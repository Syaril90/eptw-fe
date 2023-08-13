import React from "react";

export interface StepItem {
  title: string;
  details?: string; // details property is now optional
  active?: boolean; // active property
}

export const StepsList: React.FC<{ steps: StepItem[] }> = ({ steps }) => {
  return (
    <ol
      className={`relative text-black border-l dark:border-gray-700 dark:text-gray-400`}
    >
      {steps.map((step, index) => (
        <li className="flex items-center mb-10 ml-6" key={index}>
          <span
            className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ${
              step.active ? "ring-petronas-primary" : "ring-gray-200"
            }`}
          >
            <span className="text-black w-full h-full rounded-full bg-white flex items-center justify-center font-bold">
              {index + 1}
            </span>
          </span>
          <h3 className="text-black font-normal leading-tight">{step.title}</h3>
          {step.details && <p className="text-sm">{step.details}</p>}{" "}
          {/* Conditionally render details */}
        </li>
      ))}
    </ol>
  );
};
