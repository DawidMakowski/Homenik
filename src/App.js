import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './views/Router';
import GlobalStyles from './theme/globalstyles';
import { theme } from './theme/theme';
import OutcomeContextProvider from './context/OutcomeContext';
import IncomeContextProvider from './context/IncomeContext';

const App = () => (
  <>
    <GlobalStyles />
    <IncomeContextProvider>
      <OutcomeContextProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </OutcomeContextProvider>
    </IncomeContextProvider>
  </>
);

export default App;
