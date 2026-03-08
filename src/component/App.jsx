import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState } from "react";

import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "../style/Global.css";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <LoadingBar
          color="#0D57B6"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Layout>
          <PageTracker setProgress={setProgress} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

function PageTracker({ setProgress }) {
  const location = useLocation();

  useEffect(() => {
    setProgress(10); // Start loading
    const timer = setTimeout(() => setProgress(100), 500); // Finish after delay
    return () => clearTimeout(timer);
  }, [location, setProgress]);

  return null;
}

export default App;
