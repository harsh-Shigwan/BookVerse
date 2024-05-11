import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BooksId from "./pages/BooksId";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/books/:id" element={<BooksId />} />
          <Route path="*" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
