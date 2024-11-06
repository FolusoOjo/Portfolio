import styled from "styled-components";
import Buttons from "../UI/Buttons";
import homeimg from "../assets/homeImg.jpeg";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contact";

function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <h3>
              Hi, My name is
              <br />
              Foluso Alice Ojo{" "}
            </h3>
            <Buttons />
          </div>

          <img src={homeimg} alt="My picture" width="400px" />
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
  }

  div {
    /* border: 2px solid red; */
    width: 50%;
    /* margin: 0 auto; */

    h3 {
      font-size: 70px;
      /* border: 2px solid green; */
      margin: 15px 0;
    }
  }
`;
