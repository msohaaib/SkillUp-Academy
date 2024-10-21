import grphicDesign from '../assets/Courses/DigitalMarketing.jpg'
import videoEditing from '../assets/Courses/videoEditing.jpg'
import machineLearning from '../assets/Courses/machineLearning.jpg'
import seo from '../assets/Courses/seo.jpg'
import cyberSecurity from '../assets/Courses/cyberSecurity.png'
import digitalMarketing from '../assets/Courses/DigitalMarketing.jpg'
import pytthonProgramming from '../assets/Courses/PythonProgramming.jpeg'
import reactDevelopment from '../assets/Courses/ReactDevelopment.jpg'
import webDevelopment from '../assets/Courses/webDevelopment.jpg'
import contentWriting from '../assets/Courses/ContentWritting.jpeg'
import socialMediaMarketing from '../assets/Courses/SocialMediaMarketing.jpg'
import wordpressDevelopment from '../assets/Courses/WordpressDevelopment.jpeg'
import photography from '../assets/Courses/Photography.jpeg'
import illustration from '../assets/Courses/Illustration.jpeg'
import mobileAppDevelopment from '../assets/Courses/mobileAppDevelopment.jpg'
import dataScience from '../assets/Courses/dataScience.jpeg'
import excelMastery from '../assets/Courses/excelMastery.jpeg'
import blockChainBasics from '../assets/Courses/blockChainBasics.png'
import copyWritting from '../assets/Courses/copyWritting.jpeg'
import artificialIntelligence from '../assets/Courses/artificialIntelligence.jpeg'
const courses = [
    {
        "id": 1,
        "title": "Graphic Designing",
        "description": "Learn the essentials of graphic design to create visual content using tools like Photoshop and Illustrator.",
        "category": "Design",
        "duration": "4 weeks",
        "instructor": "John Doe",
        "image" : grphicDesign
    },
    {
        "id": 2,
        "title": "Video Editing",
        "description": "Master video editing software like Adobe Premiere and Final Cut Pro to craft stunning video content.",
        "category": "Media",
        "duration": "6 weeks",
        "instructor": "Jane Smith",
        "image" : videoEditing
    },
    {
        "id": 3,
        "title": "SEO",
        "description": "Boost your online presence with search engine optimization strategies to increase website traffic.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": "Emily Clark",
        "image" : seo
    },
    {
        "id": 4,
        "title": "Machine Learning",
        "description": "Dive into the world of AI and learn how to create intelligent algorithms for predictions and data analysis.",
        "category": "Tech",
        "duration": "8 weeks",
        "instructor": "Michael Green",
        "image" : machineLearning
    },
    {
        "id": 5,
        "title": "Cyber Security",
        "description": "Learn the foundations of cybersecurity and how to protect systems from vulnerabilities and threats.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "Sophia Brown",
        "image" : cyberSecurity
    },
    {
        "id": 6,
        "title": "Digital Marketing",
        "description": "Learn how to create and manage online marketing campaigns to grow your brand's presence.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": "David White",
        "image" : digitalMarketing
    },
    {
        "id": 7,
        "title": "Python Programming",
        "description": "Master Python programming, one of the most popular languages in tech for web development and data analysis.",
        "category": "Programming",
        "duration": "7 weeks",
        "instructor": "Sarah Johnson",
        "image" : pytthonProgramming
    },
    {
        "id": 8,
        "title": "React Development",
        "description": "Learn to build dynamic and modern web applications using the React JavaScript library.",
        "category": "Programming",
        "duration": "6 weeks",
        "instructor": "Brian Lee",
        "image" : reactDevelopment
    },
    {
        "id": 9,
        "title": "Web Development",
        "description": "Learn the essential skills to build responsive websites with HTML, CSS, and JavaScript.",
        "category": "Tech",
        "duration": "10 weeks",
        "instructor": "Anna Davis",
        "image" : webDevelopment
    },
    {
        "id": 10,
        "title": "Content Writing",
        "description": "Hone your writing skills for web and social media to engage and grow your audience.",
        "category": "Marketing",
        "duration": "3 weeks",
        "instructor": "William Harris",
        "image" : contentWriting
    },
    {
        "id": 11,
        "title": "Social Media Marketing",
        "description": "Learn to grow your brand's online presence through effective social media strategies.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": "Olivia Martin",
        "image" : socialMediaMarketing
    },
    {
        "id": 12,
        "title": "WordPress Development",
        "description": "Master WordPress to build customizable, scalable websites for your clients.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "Daniel Young",
        "image" : wordpressDevelopment
    },
    {
        "id": 13,
        "title": "Photography",
        "description": "Learn the basics of photography, from composition to camera settings, and start taking great pictures.",
        "category": "Media",
        "duration": "4 weeks",
        "instructor": "Jessica Anderson",
        "image" : photography
    },
    {
        "id": 14,
        "title": "Illustration",
        "description": "Learn to draw and illustrate from scratch using tools like Adobe Illustrator and Procreate.",
        "category": "Design",
        "duration": "5 weeks",
        "instructor": "Ethan Wilson",
        "image" : illustration
    },
    {
        "id": 15,
        "title": "Mobile App Development",
        "description": "Learn to build Android and iOS apps using tools like React Native and Flutter.",
        "category": "Programming",
        "duration": "8 weeks",
        "instructor": "Henry Adams",
        "image" : mobileAppDevelopment
    },
    {
        "id": 16,
        "title": "Data Science",
        "description": "Master data science techniques, including data visualization and predictive modeling.",
        "category": "Tech",
        "duration": "9 weeks",
        "instructor": "Sophia Thompson",
        "image" : dataScience
    },
    {
        "id": 17,
        "title": "Excel Mastery",
        "description": "Learn to create advanced Excel formulas, pivot tables, and data analysis reports.",
        "category": "Business",
        "duration": "4 weeks",
        "instructor": "James Allen",
        "image" : excelMastery
    },
    {
        "id": 18,
        "title": "Blockchain Basics",
        "description": "Discover how blockchain technology works and its applications in various industries.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": "Mia Collins",
        "image" : blockChainBasics
    },
    {
        "id": 19,
        "title": "Copywriting",
        "description": "Learn the art of persuasive writing to create compelling copy for ads, emails, and websites.",
        "category": "Marketing",
        "duration": "4 weeks",
        "instructor": "Lucas Walker",
        "image" : copyWritting
    },
    {
        "id": 20,
        "title": "Artificial Intelligence",
        "description": "Explore the fundamentals of AI and machine learning algorithms.",
        "category": "Tech",
        "duration": "10 weeks",
        "instructor": "Noah Roberts",
        "image" : artificialIntelligence
    },
    {
        "id": 21,
        "title": "Public Speaking",
        "description": "Gain confidence and learn techniques to deliver powerful public speeches.",
        "category": "Personal Development",
        "duration": "3 weeks",
        "instructor": "Isabella Turner",
        "image" : ""
    },
    {
        "id": 22,
        "title": "3D Animation",
        "description": "Master the art of 3D animation using industry-standard software like Blender and Maya.",
        "category": "Design",
        "duration": "8 weeks",
        "instructor": "Jack Phillips",
        "image" : ""
    },
    {
        "id": 23,
        "title": "Business Analytics",
        "description": "Learn how to analyze business data and make strategic decisions based on insights.",
        "category": "Business",
        "duration": "6 weeks",
        "instructor": "Ava Campbell",
        "image" : ""
    },
    {
        "id": 24,
        "title": "Game Development",
        "description": "Learn how to create engaging 2D and 3D games using Unity and Unreal Engine.",
        "category": "Programming",
        "duration": "12 weeks",
        "instructor": "Liam Carter",
        "image" : ""
    },
    {
        "id": 25,
        "title": "Entrepreneurship",
        "description": "Learn how to start and grow your own business, from ideation to scaling.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": "Ella Hughes",
        "image" : ""
    },
    {
        "id": 26,
        "title": "Cloud Computing",
        "description": "Master cloud platforms like AWS and Azure to deploy scalable applications.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": "Elijah Flores",
        "image" : ""
    },
    {
        "id": 27,
        "title": "Financial Modeling",
        "description": "Learn how to create financial models for business forecasting and investment analysis.",
        "category": "Finance",
        "duration": "6 weeks",
        "instructor": "Grace Murphy",
        "image" : ""
    },
    {
        "id": 28,
        "title": "Project Management",
        "description": "Develop the skills to manage projects effectively using Agile, Scrum, and other frameworks.",
        "category": "Business",
        "duration": "6 weeks",
        "instructor": "Benjamin Kelly",
        "image" : ""
    },
    {
        "id": 29,
        "title": "Interior Design",
        "description": "Learn the principles of interior design and create stunning spaces.",
        "category": "Design",
        "duration": "8 weeks",
        "instructor": "Charlotte Rivera",
        "image" : ""
    },
    {
        "id": 30,
        "title": "UI/UX Design",
        "description": "Master the art of user interface and user experience design to build intuitive applications.",
        "category": "Design",
        "duration": "6 weeks",
        "instructor": "Mason Edwards",
        "image" : ""
    },
    {
        "id": 31,
        "title": "Software Testing",
        "description": "Learn software testing techniques including unit testing, integration testing, and test automation.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "Harper Simmons",
        "image" : ""
    },
    {
        "id": 32,
        "title": "Database Management",
        "description": "Understand relational databases, SQL, and database design to manage and query large data sets.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": "Evelyn Russell",
        "image" : ""
    },
    {
        "id": 33,
        "title": "Augmented Reality Development",
        "description": "Learn how to create augmented reality applications for mobile devices using AR frameworks.",
        "category": "Programming",
        "duration": "8 weeks",
        "instructor": "Ethan Peterson",
        "image" : ""
    },
    {
        "id": 34,
        "title": "HR Management",
        "description": "Master the skills of human resource management, recruitment, and employee training.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": "Madison Cook",
        "image" : ""
    },
    {
        "id": 35,
        "title": "Supply Chain Management",
        "description": "Learn the principles of supply chain management, from logistics to inventory control.",
        "category": "Business",
        "duration": "6 weeks",
        "instructor": "Samuel Bell",
        "image" : ""
    },
    {
        "id": 36,
        "title": "Leadership and Team Building",
        "description": "Learn how to lead and build effective teams with communication and leadership techniques.",
        "category": "Business",
        "duration": "4 weeks",
        "instructor": "Amelia James",
        "image" : ""
    },
    {
        "id": 37,
        "title": "E-Commerce Development",
        "description": "Learn how to build, manage, and scale online stores using platforms like Shopify and WooCommerce.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "Logan Martinez",
        "image" : ""
    },
    {
        "id": 38,
        "title": "Customer Relationship Management",
        "description": "Understand CRM tools and techniques to improve customer satisfaction and retention.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": "Lily Taylor",
        "image" : ""
    },
    {
        "id": 39,
        "title": "Networking Fundamentals",
        "description": "Learn networking basics, including TCP/IP, routers, switches, and network security.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "Mason Walker",
        "image" : ""
    },
    {
        "id": 40,
        "title": "Financial Accounting",
        "description": "Learn financial accounting principles and how to interpret financial statements.",
        "category": "Finance",
        "duration": "5 weeks",
        "instructor": "Avery Young",
        "image" : ""
    },
    {
        "id": 41,
        "title": "Virtual Reality Development",
        "description": "Learn to create immersive virtual reality experiences using VR frameworks and tools.",
        "category": "Programming",
        "duration": "9 weeks",
        "instructor": "Ella Allen",
        "image" : ""
    },
    {
        "id": 42,
        "title": "DevOps Essentials",
        "description": "Master DevOps tools and practices to streamline development and operations workflows.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": "Jackson Scott",
        "image" : ""
    },
    {
        "id": 43,
        "title": "Ethical Hacking",
        "description": "Learn ethical hacking techniques to identify and fix vulnerabilities in systems and networks.",
        "category": "Tech",
        "duration": "8 weeks",
        "instructor": "Layla Lewis",
        "image" : ""
    },
    {
        "id": 44,
        "title": "Public Relations",
        "description": "Understand the essentials of PR and how to manage a brand's public image.",
        "category": "Marketing",
        "duration": "4 weeks",
        "instructor": "Daniel Hall",
        "image" : ""
    },
    {
        "id": 45,
        "title": "Email Marketing",
        "description": "Learn how to create successful email marketing campaigns that engage and convert.",
        "category": "Marketing",
        "duration": "3 weeks",
        "instructor": "Scarlett Rivera",
        "image" : ""
    },
    {
        "id": 46,
        "title": "Data Visualization",
        "description": "Learn to present data visually using tools like Tableau, Power BI, and D3.js.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "William Gonzalez",
        "image" : ""
    },
    {
        "id": 47,
        "title": "Mobile Game Development",
        "description": "Learn how to develop mobile games for Android and iOS platforms using game engines like Unity.",
        "category": "Programming",
        "duration": "10 weeks",
        "instructor": "Grace Nelson",
        "image" : ""
    },
    {
        "id": 48,
        "title": "Branding Essentials",
        "description": "Learn how to build and manage a strong brand identity that resonates with your audience.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": "Carter King",
        "image" : ""
    },
    {
        "id": 49,
        "title": "Customer Service Excellence",
        "description": "Learn techniques to provide outstanding customer service and build long-lasting relationships.",
        "category": "Business",
        "duration": "3 weeks",
        "instructor": "Luna Wright",
        "image" : ""
    },
    {
        "id": 50,
        "title": "Data Engineering",
        "description": "Master the skills required to design, build, and manage scalable data systems.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": "James Adams",
        "image" : ""
    },
    {
        "id": 51,
        "title": "Natural Language Processing",
        "description": "Explore NLP techniques to analyze and process human language using machine learning.",
        "category": "Tech",
        "duration": "8 weeks",
        "instructor": "Addison Clark",
        "image" : ""
    },
    {
        "id": 52,
        "title": "Data Mining",
        "description": "Learn how to extract valuable insights from large datasets using data mining techniques.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "Joshua Baker",
        "image" : ""
    },
    {
        "id": 53,
        "title": "Game UI/UX Design",
        "description": "Learn how to design user interfaces and experiences specifically for video games.",
        "category": "Design",
        "duration": "6 weeks",
        "instructor": "Penelope Hill",
        "image" : ""
    },
    {
        "id": 54,
        "title": "IT Support Fundamentals",
        "description": "Learn the basics of IT support, troubleshooting, and help desk operations.",
        "category": "Tech",
        "duration": "4 weeks",
        "instructor": "Benjamin Wood",
        "image" : ""
    },
    {
        "id": 55,
        "title": "Advanced Excel",
        "description": "Go beyond the basics and learn advanced Excel techniques like macros, VBA, and data automation.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": "Lily Cox",
        "image" : ""
    },
    {
        "id": 56,
        "title": "Google Ads Mastery",
        "description": "Learn to create and optimize Google Ads campaigns for maximum ROI.",
        "category": "Marketing",
        "duration": "4 weeks",
        "instructor": "Jacob Diaz",
        "image" : ""
    },
    {
        "id": 57,
        "title": "Design Thinking",
        "description": "Learn the principles of design thinking to solve complex problems with innovative solutions.",
        "category": "Design",
        "duration": "5 weeks",
        "instructor": "Ella Gray",
        "image" : ""
    },
    {
        "id": 58,
        "title": "Agile Software Development",
        "description": "Learn Agile methodologies to manage software projects and deliver high-quality products.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": "Samuel Rogers",
        "image" : ""
    },
    {
        "id": 59,
        "title": "Microsoft Azure Essentials",
        "description": "Learn to use Microsoft Azure cloud services to build and manage applications in the cloud.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": "Avery Torres",
        "image" : ""
    },
    {
        "id": 60,
        "title": "Event Planning and Management",
        "description": "Learn how to plan, organize, and manage successful events, from small gatherings to large conferences.",
        "category": "Business",
        "duration": "4 weeks",
        "instructor": "Mia Bennett",
        "image" : ""
    }
]

export default courses;