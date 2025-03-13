import React, { useState } from 'react';
import filterStyle from "./filter.module.css";

type InputFilterProps = {
  handleInputFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Filter: React.FC<InputFilterProps> = ({ handleInputFilterChange }) => {
  const [showInput, setShowInput] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setShowInput((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={filterStyle.filterFild}>
      <button 
        onClick={handleClick} 
        className={isActive ? `${filterStyle.filterButton} ${filterStyle.active}` : filterStyle.filterButton}
      >
        Фильтр
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


