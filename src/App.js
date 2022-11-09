import { useState } from "react";
import logo from "/src/images/logo.svg";

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
      </main>
      <footer className="footer">Copyright Ping. All rights reserved.</footer>
    </div>
  );
}

export default App;
