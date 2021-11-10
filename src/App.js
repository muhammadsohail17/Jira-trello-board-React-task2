import React from "react";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Style/style.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <HomePage />
    </DndProvider>
  );
}

export default App;
