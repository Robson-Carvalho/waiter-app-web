import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

import { cssVariables } from "./styles/cssVariables";

import { Header } from "./components/Header";
import { Orders } from "./components/Orders";

export const App = () => {
  return (
    <ThemeProvider theme={cssVariables}>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center" />
    </ThemeProvider>
  );
};
