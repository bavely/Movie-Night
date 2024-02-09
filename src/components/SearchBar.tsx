import { useState } from "react";
import { LuGlasses } from "react-icons/lu";
import { MdTheaterComedy } from "react-icons/md";
import { motion } from "framer-motion";
import { useRander } from "../utils/stateCntrole/globalState";
const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="grid justify-items-center self-center ">
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className="parent"
        transition={spring}
      >
        {isOpen && (
          <button
            onClick={() =>
              useRander.setState({ as: true, ms: false, ma: false })
            }
            className="advsearchbtn transition p-2 float-left rounded-full ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-120 selection: hover:bg-gray-400 duration-300 ..."
          >
            ADVANCED SEARCH{" "}
            <span style={{ float: "right", marginLeft: "5px" }}>
              <LuGlasses size={20} />
            </span>
          </button>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={isOpen ? "black" : "currentColor"}
          className="w-12 h-12  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isOpen
                ? "M6 18 18 6M6 6l12 12"
                : "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            }
          />
        </svg>
        {isOpen && (
          <button
            onClick={() =>
              useRander.setState({ as: false, ms: true, ma: false })
            }
            className="modesearchbtn transition p-2 float-right rounded-full ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-120 hover:bg-gray-400 duration-300 ..."
          >
            <span
              style={{ float: "left", marginLeft: "5px", marginRight: "5px" }}
            >
              <MdTheaterComedy size={20} />
            </span>
            WHAT IS YOUR MOOD
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default SearchBar;
