import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import MainPage from "./pages/MainPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path=":movieId" element={<DetailPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
