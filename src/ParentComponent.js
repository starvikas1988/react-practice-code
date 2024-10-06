import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; // Import the child component

export default function ParentComponent() {
  const [inputValue, setInputValue] = useState('Pratyush Pandey'); // State for input value

  const handleChange = (value) => {
    setInputValue(value); // Update inputValue state from child
  };

  return (
    <>
      <h2>Parent Component</h2>
      <p>Value:<b>{inputValue} </b></p>
      {/* Pass inputValue and handleChange function as props */}
      <ChildComponent inputValue={inputValue} onValueChange={handleChange} />
    </>
  );
}
