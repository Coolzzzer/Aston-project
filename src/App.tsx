import { StyledEngineProvider } from "@mui/material/styles";
import { useSelector} from 'react-redux';
import { URLs } from "./utils/constants/constants";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Signin } from "@pages/signin/signin";
import { Signup } from "./pages/signup/signup";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./pages/main/content/content";
import { PopupCard } from '@components/popupComponent/popupCard';
import {ProtectedRouterElement} from "@components/ProtectedRoute";
import { getLoggedIn } from '@store/getLoggedIn';
import { History } from "@pages/history/history";
import { InputField } from '@pages/inputField/inputField';
import { ResultField } from '@components/resultField/resultField';
import { Favorites } from "@pages/favorites/favorites";
import { useLocation } from "react-router-dom";

function App() {
  const loggedIn = useSelector(getLoggedIn);
  const location = useLocation();
  const isHomePage = location.pathname === URLs.HOME_PAGE;

  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path={URLs.HOME_PAGE} element={<Content />}>
            <Route path={``} element={<InputField />} />
            <Route path={`:id`} element={<PopupCard />} />
            <Route path={URLs.SIGN_UP} element={<ProtectedRouterElement loggedIn={!loggedIn} elements={Signup}/>} />
            <Route path={URLs.SIGN_IN} element={<ProtectedRouterElement loggedIn={!loggedIn} elements={Signin}/>} />
            <Route path={URLs.HISTORY} element={<ProtectedRouterElement loggedIn={loggedIn} elements={History}/>} />
            <Route path={URLs.FAVORITES} element={<ProtectedRouterElement loggedIn={loggedIn} elements={Favorites}/>} />
          </Route>
          <Route path={URLs.FAVORITES} element={<ProtectedRouterElement loggedIn={loggedIn} elements={Favorites} />} />
          <Route path={`${URLs.FAVORITES}/:id`} element={<PopupCard />} />
        </Routes>
        {isHomePage && <ResultField />}
        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
