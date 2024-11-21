import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./Login";
import Home from "./Home";
import PasswordReset from "./PasswordReset";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/resetpassword" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
}

export default App;
