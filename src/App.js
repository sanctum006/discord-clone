import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <h1 className="text-white flex w-3/4 bg-green-400">
        Hey there! i'm chatbox
      </h1>
    </div>
  );
}

export default App;
