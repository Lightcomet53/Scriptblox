import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { ThemeProvider } from "@mui/material";
import theme from "contants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
