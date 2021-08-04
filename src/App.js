import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chatbox from "./components/chatbox/Chatbox";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chatbox />
    </div>
  );
}

export default App;
