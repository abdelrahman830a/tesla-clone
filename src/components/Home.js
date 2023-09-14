import React from "react";
import Sections from "./Sections";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Sections
        title="Model S"
        describtion="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        leftLink="https://www.tesla.com/models/design#overview"
        rightLink="https://www.tesla.com/drive?selectedModel=models"
      />
      <Sections
        title="Model Y"
        describtion="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        leftLink="https://www.tesla.com/modely/design#overview"
        rightLink="https://www.tesla.com/drive?selectedModel=modely"
      />
      <Sections
        title="Model 3"
        describtion="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        leftLink="https://www.tesla.com/model3/design#overview"
        rightLink="https://www.tesla.com/drive?selectedModel=model3"

      />
      <Sections
        title="Model X"
        describtion="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        leftLink="https://www.tesla.com/modelx/design#overview"
        rightLink="https://www.tesla.com/drive?selectedModel=modelx"
      />
      <Sections
        title="Lowest Cost Solar Panels in America"
        describtion="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        leftLink="https://www.tesla.com/energy/design"
        rightLink="https://www.tesla.com/solarpanels"
      />
      <Sections
        title="Solar for New Roofs"
        describtion="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        leftLink="https://www.tesla.com/solarroof/design"
        rightLink="https://www.tesla.com/solarroof"
      />
      <Sections
        title="Accessories"
        describtion=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        leftLink="https://shop.tesla.com/"
        
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
