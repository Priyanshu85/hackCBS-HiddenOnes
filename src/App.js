// import logo from './logo.svg';
import './App.css';
//Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";
import Doctor from "./Pages/Doctor/Doctor";
import PatientRecord from './Pages/PatientRecord/PatientRecord';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/doctor" element={<Doctor />} />
          <Route exact path="/records" element={<PatientRecord />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
