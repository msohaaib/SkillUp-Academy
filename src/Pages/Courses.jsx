import { useState } from 'react';
import courses from '../data/courses';
import { Link } from 'react-router-dom';

const Courses = () => {
  const coursesPerPage = 10; // Number of courses to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last course to display
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Calculate total pages
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  // Handler to go to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handler to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className='p-4 sm:p-8 mt-16 bg-gray-100'>
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center">Join Us on a Journey of Learning</h1>
        <p className='mb-4 text-center'>Elevate your knowledge and skills with our diverse courses. From beginners to advanced learners, there&apos;s something for everyone. Join us and start your journey toward success!</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10 p-4'>
        {currentCourses.map((data) => (
          <Link
            to="/SignUp"
            key={data.id} 
            className="flex flex-col items-center shadow-md rounded-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:scale-105"
          >
            <img src={data.image} alt={data.title} className='w-full h-48 object-cover' />
            <div className="text-center p-4">
              <h2 className='font-semibold text-lg mb-2'>{data.title}</h2>
              <p className='text-sm text-gray-700'>{data.description}</p>
              <div className='mt-6 mb-2'>
                <Link 
                  to="/SignUp"
                  className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
                  Enroll Now
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center my-4'>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1} 
          className='bg-gray-700 text-white px-4 py-2 rounded mx-2 hover:bg-gray-800'
        >
          Previous
        </button>
        <span className='flex items-center'>{`Page ${currentPage} of ${totalPages}`}</span>
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages} 
          className='bg-gray-700 text-white px-4 py-2 rounded mx-2 hover:bg-gray-800'
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Courses;
