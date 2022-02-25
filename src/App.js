import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className=" min-h-screen min-w-full flex flex-col	">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:eventId" element={<Details />} />
      </Routes>
    </div>
  );
}
