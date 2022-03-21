import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Navbar />
      <Outlet context={[data, setData]} />
    </>
  );
}

export default App;
