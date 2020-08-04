import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/globalstyles';
import { theme } from './theme/theme';
import OutcomesList from './components/OutcomesList/OutcomesList';
import OutcomeContextProvider from './context/OutcomeContext';

const App = () => (
  <>
    <GlobalStyles />
    <OutcomeContextProvider>
      <ThemeProvider theme={theme}>
        <OutcomesList />
      </ThemeProvider>
    </OutcomeContextProvider>
  </>
);

export default App;
