import React, { useState } from 'react';
import './filter.css'
type InputFilterProps = {
  filterTerm?: number;
  handleInputFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Filter: React.FC<InputFilterProps> = ({ filterTerm, handleInputFilterChange }) => {
  const [showInput, setShowInput] = useState(false);
	const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setShowInput(!showInput);
		setIsActive(!isActive);
  };

  return (
		<div className='filterFild'>
			<button 
				onClick={handleClick} 
				className={isActive ? 'filterButton active' : 'filterButton'}
			>Filter</button>
			{showInput && (
				<input
					className={'filterInput'}
					placeholder='Enter year'
					type="number" 
					value={filterTerm ?? ''}
					onChange={handleInputFilterChange} 
				/>
			)}
		</div>
  );
};

