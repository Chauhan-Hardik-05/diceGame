import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import Rules from "./Rules";

const MainContainer = styled.main`
  padding-top: 60px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentValue, setCurrentValue] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = genrateRandomNumber(1, 7);
    console.log("currentValue : " + randomNumber);

    setCurrentValue(() => randomNumber);

    randomNumber === selectedNumber
      ? setScore((prev) => prev + randomNumber)
      : setScore((prev) => prev - 1);

    setSelectedNumber();
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        rollDice={rollDice}
        currentValue={currentValue}
        resetScore={resetScore}
        showRules={showRules}
        setShowRules={() => setShowRules((prev) => !prev)}
      />
      {showRules ? <Rules /> : ""}
    </MainContainer>
  );
};

export default GamePlay;
