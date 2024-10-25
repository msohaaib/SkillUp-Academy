import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        from_name: '',  // Use 'from_name' to match EmailJS template
        from_email: '', // Use 'from_email' for the email field
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.from_name) newErrors.from_name = 'Required';
        if (!formData.from_email) newErrors.from_email = 'Required';
        if (!formData.subject) newErrors.subject = 'Required';
        if (!formData.message) newErrors.message = 'Required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            emailjs.send(
                'service_amliri4', // Your service ID
                'template_sa8pl1v', // Your template ID
                formData,
                'IkVWpG3-duPkeUcue' // Your user ID
            )
            .then((response) => {
                console.log('Email sent successfully:', response);
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ from_name: '', from_email: '', subject: '', message: '' });
                setErrors({});
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="from_name" // Correctly matches the EmailJS expectation
                        value={formData.from_name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Name"
                    />
                    {errors.from_name && <p className="text-red-500 text-xs italic">{errors.from_name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="from_email" // Correctly matches the EmailJS expectation
                        value={formData.from_email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                    />
                    {errors.from_email && <p className="text-red-500 text-xs italic">{errors.from_email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject" // Correctly matches the form data
                        value={formData.subject}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Subject"
                    />
                    {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Message"
                        rows="4"
                    />
                    {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div className="mt-10">
                <h3 className="text-xl font-bold">Our Location</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.56352163915074!2d73.1593273089769!3d33.65673833637352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea3616e402d1%3A0x783fc12637979889!2sHostel%20City%20Gull%20Block%20%2CBoys%20Hostel!5e0!3m2!1sen!2s!4v1729879867688!5m2!1sen!2s"
                        width="100%" 
                        height="250" 
                        style={{ border: 0 }} // Changed to an object
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" // Corrected to use camelCase
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
