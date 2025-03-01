import { useState } from "react";
import Shorten from "./components/Shorten.tsx";
import Header from "./components/Header.tsx";
import "./index.css";

const BASE_URI = "http://localhost:3000";

function App() {
  return (
    <>
      <Header />
      <Shorten />
    </>
  );
}

export default App;
