import Home from './Pages/Home';  
import Courses from './Pages/Courses';  
import SignUp from './Pages/SignUp';  
import ContactUs from './Pages/ContactUs';  
import Header from './Components/Header';  
import CourseDetail from './Components/CourseDetail';  
import Footer from './Components/Footer';  

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

function App() {  
  return (  
    <Router>  
      <div className="flex flex-col min-h-screen"> {/* Ensure the app takes the full height of the screen */}
        <Header />  
        <main className="flex-grow"> {/* This will take the remaining space */}
          <Routes>  
            <Route path="/" element={<Home />} />  
            <Route path="/Courses" element={<Courses />} />  
            <Route path="/SignUp" element={<SignUp />} />  
            <Route path="/ContactUs" element={<ContactUs />} />  
            {/* Updated to match the ID parameter used in Courses.jsx */}  
            <Route path="/course/:id" element={<CourseDetail />} />  
          </Routes>  
        </main>  
        <Footer />  
      </div>  
    </Router>  
  );  
}  

export default App;  
