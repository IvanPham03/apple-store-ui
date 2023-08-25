import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@material-tailwind/react";

const Filter = ({ options, type, handleFilter }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [unit, setUnit] = useState("");

  const handleSelectSizes = event => {
    const value = event.target.value;
    if (event.target.checked) {
      if (type === "Giá" || type === "Xếp theo") {
        setSelectedSizes([value]);
      } else setSelectedSizes([...selectedSizes, value]);
    } else {
      setSelectedSizes(selectedSizes.filter(size => size !== value));
    }
  };
  const handleSubmit = () => {
    handleFilter(selectedSizes);
  };
  useEffect(
    () => {
      if (type === "Màn hình") {
        // console.log('hello', type, typeof type);
        setUnit("inches");
      } else if (type === "Giá") {
        setUnit("triệu");
      }
    },
    [type]
  );

  return (
    <div className="my-2 relative z-40 group">
      <button
        className="px-4 py-2 bg-main border rounded text-black hover:opacity-50"
        type="button"
      >
        {type}
        <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
      </button>
      <div className="absolute h-3 z-0 w-60 bg-transparent invisible group-hover:visible " />
      {
        <div className="mt-3 ml-4 absolute w-56 bg-gray-100 rounded-lg shadow-2xl transition invisible group-hover:visible">
          {/* Cây cầu sử dụng ::before */}
          <ul className="text-sm m-3">
            {options.map(data =>
              <li className="py-1 px-2" key={uuidv4()}>
                <label
                  htmlFor={`sc-${data}`}
                  className="flex items-center justify-between hover:text-red-500 hover:cursor-pointer"
                >
                  {data} {unit}
                  <input
                    type="checkbox"
                    name="screen-size"
                    value={data}
                    id={`sc-${data}`}
                    checked={selectedSizes.includes(data.toString())}
                    onChange={handleSelectSizes}
                  />
                </label>
              </li>
            )}
          </ul>
          <Button
            className="rounded-t-none py-1 hover:bg-slate-200 hover:cursor-pointer w-full text-black"
            onClick={handleSubmit}
          >
            <p className="text-center font-medium text-sm ">
              <FontAwesomeIcon icon={faFilter} /> Áp dụng
            </p>
          </Button>
        </div>
      }
    </div>
  );
};

export default Filter;
