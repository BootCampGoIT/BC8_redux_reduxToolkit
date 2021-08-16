import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  loginUserOperation,
  registerUserOperation,
} from "../../redux/auth/authOperation";
import { AuthContainer } from "./AuthStyled";
import sprite from "../../icons/section1_sprite.svg";
import {
  useLocation,
  useHistory,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { LanguageContext } from "../App";
import languages from "../../languages";
import {
  languageSelector,
  nameLanguageSelector,
  placeholdersSelector,
} from "../../languages/languagesSelectors/Auth";

const initialState = {
  email: "",
  password: "",
  displayName: "",
};

const Auth = ({ registerUserOperation, loginUserOperation }) => {
  const [state, setState] = useState({ ...initialState });
  const { language } = useContext(LanguageContext);
  const dispatch = useDispatch();

  const location = useLocation();

  const isRegisterPage = () => location.pathname === "/signup";

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    isRegisterPage()
      ? dispatch(registerUserOperation(state))
      : dispatch(loginUserOperation({ email, password }));
  };
  return (
    <AuthContainer
      length={
        languages[language].pages.authPage.authForm.buttons.register.length ||
        languages[language].pages.authPage.authForm.buttons.login.length
      }>
      <form
        onSubmit={onHandleSubmit}
        className='user-form'
        autoComplete='off'
        name='userForm'>
        {isRegisterPage() && (
          <label className='user-label'>
            {languageSelector(language, "username")}
            <input
              type='text'
              name='displayName'
              onChange={onHandleChange}
              value={state.displayName}
              className='user-input'
              placeholder={placeholdersSelector(language, "name")}
              minLength='3'
              autoComplete='on'
              required
            />
            <svg className='icon-user'>
              <use href={sprite + "#icon-drawer"} />
            </svg>
          </label>
        )}
        <label className='user-label'>
          {languageSelector(language, "email")}
          <input
            type='text'
            name='email'
            onChange={onHandleChange}
            value={state.email}
            className='user-input'
            placeholder={
              languages[language].pages.authPage.authForm.placeholders.email
            }
            minLength='3'
            autoComplete='on'
            required
          />
          <svg className='icon-user'>
            <use href={sprite + "#icon-drawer"} />
          </svg>
        </label>
        <label className='user-label'>
          {languageSelector(language, "password")}
          <input
            type='text'
            name='password'
            onChange={onHandleChange}
            value={state.password}
            className='user-input'
            required
            placeholder={
              languages[language].pages.authPage.authForm.placeholders.password
            }
            autoComplete='on'
          />
          <svg className='icon-user'>
            <use href={sprite + "#icon-user"} />
          </svg>
        </label>
        <button type='submit' className='user-button'>
          {isRegisterPage()
            ? languages[language].pages.authPage.authForm.buttons.register
                .length > 6
              ? languages[
                  language
                ].pages.authPage.authForm.buttons.register.slice(10) + "..."
              : languages[language].pages.authPage.authForm.buttons.register
            : languages[language].pages.authPage.authForm.buttons.login}
        </button>
      </form>
    </AuthContainer>
  );
};

export default Auth;
