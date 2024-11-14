import styled from "styled-components";
import Buttons from "../UI/Buttons";
import homeimg from "../assets/homeImg.jpeg";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contact";

function Home() {
  return (
    <>
      <Container id="home">
        <Wrapper>
          <div>
            <h3>Hi, I am </h3>
            <h3>Foluso Ojo</h3>

            <Buttons />
          </div>

          <img src={homeimg} alt="My picture" />
        </Wrapper>
      </Container>
      <Projects />
      <About />
      <Contacts />
    </>
  );
}
export default Home;

const Container = styled.div`
  /* background-color: darkmagenta; */
  min-height: calc(100vh - 70px);
  max-width: 1280px;
  margin: auto;

  @media (max-width: 800px) {
    margin-top: 70px;
    min-height: calc(100vh - 70px);
    /* background-color: yellow; */
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
`;
const Wrapper = styled.div`
  /* background-color: coral; */
  margin: 0 auto;
  margin-top: 70px;
  width: 85%;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 12px;
    width: 400px;
  }

  div {
    width: 50%;
    text-transform: uppercase;
    /* border: 20px solid black; */
    /* margin: 0 auto; */

    h3 {
      font-size: 70px;
      /* border: 2px solid green; */
      margin: 15px 0;
      padding: 0 10px;
    }
  }

  @media (max-width: 800px) {
    /* background-color: red; */
    display: block;
    /* margin-top: 70px; */
    min-height: calc(100vh - 70px);
    max-width: 90%;
    /* margin: 0 auto; */
    img {
      width: 300px;
      margin: auto;
      display: block;
      /* text-align: center; */

      /* margin-left: 28px; */
    }

    div {
      margin: auto;
      min-width: 100%;
      /* border: 2px solid red;  */
      text-align: justify;

      h3 {
        font-size: 30px;
      }
    }
  }
`;
