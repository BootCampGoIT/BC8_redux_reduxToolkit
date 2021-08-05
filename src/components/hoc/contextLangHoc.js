import React, { Component } from "react";
import { LanguageConsumer } from "./LanguageHoc";

const contextLangHoc = (WrappedComponent) => {
  return class ContextLangHoc extends Component {
    render() {
      return (
        <LanguageConsumer>
          {(value) => <WrappedComponent {...value} {...this.props} />}
        </LanguageConsumer>
      );
    }
  };
};

export default contextLangHoc;
