import { useState } from "react";
import logo from "/src/images/logo.svg";
import illustration from "/src/images/illustration-dashboard.png";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img className="header__logo" alt="ping logo" src={logo} />
      </header>
      <main className="main">
        <h1 className="main__title">
          We are launching <b className="bold">soon!</b>
        </h1>
        <p className="main__subtitle">
          Subscribe and get notified Notify Me &copy;
        </p>
        <form noValidate className="main__form form">
          <input
            className="form__input"
            type="email"
            required
            placeholder="Your email adress..."
          />
          <button className="form__btn" type="submit">
            Notify Me
          </button>
        </form>
        <img
          className="main__illustration"
          alt="dashboard illustration"
          src={illustration}
        />
      </main>
      <footer className="footer">
        <ul className="footer__socials">
          <li className="footer__socials-li"></li>
          <li className="footer__socials-li"></li>
          <li className="footer__socials-li"></li>
        </ul>
        Copyright Ping. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
