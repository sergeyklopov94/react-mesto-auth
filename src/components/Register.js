import React from 'react';
import {Link} from 'react-router-dom';

function Register() {
  return (
      <main className="sign">
        <div className="sign__container">
          <h3 className="sign__header">Регистрация</h3>
          <form className="sign__form"
            name="sign-up-form">
            {/* onSubmit={handleSubmit} */}
            <fieldset className="sign__input-container">
              <input className="sign__input"
                name="email"
                id="email"
                type="email"
                minLength="2"
                maxLength="40"
                placeholder="Email"
                required
                // onChange={handleEmailChange}
              >
              </input>
              <input className="sign__input"
                name="password"
                id="password"
                type="password"
                minLength="3"
                maxLength="20"
                placeholder="Password"
                required
                // onChange={handlePasswordChange}
              >
              </input>
            </fieldset>
            <button className="sign__button" type="submit">Зарегистрироваться</button>
          </form>
          <p className="sign__text">Уже зарегистрированы?
            <Link to="/sign-in" className="sign__link"> Войти</Link>
          </p>
        </div>
      </main>
  );
}
   
export default Register;