import styled from "styled-components";
import PropTypes from "prop-types";
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (!props.selected ? "black" : "white")};
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
    font-weight: 500;
  }
`;

const numberArr = [1, 2, 3, 4, 5, 6];
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const handleSelect = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {numberArr.map((value, index) => {
          return (
            <Box
              selected={value === selectedNumber}
              key={index}
              onClick={() => handleSelect(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

// PropTypes for NumberSelector component
NumberSelector.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func.isRequired,
  selectedNumber: PropTypes.number,
  setSelectedNumber: PropTypes.func.isRequired,
};

export default NumberSelector;
