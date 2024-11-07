import styled from "styled-components";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Container>
        <Wrapper>
          <Text>
            <h2>About Me</h2>

            <div>
              <h4>I am a front-end developer based in Lagos, Nigeria.</h4>
              <h4>Turns out I have a degree in Microbiology.</h4>
              <p>
                Hey there! I’m a frontend developer with an unexpected
                background in microbiology, which has given me a unique
                perspective on problem-solving and precision in design.
                Transitioning from science to code has been an exciting
                challenge, and it’s fueled my passion for creating beautiful,
                interactive web experiences. I’m dedicated to producing
                seamless, responsive sites that are as functional as they are
                visually engaging. Let’s connect if you’re interested in
                collaborating!
              </p>
              <Link to="/mainabout">
                <More>More about me</More>
              </Link>
            </div>
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}
export default About;

const Container = styled.div`
  /* background-color: yellow; */
  max-width: 1300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  min-height: calc(100vh - 70px);

  @media (max-width: 800px) {
    /* background-color: red; */
    width: 100%;
  }
`;
const Wrapper = styled.div`
  /* background-color: aqua; */
  width: 90%;
  min-height: calc (100vh -70px);
  margin: auto;
  padding: 10px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    border: 2px solid blue;
    font-size: 55px;
    width: 40%;
    text-align: center;
  }

  div {
    border: 2px solid red;
    width: 50%;
    padding: 10px 0;

    h4 {
      font-size: 25px;
      line-height: 1.3;
    }
    p {
      border: 2px solid black;
      width: 80%;
      margin-top: 20px;
      font-size: 17px;
      line-height: 1.8;
    }
  }

  @media (max-width: 800px) {
    display: block;
    h2 {
      width: 100%;
      margin: 10px 0;
    }
    div {
      width: 100%;
      h4 {
        text-align: center;
        padding: 0 20px;
        font-size: 23px;
      }

      p {
        margin: 15px auto 10px;
      }
    }
  }
`;
const More = styled.p`
  font-size: 18px;
  text-decoration: underline;
`;
