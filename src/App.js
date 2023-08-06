//import logo from './logo.svg';
import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import UpdateUser from "./components/update-userl.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/*" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
