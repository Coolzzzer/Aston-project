import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import Header from "./pages/main/header/header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
