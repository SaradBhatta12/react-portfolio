import React from "react";
import Home from "./components/Home";
import Skills from "./components/sub-components/Skills";
import { memo } from "react";

const Page: React.FC = () => {
  return (
    <>
      <div className="h-screen">
        <Home />
      </div>
      <div className="flex justify-center">
        <Skills />
      </div>
    </>
  );
};

export default memo(Page);
