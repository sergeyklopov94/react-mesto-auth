import React from 'react';

function Login() {
  return (
    <main className="sign">
    <div className="sign__container">
      <h3 className="sign__header">Вход</h3>
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
        <button className="sign__button" type="submit">Войти</button>
      </form>
    </div>
  </main>
  );
}
   
export default Login;