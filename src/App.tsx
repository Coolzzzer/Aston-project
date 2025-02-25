import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import Header from "./pages/main/header/header";
import Footer from "./pages/main/footer/footer";
import Content from "./pages/main/content/content";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Content />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
