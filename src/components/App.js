import React, { useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const api = "http://localhost:6001"

  useEffect(()=> {
    fetch(api)
    .then(resp => resp.json())
    .then(data => data)
  })
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
