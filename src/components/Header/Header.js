import React from "react";
import ArrowHeadToLeft from "../../img/ArrowHeadToLeft.png";
import { HeaderContainer } from "./HeaderStyle";
import { useHistory } from "react-router";
import Typography   from '@mui/material/Typography';
import Box   from '@mui/material/Box';



const Header = (props) => {
  const history = useHistory()
  return (
    <>
      <HeaderContainer>

          <img src={ArrowHeadToLeft} alt="Go Back" onClick={history.goBack}/>
        {/* <Typography>Busca</Typography> */}
        <Box sx={{marginLeft: '30vw'}}>
          <Typography>{props.title}</Typography>
        </Box>
      </HeaderContainer>
    </>
  );
};

export default Header;
