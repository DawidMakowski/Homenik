import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/globalstyles';
import { theme } from './theme/theme';
import OutcomeContextProvider from './global/OutcomeContext';
import WeeklyList from './WeeklyList/WeeklyList';

const App = () => (
  <>
    <GlobalStyles />
    <OutcomeContextProvider>
      <ThemeProvider theme={theme}>
        <WeeklyList />
      </ThemeProvider>
    </OutcomeContextProvider>
  </>
);

export default App;
