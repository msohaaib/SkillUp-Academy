import { useState } from 'react';  
import courses from '../data/courses';  
import { Link } from 'react-router-dom';  

const Courses = () => {  
  const coursesPerPage = 10;  
  const [currentPage, setCurrentPage] = useState(1);  
  const [searchTerm, setSearchTerm] = useState('');  
  const [filterCategory, setFilterCategory] = useState('All');  
  const [sortOption, setSortOption] = useState('title');  

  const handleSearch = (e) => {  
    setSearchTerm(e.target.value.toLowerCase());  
    setCurrentPage(1);  
  };  

  const handleFilterChange = (e) => {  
    setFilterCategory(e.target.value);  
    setCurrentPage(1);  
  };  

  const handleSortChange = (e) => {  
    setSortOption(e.target.value);  
    setCurrentPage(1);  
  };  

  const filteredCourses = courses  
    .filter((course) =>  
      course.title.toLowerCase().includes(searchTerm) ||  
      course.description.toLowerCase().includes(searchTerm)  
    )  
    .filter((course) => filterCategory === 'All' || course.category === filterCategory)  
    .sort((a, b) => {  
      switch (sortOption) {  
        case 'title':  
          return a.title.localeCompare(b.title);  
        case 'popularityAsc':  
          return a.popularity - b.popularity;  
        case 'popularityDesc':  
          return b.popularity - a.popularity;  
        case 'priceAsc':  
          return a.price - b.price;  
        case 'priceDesc':  
          return b.price - a.price;  
        default:  
          return 0;  
      }  
    });  

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);  
  const indexOfLastCourse = currentPage * coursesPerPage;  
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;  
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);  

  const nextPage = () => {  
    if (currentPage < totalPages) {  
      setCurrentPage(currentPage + 1);  
    }  
  };  

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

        <input  
          type="text"  
          placeholder="Search courses..."  
          className="w-full p-2 rounded-md mb-4"  
          value={searchTerm}  
          onChange={handleSearch}  
        />  

        <select  
          value={filterCategory}  
          onChange={handleFilterChange}  
          className="w-full p-2 rounded-md mb-4"  
        >  
          <option value="All">All Categories</option>  
          <option value="Design">Design</option>  
          <option value="Media">Media</option>  
          <option value="Marketing">Marketing</option>  
          <option value="Tech">Tech</option>  
          <option value="Business">Business</option>  
          <option value="Programming">Programming</option>  
          <option value="Personal Development">Personal Development</option>  
          <option value="Finance">Finance</option>  
        </select>  

        <select  
          value={sortOption}  
          onChange={handleSortChange}  
          className="w-full p-2 rounded-md mb-4"  
        >  
          <option value="title">Sort by Title</option>  
          <option value="popularityAsc">Sort by Popularity (Low to High)</option>  
          <option value="popularityDesc">Sort by Popularity (High to Low)</option>  
          <option value="priceAsc">Sort by Price (Low to High)</option>  
          <option value="priceDesc">Sort by Price (High to Low)</option>  
        </select>  
      </div>  

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10 p-4'>  
        {currentCourses.map((data) => (  
          <Link  
            to={`/course/${data.id}`} // Updated path to match route defined in App.js  
            key={data.id}   
            className="flex flex-col items-center shadow-md rounded-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:scale-105"  
          >  
            <img src={data.image} alt={data.title} className='w-full h-48 object-cover' />  
            <div className="text-center p-4">  
              <h2 className='font-semibold text-lg mb-2'>{data.title}</h2>  
              <p className='text-sm text-gray-700'>{data.description}</p>  
              <div className='flex flex-row justify-between py-4 text-gray-700'>  
                <p><span className='font-bold'>$ </span>{data.price}</p>  
                <p>Rating: {data.popularity}</p>  
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
};  

export default Courses;