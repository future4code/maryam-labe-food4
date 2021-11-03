import React from 'react';

import {goToSearch}    from "../../routes/coordinator";
import {goToProfile}  from "../../routes/coordinator";
import {goToCart}     from "../../routes/coordinator";
import {useHistory}   from 'react-router-dom';

import BottomNavigation       from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon               from '@mui/icons-material/Home';
import ShoppingCartIcon       from '@mui/icons-material/ShoppingCart';
import PersonIcon             from '@mui/icons-material/Person';
import Paper                  from '@mui/material/Paper';




const Footer = () => {
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    return (

    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        >

            <BottomNavigationAction  onClick={() =>goToSearch(history)  }  icon={<HomeIcon />} />
            <BottomNavigationAction  onClick={() =>goToCart(history)   }  icon={<ShoppingCartIcon />} />
            <BottomNavigationAction  onClick={() =>goToProfile(history)}  icon={<PersonIcon />} />

        </BottomNavigation>
    </Paper>
    )
}

export default Footer;
