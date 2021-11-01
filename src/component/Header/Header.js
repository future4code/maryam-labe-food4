import React from "react";
import ArrowHeadToLeft from "../../img/ArrowHeadToLeft.png";
import { HeaderContainer } from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <HeaderContainer>
          <img src={ArrowHeadToLeft} alt="Go Back" />
        <h3>Busca</h3>
      </HeaderContainer>
    </>
  );
};

export default Header;
