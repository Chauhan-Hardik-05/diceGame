import styled from "styled-components";

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 10px;
  height: 150px;
  max-width: 794px;
  margin: 10px auto;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  .text {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <ul className="text">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 1 point will be dedcuted </li>
      </ul>
    </RulesContainer>
  );
};

export default Rules;
