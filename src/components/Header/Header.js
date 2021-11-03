import React from "react";
import ArrowHeadToLeft from "../../img/ArrowHeadToLeft.png";
import { HeaderContainer } from "./HeaderStyle";
import { useHistory } from "react-router"

const Header = (props) => {
  const history = useHistory()
  return (
    <>
      <HeaderContainer>
          <img src={ArrowHeadToLeft} alt="Go Back" onClick={history.goBack}/>
        {/* <h3>Busca</h3> */}
        <h3>{props.title}</h3>
      </HeaderContainer>
    </>
  );
};

export default Header;
