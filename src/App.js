import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Sidebar/Dashboard";

import Userdetail from "./components/Sidebar/Userdetail";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/userdetail" element={<Userdetail/>}/> 
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
