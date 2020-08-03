import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/globalstyles';
import { theme } from './theme/theme';
import Icon from './components/Icon/Icon';
import OutcomeContextProvider from './context/OutcomeContext';

const App = () => (
  <>
    <GlobalStyles />
    <OutcomeContextProvider>
      <ThemeProvider theme={theme}>
        <Icon icon="close" />
      </ThemeProvider>
    </OutcomeContextProvider>
  </>
);

export default App;
