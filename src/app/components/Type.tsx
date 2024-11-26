"use client";

import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Web Designer",
          "Freelancer",
          "App Developer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Type;
