import React, { Component, createContext } from "react";
import languages from "../../languages/languages";

const { Provider: LanguageProvider, Consumer: LangConsumer } = createContext();
export const LanguageConsumer = LangConsumer;

class LanguageHoc extends Component {
  state = {
    lang: "ukrainian",
  };

  changeLanguage = (e) => {
    this.setState({ lang: e.target.value });
  };

  render() {
    const { lang } = this.state;
    return (
      <>
        <LanguageProvider
          value={{
            language: languages[lang],
            list: languages.list,
            changeLanguage: this.changeLanguage,
          }}>
          {this.props.children}
        </LanguageProvider>
      </>
    );
  }
}

export default LanguageHoc;
