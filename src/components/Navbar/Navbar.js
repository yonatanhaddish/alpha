import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const handleCloseMenu =() => setClick(false);

  const showButton = () => {
      if (window.innerWidth < 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  };

  const colorRandom = (() => {
    const value = (min, max) => {
      const d= max - min + 1;
      const r= Math.random() * d;
      return Math.floor(r) + min;
    };
    return () => {
      const h= value(0,360);
      const s= value(42,98);
      const l= value(40,90);
      return `hsl(${h},${s}%,${l}%)` ;
    };
  })();

  useEffect(() => {
      showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={colorRandom}>
            <NavIcon />
            ALPHA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products">Products</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/signup">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/signup">
                  <Button fontbig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
