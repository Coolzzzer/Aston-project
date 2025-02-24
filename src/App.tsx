import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
