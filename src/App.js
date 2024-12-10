import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./Login";
import Home from "./Home";
import PasswordReset from "./PasswordReset";
import LinkSent from "./LinkSent";
import UscFC from "./UscFC";
import UscExtra from "./UscExtra";
import NewHome from "./components/ui/NewHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/resetpassword" element={<PasswordReset />} />
        <Route path="/linksent" element={<LinkSent />} />
        <Route path="/UscFC" element={<UscFC />} />
        <Route path="/UscExtra" element={<UscExtra />} />
        <Route path="/NewHome" element={<NewHome />} />
      </Routes>
    </Router>
  );
}

export default App;
