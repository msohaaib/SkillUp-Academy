import { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => password.length >= 8;

    const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
        newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
        newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
        newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        alert('Login successful!');
    }
    };

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
            <div>
                <label className="block font-semibold text-gray-700">Email</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

        <div>
            <label className="block font-semibold text-gray-700">Password</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-indigo-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <Link
        to="/Dashboard"
        >
        <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded mt-4 hover:bg-gray-800 transition"
        >
            Login
        </button>
        </Link>

        <p className="text-center text-gray-600 mt-4">
        Don’t have an account?{' '}
        <Link to="/SignUp" className="text-indigo-600 hover:text-indigo-800">
            Sign up
        </Link>
        </p>
        </form>
    </div>
);
};

export default LogIn;
