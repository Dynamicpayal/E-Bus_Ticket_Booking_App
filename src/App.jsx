import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Login from "./components/Login";
import BookingDetails from "./components/BookingDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
