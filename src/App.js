import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import './App.css'
import Experience from "./pages/Experience/Experience";

function App() {
  return (
    <BrowserRouter basename="/DhanushaNandakumar">
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/profile" element={<Experience />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;