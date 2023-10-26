import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-[#feffff]">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;