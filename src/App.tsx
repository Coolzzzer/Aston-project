import {URLs} from "./utils/constants/constants";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import MovieFinder from "./pages/movieFinder/movieFinder";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./pages/main/content/content";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path={URLs.HOME_PAGE} element={<Content />}>
          <Route path={``} element={<MovieFinder />} />
          <Route path={URLs.SIGN_UP} element={<Signup />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
