import React from "react";
import ButtonWithSvg from "./ButtonWithSvg";

export const Header: React.FC = () => {
  return (
    <header className="flex px-5 py-1 justify-between bg-white border-b border-petronas-light-blue">
      <div className="flex items-center">
        <img src="/Petronas.png" alt="Logo" className="h-10 w-auto" />
        <img src="/Eptw.png" alt="Logo" className="h-10 w-auto pl-6" />
      </div>
      <div className="flex items-center my-1 space-x-6">
        <ButtonWithSvg
          svg={
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title></title>{" "}
                <g id="Complete">
                  {" "}
                  <g data-name="add" id="add-2">
                    {" "}
                    <g>
                      {" "}
                      <line
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="12"
                        x2="12"
                        y1="19"
                        y2="5"
                      ></line>{" "}
                      <line
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                      ></line>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          }
          label="Create"
          variant="primary"
          onClick={() => alert("Button clicked!")}
        />
        <img src="/Setting.png" alt="Logo" className="h-6 w-auto" />
        <img src="/Notification.png" alt="Logo" className="h-6 w-auto" />
        <img src="/User.png" alt="Logo" className="h-7 w-auto" />
      </div>
    </header>
  );
};
