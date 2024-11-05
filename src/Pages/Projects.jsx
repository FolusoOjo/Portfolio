import styled from "styled-components";
import Card from "../UI/Card";
import ipProject from "../assets/ipProject.jpg";
import addToCart from "../assets/addToCart.jpg";
import countriesApi from "../assets/countriesApi.jpg";
import kudaClone from "../assets/kudaClone.png";
// import nexcent from "../assets/nexcent.jpg";
import htmlImg from "../assets/html.png";

function Projects() {
  return (
    <>
      <Container>
        <Wrapper>
          <Flex>
            <Text>
              <h3>
                Here are some projects that demonstrate my skills in frontend
                development, from responsive design and interactive user
                experiences to efficient code and modern design techniques.
              </h3>
            </Text>
          </Flex>

          <Card
            Images={kudaClone}
            Title="Replica of Kuda"
            description="I created a replica of the Kuda website, focusing on routing and styling with styled-components. This project helped me gain hands-on experience in building smooth navigation flows and maintaining consistent, responsive design through styled-component integration."
            Year="November, 2024."
            Role="Front-End Developer"

          />

          <Card
            Images={ipProject}
            Title="IP Address Tracker"
            description="Partnered with a colleague to build a responsive website that pinpoints your location using IP Geolocation. This site is accessible on all devices and provides accurate location information from anywhere globally, combining design and functionality to offer seamless user experience."
            Year="October, 2024."
            Role="Front-End Developer"
          />

          <Card
            Images={countriesApi}
            Title="COUNTRIES API"
            description="Fetched data from an API to display comprehensive information on countries and regions worldwide. The site dynamically shows each country’s population, currency, and capital, providing users with an interactive and informative view of global data."
            Year="September, 2024."
            Role="Front-End Developer"
          />

          <Card
            Images={addToCart}
            Title="Add To Cart Functionality"
            description="I developed a replica of an eCommerce website that enables customers to browse products, add multiple items to their cart, and proceed to checkout. This project focuses on enhancing the shopping experience with user-friendly navigation, smooth cart functionality, and responsive design across devices, making it easy for users to shop seamlessly."
            Year="October, 2024."
            Role="Front-End Developer"
          />

          <Card
            Images={addToCart}
            Title="Add To Cart Functionality"
            description="I developed a replica of an eCommerce website that enables customers to browse products, add multiple items to their cart, and proceed to checkout. This project focuses on enhancing the shopping experience with user-friendly navigation, smooth cart functionality, and responsive design across devices, making it easy for users to shop seamlessly."
            Year="October, 2024."
            Role="Front-End Developer"
          />

          <Card
            Images={htmlImg}
            Title="HTML"
            description="This project marks my initial venture into HTML. Through creating this page, I developed a foundational understanding of HTML structure, tags, and basic styling, setting the groundwork for more advanced web development skills."
            Year=''
            Role="Front-End Developer"
          />
        </Wrapper>
      </Container>
    </>
  );
}
export default Projects;
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
  /* display: flex; */
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.div`
  border: 2px dotted darkblue;
  width: 50%;
  display: flex;
  align-items: center;

  h3 {
    width: 70%;
  }
`;
