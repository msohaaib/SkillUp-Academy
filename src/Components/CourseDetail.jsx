import { useParams } from 'react-router-dom';
import courses from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const course = courses.find(course => course.id === Number(id)); // Find the course by ID

  // If no course is found, display a 'Course not found' message
  if (!course) return <div>Course not found</div>;

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between">
      {/* Course Image */}
      <div className="flex-shrink-0">
        <img 
          className='w-full h-64 object-cover rounded-lg' // Updated classes for consistent height
          src={course.image} 
          alt={course.title} 
        />
      </div>

      {/* Course Details */}
      <div className="flex-grow md:ml-4">
        <h1 className="text-3xl font-bold">{course.title}</h1>

        {/* Instructor name and duration */}
        {course.instructor && (
          <p>
            Instructor: {course.instructor.name}
          </p>
        )}
        <p>Duration: {course.duration}</p>

        {/* Course Description */}
        {course.description && (
          <div className="mt-4">
            <p>{course.description}</p>
          </div>
        )}

        {/* Course Syllabus */}
        {course.syllabus && course.syllabus.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mt-4">Course Syllabus:</h2>
            <ul className="list-disc list-inside">
              {course.syllabus.map((syllabus, index) => (
                <li key={index}>{syllabus}</li>
              ))}
            </ul>
          </>
        )}

        {/* Course Features */}
        {course.features && course.features.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mt-4">Key Features:</h2>
            <ul className="list-disc list-inside">
              {course.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {/* Testimonials */}
        {course.testimonials && course.testimonials.length > 0 && (
          <>
            <h3 className="font-semibold mt-4">Testimonials:</h3>
            {course.testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="border-l-4 border-blue-500 pl-4 italic mt-2"
              >
                &quot;{testimonial.text}&quot; -{" "}
                <span className="font-semibold">{testimonial.author}</span>
              </blockquote>
            ))}
          </>
        )}

        {/* Enroll Button */}
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
