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
      </main>
      <footer className="footer">Copyright Ping. All rights reserved.</footer>
    </div>
  );
}

export default App;
