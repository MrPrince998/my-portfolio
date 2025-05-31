import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

import { lazy, Suspense } from "react";
import Error404 from "./components/common/Error.jsx";
import { GoldParticleLoader } from "./components/common/loadings/GoldParticleLoader.jsx";

function App() {
  const Home = lazy(() => import("./pages/HomePage.jsx"));
  return (
    <>
      <NavBar />
      <Suspense fallback={<GoldParticleLoader />}>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
