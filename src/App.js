import React from 'react';
import GlobalState from "./contexts/GlobalState";
import { GlobalStyle } from "./GlobalStyle"
import Router from "./routes/Router";

const App = () => {
  return (
    <GlobalState>
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </GlobalState>
  );
};

export default App;
