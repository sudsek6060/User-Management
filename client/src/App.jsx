import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import Header from "./components/Header";
import UserListing from "./pages/UserListing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/LogIN" element={<LogIn />} />
        <Route path="/user-listings" element={<UserListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
