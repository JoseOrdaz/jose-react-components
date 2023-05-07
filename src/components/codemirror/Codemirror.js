import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "./components";

const Codemirror = ({language,CarruselCode}) => {
  //const [language, changeLanguage] = useState("jsx");
  //const [languageDemo, changeDemo] = useState(sample["jsx"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);
  return (
    <div className="container mx-auto mt-10">

      <div className="demo">
        <CopyBlock
          language={language}
          text={CarruselCode}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />

      </div>
    </div>
  );
};

export default Codemirror;
