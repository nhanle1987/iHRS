"use client";

import { ReactNode } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";
// + css

import GlobalStyle from "./globalstyles";
import { SideNavigator, TopNavigator } from "./jNavigator";
import { TemplateScripts } from "../template-ref";

// + css

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="wrapper">
        <SideNavigator />
        <div id="body" className="active">
          <TopNavigator />
          <div className="content">
            {/* <div className="container"> */}
            {children}
            {/* </div> */}
          </div>
        </div>
      </div>
      <TemplateScripts />
    </ThemeProvider>
  );
}
