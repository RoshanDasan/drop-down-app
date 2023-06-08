import React, { useState } from "react";
import Button from '@mui/material/Button';

const DropDown = ({ value, readonly }) => {
  const [selectedValues, setSelectedValues] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleCheckboxChange = (event, optionValue) => {
    if (event.target.checked) {
      setSelectedValues([...selectedValues, optionValue]);
    } else {
      setSelectedValues(
        selectedValues.filter((value) => value !== optionValue)
      );
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>MultiSelect Dropdown</h2>
      <div
        style={{
          display: "inline-block",
          position: "relative",
          marginBottom: "1rem",
        }}
      >
         <Button variant="outlined" onClick={toggleDropdown}>Click here</Button>
       
        {isOpen && (
          <ul
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "0.5rem",
              width: "10rem"
              
            }}
          >
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Option 1"
                  checked={selectedValues.includes("Option 1")}
                  onChange={(event) => handleCheckboxChange(event, "Option 1")}
                  disabled={readonly}
                />
                Option 1
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Option 2"
                  checked={selectedValues.includes("Option 2")}
                  onChange={(event) => handleCheckboxChange(event, "Option 2")}
                  disabled={readonly}
                />
                Option 2
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Option 3"
                  checked={selectedValues.includes("Option 3")}
                  onChange={(event) => handleCheckboxChange(event, "Option 3")}
                  disabled={readonly}
                />
                Option 3
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Option 4"
                  checked={selectedValues.includes("Option 4")}
                  onChange={(event) => handleCheckboxChange(event, "Option 4")}
                  disabled={readonly}
                />
                Option 4
              </label>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
