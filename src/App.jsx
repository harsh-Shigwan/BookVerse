import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Books from "./pages/Books";
import BooksId from "./pages/BooksId";
export default function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Router>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/books" element={<Books/>}></Route>
    <Route path="/books/:id" element={<BooksId/>} />

    </Routes>
    </Router>
    </div>
  )
}