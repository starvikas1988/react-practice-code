import React from 'react';

export default function ChildComponent({ inputValue, onValueChange }) {
  const handleValueChange = (event) => {
    onValueChange(event.target.value); // Call parent handler with new input value
  };

  return (
    <>
      <h2>Child Component</h2>
      <input
        type='text'
        value={inputValue}
        onChange={handleValueChange}  // Update inputValue on change
      />
    </>
  );
}
