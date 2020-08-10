import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/globalstyles';
import { theme } from './theme/theme';
import OutcomesList from './components/OutcomesList/OutcomesList';
import OutcomeContextProvider from './context/OutcomeContext';
import IncomeContextProvider from './context/IncomeContext';

const App = () => (
  <>
    <GlobalStyles />
    <IncomeContextProvider>
      <OutcomeContextProvider>
        <ThemeProvider theme={theme}>
          <OutcomesList />
        </ThemeProvider>
      </OutcomeContextProvider>
    </IncomeContextProvider>
  </>
);

export default App;
