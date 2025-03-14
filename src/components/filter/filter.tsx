import React, { useState } from "react";
import filterStyle from "./filter.module.css";

type InputFilterProps = {
  handleInputFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetFilter: () => void; 
};

export const Filter: React.FC<InputFilterProps> = ({
  handleInputFilterChange,
  handleResetFilter,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isActive) {

      handleResetFilter();
      setShowInput(false); 
    } else {
      setShowInput(true); 
    }
    setIsActive(!isActive);
  };

  return (
    <div className={filterStyle.filterField}>
      <button
        onClick={handleClick}
        className={
          isActive
            ? `${filterStyle.filterButton} ${filterStyle.active}`
            : filterStyle.filterButton
        }
      >
        {isActive ? "Сброс" : "Фильтр"} 
      </button>
      {showInput && (
        <input
          className={filterStyle.filterInput}
          placeholder="Введите год"
          type="number"
          onChange={handleInputFilterChange}
        />
      )}
    </div>
  );
};


