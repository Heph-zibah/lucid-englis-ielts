import React from 'react'
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
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