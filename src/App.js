import React            from 'react';
import GlobalState      from "./contexts/GlobalState";
import { GlobalStyle }  from "./GlobalStyle"

import Router           from "./routes/Router";
import theme            from "./constants/theme";

import {ThemeProvider}  from '@mui/material/styles';
import CssBaseline      from "@mui/material/CssBaseline";


const App = () => {
  return (
    <GlobalState>
      <div>

      <ThemeProvider theme={theme}>
      <CssBaseline />

        <GlobalStyle />
        <Router />

      </ThemeProvider>

      </div>
    </GlobalState>
  );
};

export default App;
