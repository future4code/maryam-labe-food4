import React, { useEffect, useContext, useLayoutEffect } from 'react';
import { goToProfile } from "../../routes/coordinator";
import { goToCart, goToHome } from "../../routes/coordinator";
import { useHistory } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ActiveOrderComponent from '../../components/ActiveOrderComponent/ActiveOrderComponent'
import {GlobalContext}  from "../../contexts/GlobalContext";

// import HomeIcon from "@mui/icons-material/Home";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PersonIcon from "@mui/icons-material/Person";
// import Paper from "@mui/material/Paper";


const Footer = () => {
  const [value, setValue] = React.useState(0);
  const history = useHistory()
  const { activeOrder, setActiveOrder, getActiveOrder } = useContext(GlobalContext);

  

  return (
    <Paper sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0
    }}
      elevation={3}
    >
      <ActiveOrderComponent/>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => goToHome(history)}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => goToCart(history)}
          icon={<ShoppingCartIcon />}
        />
        <BottomNavigationAction
          onClick={() => goToProfile(history)}
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
