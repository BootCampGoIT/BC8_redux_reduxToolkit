import languages from "..";

export const languageSelector = (language, value) =>
  languages[language].pages.authPage.authForm[value];
export const placeholdersSelector = (language, value) =>
  languages[language].pages.authPage.authForm.placeholders[value];
