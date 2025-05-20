import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
