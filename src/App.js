import React from "react";
import Fab from "./components/Fab";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <main id="main">
      <Nav />
      <Intro />
      <Main />
      <Footer />
      <Fab />
    </main>
  );
}

export default App;
