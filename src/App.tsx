import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";

import { cssVariables } from "./styles/cssVariables";

export const App = () => {
  return (
    <ThemeProvider theme={cssVariables}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};
