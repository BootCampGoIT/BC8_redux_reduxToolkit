import React from "react";
import contextLangHoc from "../hoc/contextLangHoc";


const Section = ({ children, title }) => {
  return (
    <div>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </div>
  );
};

export default contextLangHoc(Section);
