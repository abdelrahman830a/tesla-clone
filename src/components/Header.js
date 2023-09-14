import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Conatiner>
      <a href="https://tesla.com">
        <img src="/images/logo.svg" alt="TESLA Logo" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <p>
              <a key={index} href="https://tesla.com">
                {car}
              </a>
            </p>
          ))}
      </Menu>

      <RightMenu>
        <p>
          <a href="https://shop.tesla.com/">Shop</a>
        </p>
        <p>
          <a href="https://www.tesla.com/teslaaccount">Tesla Account</a>
        </p>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomCloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CustomCloseWrapper>
        <CarsSmallRemove>
        {cars && cars.map((car, index) =>(
          <li><a key={index} href="#">{car}</a></li>
        ))}
        </CarsSmallRemove>
        <li>
          <a href="https://www.tesla.com/inventory/new/m3">Existing Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/tradein">Trade-in</a>
        </li>
        <li>
          <a href="https://www.tesla.com/cybertruck">Cybertruck</a>
        </li>
        <li>
          <a href="https://www.tesla.com/roadster">Roadster</a>
        </li>
        <li>
          <a href="https://www.tesla.com/fleet">Semi</a>
        </li>
        <li>
          <a href="https://www.tesla.com/charging">Charging</a>
        </li>
        <li>
          <a href="https://www.tesla.com/powerwall">Powerwall</a>
        </li>
        <li>
          <a href="https://www.tesla.com/solarpanels">Commercial Energy</a>
        </li>
        <li>
          <a href="https://www.tesla.com/megapack">Utilities</a>
        </li>
        <li>
          <a href="https://www.tesla.com/drive">Test Drive</a>
        </li>
        <li>
          <a href="https://www.tesla.com/findus">Find Us</a>
        </li>
        <li>
          <a href="https://www.tesla.com/support">Support</a>
        </li>
        <li>
          <a href="#">United States</a>
        </li>
      </BurgerNav>
    </Conatiner>
  );
};

export default Header;

const Conatiner = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 10, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CarsSmallRemove= styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`