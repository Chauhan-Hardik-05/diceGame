import styled from "styled-components";
import PropTypes from "prop-types";

const ScoreContainer = styled.div`
  width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

// PropTypes for TotalScore component
TotalScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default TotalScore;
