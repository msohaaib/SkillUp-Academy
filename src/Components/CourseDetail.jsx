import { useParams } from 'react-router-dom';
import courses from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const course = courses.find(course => course.id === Number(id)); // Find the course by ID

  // If no course is found, display a 'Course not found' message
  if (!course) return <div>Course not found</div>;

  return (
    <div className="container mx-auto p-4">
      {/* Course Title */}
      <h1 className="text-3xl font-bold">{course.title}</h1>

      {/* Instructor name and duration */}
      {course.instructor && (
        <p>
          Instructor:{" "}
            {course.instructor.name}
        </p>
      )}
      <p>Duration: {course.duration}</p>

      {/* Course Description */}
      {course.description && (
        <div className="mt-4">
          <p>{course.description}</p>
        </div>
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

      {/* Prerequisites */}
      {course.prerequisites && course.prerequisites.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Prerequisites:</h3>
          <ul className="list-disc list-inside">
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
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

      {/* Course Modules */}
      {course.modules && course.modules.length > 0 && (
        <>
          <h3 className="font-semibold mt-4">Course Modules:</h3>
          <ul>
            {course.modules.map((module, index) => (
              <li key={index} className="mt-2">
                <strong>{module.title}</strong> - {module.description} (Duration:{" "}
                {module.duration})
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Enroll Button */}
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;
