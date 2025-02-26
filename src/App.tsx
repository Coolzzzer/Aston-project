import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { SIGNUP } from "./utils/constants/constants";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={SIGNUP} element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
