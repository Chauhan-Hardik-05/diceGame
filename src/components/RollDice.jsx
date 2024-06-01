import styled from "styled-components";
import { Button, OutlineBtn } from "../styled/Button";
import PropTypes from "prop-types";

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .image-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 250px;

    img {
      height: 200px;
      cursor: pointer;
    }

    p {
      font-size: 24px;
      font-weight: 500;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const RollDice = ({
  resetScore,
  currentValue,
  rollDice,
  setShowRules,
  showRules,
}) => {
  return (
    <>
      <DiceContainer>
        <div className="image-section">
          <img
            src={`../images/dice/dice_${currentValue}.png`}
            alt={`dice ${currentValue}`}
            onClick={rollDice}
          />
          <p>Click on Dice to roll</p>
        </div>
        <div className="btn-container">
          <OutlineBtn onClick={resetScore}>Reset Score</OutlineBtn>
          <Button onClick={setShowRules}>
            {showRules ? "Hide Rules" : "Show Rules"}
          </Button>
        </div>
      </DiceContainer>
    </>
  );
};

// PropTypes for RollDice component
RollDice.propTypes = {
  resetScore: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,
  rollDice: PropTypes.func.isRequired,
  setShowRules: PropTypes.func.isRequired,
  showRules: PropTypes.bool.isRequired,
};

export default RollDice;
