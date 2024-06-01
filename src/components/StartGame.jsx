import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  width: 1182px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }

    ${Button} {
      float: right;
    }
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <>
      <Container>
        <div>
          <img src="images/dices.png" alt="dices" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

// PropTypes for StartGame component
StartGame.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default StartGame;
