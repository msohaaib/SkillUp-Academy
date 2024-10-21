import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

    return (
    <div className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white">
        <div className="font-bold text-xl">
        <h1>SkillUp Academy</h1>
    </div>

    <div className="sm:hidden">
        <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
        >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
    </div>

    <div className={`sm:flex sm:flex-row flex-col absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-800 sm:bg-transparent p-4 sm:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col text-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/Courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/SignUp" onClick={() => setIsMenuOpen(false)}>SignUp</Link></li>
            <li><Link to="/ContactUs" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
    </div>
    </div>
);
};

export default Header;