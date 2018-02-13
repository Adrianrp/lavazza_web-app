import React from 'react';

import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';

import Header from './header';
import Footer from './footer';
import FooterAlt from './footer_alt';

const muiTheme = getMuiTheme({});

const App = (props) => {
  const currentLocation = props.location.pathname;
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="root">
          <Header/>
          {props.children}
        {(currentLocation == '/betingelser') ? <FooterAlt /> : <Footer/>}
      </div>
    </MuiThemeProvider>
  );
};

export default App;