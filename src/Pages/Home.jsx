import HeroImage from '../assets/Hero-image.png';
import GraphicDesigning from '../assets/FeatureCourses/graphicDesigning.jpg';
import videoEditing from '../assets/FeatureCourses/videoEditing.jpg';
import seo from '../assets/FeatureCourses/seo.jpg';
import machineLearning from '../assets/FeatureCourses/machineLearning.jpg';
import cyberSecurity from '../assets/FeatureCourses/cyberSecurity.png';
import digitalMarketing from '../assets/FeatureCourses/DigitalMarketing.jpg';
import testimonial01 from '../assets/Testimonials/testimonial01.jpg';
import testimonial02 from '../assets/Testimonials/testimonial02.jpg';
import testimonial03 from '../assets/Testimonials/testimonial03.jpg';
import testimonial04 from '../assets/Testimonials/testimonial04.jpg';
import testimonial05 from '../assets/Testimonials/testimonial05.jpg';
import { Link } from 'react-router-dom';

const featureCourses = [
  {
    id: 1,
    image: GraphicDesigning,
    title: "Graphic Designing",
    description: "Unleash your creativity! Learn graphic design fundamentals, tools, and techniques to create stunning visuals and captivating layouts.",
  },
  {
    id: 2,
    image: videoEditing,
    title: "Video Editing",
    description: "Learn essential video editing skills to create captivating videos, enhance storytelling, and impress your audience. Join us today!",
  },
  {
    id: 3,
    image: seo,
    title: "SEO",
    description: "Boost your online presence! Learn SEO strategies and techniques to improve website rankings and drive organic traffic effectively.",
  },
  {
    id: 4,
    image: machineLearning,
    title: "Machine Learning",
    description: "Master machine learning concepts and techniques to analyze data, build predictive models, and create intelligent solutions. Join today!",
  },
  {
    id: 5,
    image: cyberSecurity,
    title: "Cyber Security",
    description: "Protect your digital world! Learn cybersecurity fundamentals, threat detection, and defense strategies to safeguard systems and data.",
  },
  {
    id: 6,
    image: digitalMarketing,
    title: "Digital Marketing",
    description: "Amplify your brand! Learn digital marketing strategies, tools, and techniques to drive engagement and grow your online presence.",
  }
];

const testimonial = [
  {
    id: 1,
    image: testimonial01,
    name: "Sara J.",
    comment: "The courses here have truly transformed my career! The lessons are practical, easy to follow, and engaging, allowing me to apply the knowledge effectively in real situations."
  },
  {
    id: 2,
    image: testimonial02,
    name: "David M.",
    comment: "I never thought I could learn so much in such a short time. The course structure is excellent, and I highly recommend these courses to anyone seeking to enhance their skills."
  },
  {
    id: 3,
    image: testimonial03,
    name: "Emily R.",
    comment: "The instructors are incredibly knowledgeable, and the interactive content made learning both fun and effective. I feel more confident in my abilities thanks to their guidance and support."
  },
  {
    id: 4,
    image: testimonial04,
    name: "Sophia K.",
    comment: "Thanks to these courses, I gained the skills and confidence I needed to excel in my new role. The practical applications and engaging lessons have made a significant impact."
  },
  {
    id: 5,
    image: testimonial05,
    name: "John P.",
    comment: "I was able to upskill quickly and efficiently with this platform. It’s easy to navigate, and the quality of content is top-notch, making the learning experience exceptional."
  },
];

const Home = () => {

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col-reverse sm:flex-row items-center bg-gray-100">
        <div className="flex flex-col p-4 sm:p-8 w-full sm:w-3/5 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Transform Your Skills with Our Courses
          </h1>
          <p className="mb-4">
            Learn at your own pace and enhance your career!
          </p>
          <div>
            <Link 
              to="/SignUp"
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
              Join Us Today
            </Link>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end p-4 w-full sm:w-2/5">
          <img 
            className="w-full h-auto"
            src={HeroImage} 
            alt="Online Courses" 
          />
        </div>
      </div>
      {/* Hero Section End */}

      {/* Feature Courses Section */}
      <div className='p-4 sm:p-8 mt-16'>
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center">Explore Our Top-Rated Courses</h1>
        <p className='mb-4 text-center'>Discover popular courses that empower you to excel in your professional journey.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10 p-4'>
        {featureCourses.map((data) => (
          <Link
            to="/CourseDetail"
            key={data.id} 
            className="flex flex-col items-center shadow-md rounded-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:scale-105"
          >
            <img src={data.image} alt={data.title} className='w-full h-48 object-cover' />
            <div className="text-center p-4">
              <h2 className='font-semibold text-lg mb-2'>{data.title}</h2>
              <p className='text-sm text-gray-700'>{data.description}</p>
              <div className='mt-6 mb-2'>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Feature Courses Section End */}

{/* Testimonial Section */}
<div className='sm:p-8 mt-16'>
  <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-gray-800">Success Stories</h1>
  <p className='mb-8 text-center text-gray-700'>Discover how our courses helped professionals achieve their goals and grow their skills.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
  {testimonial.map((data) => (
    <div key={data.id} className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img 
        src={data.image} 
        alt={data.name} 
        className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-emerald-500"
      />
      <h3 className="text-lg font-semibold mb-2 text-emerald-700">{data.name}</h3>
      <p className="text-md text-gray-600">{data.comment}</p>
    </div>
  ))}
</div>
{/* Testimonial Section End */}

      {/* Testimonial Section End */}
    </div>
  );
};

export default Home;
