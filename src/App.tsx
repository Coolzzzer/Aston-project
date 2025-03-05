import { useSelector } from 'react-redux';
import {URLs} from "./utils/constants/constants";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import {Signin} from "@pages/signin/signin";
import {Signup} from "./pages/signup/signup";
import {MovieFinder} from "./pages/movieFinder/movieFinder";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./pages/main/content/content";
import {ProtectedRouterElement} from "@components/ProtectedRoute";
import { RootState } from "@store/store"; 


function App() {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);


  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path={URLs.HOME_PAGE} element={<Content />}>
          <Route path={``} element={<MovieFinder />} />
          <Route path={URLs.SIGN_UP} element={<ProtectedRouterElement loggedIn={!loggedIn} elements={Signup}/>} />
          <Route path={URLs.SIGN_IN} element={<Signin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
