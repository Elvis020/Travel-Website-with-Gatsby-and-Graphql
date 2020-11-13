import React from "react"
import Header from "./Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
