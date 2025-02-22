import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
