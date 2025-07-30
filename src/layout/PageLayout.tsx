import React from 'react'
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import { LayoutProps } from "@/lib/type";
const PageLayout = ({children} : LayoutProps) => {
  return (
  <div>
    <Header/>
    <main>{children}</main>
    <Footer/>
  </div>
   
  );
}

export default PageLayout