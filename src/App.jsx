import Home from './Pages/Home';
import Courses from './Pages/Courses';
import SignUp from './Pages/SignUp';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
