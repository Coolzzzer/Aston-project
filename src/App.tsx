import {URLs} from "../src/constants/urls";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import MovieFinder from "./pages/movieFinder/movieFinder";
import Header from "./pages/main/header/header";
import Footer from "./pages/main/footer/footer";
import Content from "./pages/main/content/content";
import Favorites from "./pages/main/favorites/favorites";
import History from "./pages/main/history/history";
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path={URLs.HOME_PAGE} element={<Content />}>
          <Route path={``} element={<MovieFinder />} />
          <Route path={URLs.SIGN_UP} element={<Signup />} />
          <Route path={URLs.FAVORITES_PAGE} element={<Favorites/>} />
          <Route path={URLs.HISTORY} element = {<History/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
