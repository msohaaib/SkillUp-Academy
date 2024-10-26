import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Courses from './Pages/Courses';
import ContactUs from './Pages/ContactUs';
import CourseDetail from './Components/CourseDetail';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Dashboard from "./Pages/Dashboard";

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {  
  return (  
    <Router>  
      <div className="flex flex-col min-h-screen">
        <Header />  
        
        <main className="flex-grow">
          <Routes>  
            <Route path="/" element={<Home />} />  
            <Route path="/courses" element={<Courses />} />  
            <Route path="/contactus" element={<ContactUs />} />  
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/signup" element={<SignUp />} />  
            <Route path="/LogIn" element={<LogIn />} />  
            <Route path="/Dashboard" element={<Dashboard />} />  
          </Routes>  
        </main>  
        
        <Footer />  
      </div>  
    </Router>  
  );  
}

export default App;
