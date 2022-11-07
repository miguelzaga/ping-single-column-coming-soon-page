import { useState } from "react";
import logo from "/src/images/logo.svg";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img className="header__logo" alt="ping logo" src={logo} />
      </header>
      <main className="main">
        We are launching soon! Subscribe and get notified Notify Me &copy;
      </main>
      <footer className="footer">Copyright Ping. All rights reserved.</footer>
    </div>
  );
}

export default App;
