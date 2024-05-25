import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/background.jpg";

const LayoutKom = ({ children }) => {
  return (
    <React.Fragment>
      <div
        className="dark:bg-gray-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default LayoutKom;
