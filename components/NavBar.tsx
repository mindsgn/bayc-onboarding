import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-10 w-full flex justify-center mt-8 2xl:mt-16">
      <div className="flex flex-row items-center mx-auto">
        <img src="images/textLogo.png" alt="popLogo" className="h-12"/>
        <p className="text-xl mx-8 mt-3">X</p>
        <img src="images/BAYC.svg" alt="baycLogo" className="h-12 mt-2"/>
      </div>
    </nav>
  );
};
export default Navbar;
