import styled from "styled-components";

function Header() {
  return (
    <>
      <Flex>
        <h6>FolusoOjo</h6>

        <Info>
          <p>Work</p>
          <p>About</p>
          <p>Contact</p>
        </Info>
      </Flex>
    </>
  );
}
export default Header;

const Flex = styled.div`
  display: flex;
  background-color: hotpink;
  height: 70px;
  /* margin-bottom: 70px; */
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  h6 {
    font-family: "Itim", cursive;
    font-weight: 540;
    font-style: normal;
    font-size: 15px;
  }

  @media (max-screen: 900px) {
    background-color: skyblue;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 2px solid chartreuse; */
  width: 20%;
  align-items: center;
`;
