import grphicDesign from '../assets/Courses/DigitalMarketing.jpg'
import videoEditing from '../assets/Courses/videoEditing.jpg'
import machineLearning from '../assets/Courses/machineLearning.jpg'
import seo from '../assets/Courses/seo.jpg'
import cyberSecurity from '../assets/Courses/cyberSecurity.png'
import digitalMarketing from '../assets/Courses/DigitalMarketing.jpg'
import pythonProgramming from '../assets/Courses/PythonProgramming.jpeg'
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
import publicSpeaking from '../assets/Courses/publicSpeaking.jpeg'
import d3Animation from '../assets/Courses/3dAnimation.jpeg'
import businessAnalytics from '../assets/Courses/businessAnalytics.jpeg'
import gameDevelopment from '../assets/Courses/gameDevelopment.jpeg'
import entrepreneurship from '../assets/Courses/entreprenuership.jpeg'
import cloudComputing from '../assets/Courses/cloudComputing.jpeg'
import financialModeling from '../assets/Courses/finincialModeling.jpeg'
import projectManagement from '../assets/Courses/projectManagement.jpeg'
import interiorDesigning from '../assets/Courses/interiorDesigning.jpeg'
import uiuxDesign from '../assets/Courses/uiuxDesign.jpeg'
import softwareTesting from '../assets/Courses/softwareTesting.jpeg'
import databaseManagement from '../assets/Courses/databaseManagement.jpeg'
import augmentedReality from '../assets/Courses/augmentedReality.jpeg'
import hrManagement from '../assets/Courses/hrManagement.png'
import supplyManagement from '../assets/Courses/supplyManagement.jpeg'
import leadershipAndTeam from '../assets/Courses/leadershipAndTeam.jpeg'
import eCommerceDevelopment from '../assets/Courses/eCommerceDevelopment.jpeg'
import customerRelationManagement from '../assets/Courses/customerRelationManagement.jpeg'
import networkFundamentals from '../assets/Courses/networkFundamentals.png'
import financialAccounting from '../assets/Courses/financialAccounting.png'
import virtualReality from '../assets/Courses/virtualReality d.jpg'
import devopsEssentials from '../assets/Courses/devopsEssentials.jpeg'
import ethicalHacking from '../assets/Courses/ethicalHacking.jpeg'
import publicRelations from '../assets/Courses/publicRelations.png'
import emailMarketing from '../assets/Courses/emailMarketing.jpeg'
import dataVisualization from '../assets/Courses/dataVisualization.jpeg'
import mobileGameDevelopment from '../assets/Courses/mobiilegameDevelopment.jpeg'
import brandingEssentials from '../assets/Courses/bramdingEssentials.jpeg'
import customerServiceExcellence from '../assets/Courses/customerserviceExcellence.jpeg'
import dataEngineering from '../assets/Courses/dataEngineering.jpeg'
import naturalLanguageProcessing from '../assets/Courses/naturallanguageProcessing.jpeg'
import dataMining from '../assets/Courses/dataMining.jpeg'
import gameUiUxDesign from '../assets/Courses/gameuiuxDesign.jpeg'
import itSupportFundamentals from '../assets/Courses/itsupportFundamentals.png'
import advancedExcel from '../assets/Courses/advancedExcel.jpeg'
import googleAdsMastery from '../assets/Courses/googleaddMastery.jpeg'
import designThinking from '../assets/Courses/desingThinking.jpeg'
import agileSoftwareDevelopment from '../assets/Courses/agilesoftwareDevelopment.jpeg'
import microsoftAzureEssentials from '../assets/Courses/microsoftAzureEssentials.jpeg'
import eventPlanningManagement from '../assets/Courses/eventPlanningManagement.jpeg'
import timeManagement from '../assets/Courses/timeManagement.jpeg';
import leadershipSkills from '../assets/Courses/leadershipSkills.png';
import emotionalIntelligence from '../assets/Courses/emotionalIntelligence.jpeg';
import stressManagement from '../assets/Courses/stressManagement.jpeg';
import communicationSkills from '../assets/Courses/communicationSkills.jpeg';


const courses = [
    {
        "id": 1,
        "title": "Graphic Designing",
        "description": "Learn the essentials of graphic design to create visual content using tools like Photoshop and Illustrator.",
        "category": "Design",
        "duration": "4 weeks",
        "instructor": {
            name : "John Doe",
        },
        "image": grphicDesign,
        features: [  
            "Project-based learning",  
            "Code reviews",  
        ],
        testimonials: [  
            { text: "Best course on React!", author: "Sophia" },  
            { text: "I feel confident to build apps now.", author: "Ethan" },  
        ], 
        "syllabus": [
        "Week 1: Introduction to Graphic Design Principles",
        "Week 2: Working with Photoshop",
        "Week 3: Working with Illustrator",
        "Week 4: Final Project and Portfolio Development"
        ],
        "popularity": 4.5,
        "price": 99
    },
    {
        "id": 2,
        "title": "Video Editing",
        "description": "Master video editing software like Adobe Premiere and Final Cut Pro to craft stunning video content.",
        "category": "Media",
        "duration": "6 weeks",
        "instructor": {
            "name": "Jane Smith"
        },
        "image": videoEditing,
        "features": [
            "Hands-on projects",
            "Editing techniques",
            "Creative storytelling"
        ],
        "testimonials": [
            { "text": "Transformed my editing skills!", "author": "Liam" },
            { "text": "A must for aspiring editors.", "author": "Olivia" }
        ],
        "syllabus": [
            "Week 1: Introduction to Video Editing Software",
            "Week 2: Basic Editing Techniques",
            "Week 3: Advanced Editing Techniques",
            "Week 4: Color Correction and Grading",
            "Week 5: Audio Editing and Mixing",
            "Week 6: Final Project and Presentation"
        ],
        "popularity": 4.8,
        "price": 149
    },
    {
        "id": 3,
        "title": "SEO",
        "description": "Boost your online presence with search engine optimization strategies to increase website traffic.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": {
            "name": "Emily Clark"
        },
        "image": seo,
        "features": [
            "Keyword research",
            "On-page and off-page SEO",
            "Real-world case studies"
        ],
        "testimonials": [
            { "text": "Great insights into SEO basics!", "author": "Ava" },
            { "text": "Helped my website rank higher.", "author": "Mason" }
        ],
        "syllabus": [
            "Week 1: Introduction to SEO and Keyword Research",
            "Week 2: On-Page SEO Techniques",
            "Week 3: Off-Page SEO Strategies",
            "Week 4: Technical SEO",
            "Week 5: Real-World Case Studies and SEO Tools"
        ],
        "popularity": 4.2,
        "price": 129
    },
    {
        "id": 4,
        "title": "Machine Learning",
        "description": "Dive into the world of AI and learn how to create intelligent algorithms for predictions and data analysis.",
        "category": "Tech",
        "duration": "8 weeks",
        "instructor": {
            "name": "Michael Green"
        },
        "image": machineLearning,
        "features": [
            "Hands-on projects",
            "Data analysis techniques",
            "Real-world applications"
        ],
        "testimonials": [
            { "text": "Perfect introduction to AI!", "author": "Noah" },
            { "text": "Gave me confidence to work with ML models.", "author": "Emma" }
        ],
        "syllabus": [
            "Week 1: Introduction to Machine Learning Concepts",
            "Week 2: Supervised Learning Techniques",
            "Week 3: Unsupervised Learning Techniques",
            "Week 4: Neural Networks Basics",
            "Week 5: Model Evaluation and Validation",
            "Week 6: Feature Engineering",
            "Week 7: Real-World Applications of ML",
            "Week 8: Final Project and Model Deployment"
        ],
        "popularity": 4.7,
        "price": 199
    },   
    {
        "id": 5,
        "title": "Cyber Security",
        "description": "Learn the foundations of cybersecurity and how to protect systems from vulnerabilities and threats.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": {
            "name": "Sophia Brown"
        },
        "image": cyberSecurity,
        "features": [
            "Risk assessment techniques",
            "Network security fundamentals",
            "Hands-on labs"
        ],
        "testimonials": [
            { "text": "Great intro to cybersecurity!", "author": "Lily" },
            { "text": "Helped me understand network protection.", "author": "James" }
        ],
        "syllabus": [
            "Week 1: Introduction to Cybersecurity Principles",
            "Week 2: Understanding Cyber Threats and Vulnerabilities",
            "Week 3: Network Security Fundamentals",
            "Week 4: Risk Assessment Techniques",
            "Week 5: Hands-On Labs for Security Tools",
            "Week 6: Final Assessment and Review"
        ],
        "popularity": 4.3,
        "price": 159
    },
    {
        "id": 6,
        "title": "Digital Marketing",
        "description": "Learn how to create and manage online marketing campaigns to grow your brand's presence.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": {
            "name": "David White"
        },
        "image": digitalMarketing,
        "features": [
            "Social media strategies",
            "SEO and content marketing",
            "Campaign analytics"
        ],
        "testimonials": [
            { "text": "Transformed my approach to marketing.", "author": "Isabella" },
            { "text": "Great insights into digital strategies!", "author": "Lucas" }
        ],
        "syllabus": [
            "Week 1: Introduction to Digital Marketing Concepts",
            "Week 2: Social Media Marketing Strategies",
            "Week 3: SEO and Content Marketing Integration",
            "Week 4: Email Marketing Campaigns",
            "Week 5: Campaign Analytics and Performance Metrics"
        ],
        "popularity": 4.4,
        "price": 99
    },    
    {
        "id": 7,
        "title": "Python Programming",
        "description": "Master Python programming, one of the most popular languages in tech for web development and data analysis.",
        "category": "Programming",
        "duration": "7 weeks",
        "instructor": {
            "name": "Sarah Johnson"
        },
        "image": pythonProgramming,
        "features": [
            "Beginner to advanced topics",
            "Data analysis and web development",
            "Real-world projects"
        ],
        "testimonials": [
            { "text": "Best Python course out there!", "author": "Henry" },
            { "text": "Perfect for data science beginners.", "author": "Amelia" }
        ],
        "syllabus": [
            "Week 1: Introduction to Python and Setting Up Environment",
            "Week 2: Basic Data Types and Operators",
            "Week 3: Control Flow and Functions",
            "Week 4: Data Structures (Lists, Tuples, Dictionaries)",
            "Week 5: File Handling and Exception Management",
            "Week 6: Introduction to Libraries (NumPy, Pandas)",
            "Week 7: Final Project and Review"
        ],
        "popularity": 4.6,
        "price": 199
    },
    {
        "id": 8,
        "title": "React Development",
        "description": "Learn to build dynamic and modern web applications using the React JavaScript library.",
        "category": "Programming",
        "duration": "6 weeks",
        "instructor": {
            "name": "Brian Lee"
        },
        "image": reactDevelopment,
        "features": [
            "Component-based architecture",
            "State and lifecycle management",
            "Modern JavaScript concepts"
        ],
        "testimonials": [
            { "text": "React made easy and fun!", "author": "Emma" },
            { "text": "Now I can build real-world apps!", "author": "Jack" }
        ],
        "syllabus": [
            "Week 1: Introduction to React and JSX",
            "Week 2: Components and Props",
            "Week 3: State Management and Lifecycle Methods",
            "Week 4: Event Handling and Forms",
            "Week 5: Routing with React Router",
            "Week 6: Deployment and Best Practices"
        ],
        "popularity": 4.9,
        "price": 179
    },    
    {
        "id": 9,
        "title": "Web Development",
        "description": "Learn the essential skills to build responsive websites with HTML, CSS, and JavaScript.",
        "category": "Tech",
        "duration": "10 weeks",
        "instructor": {
        "name": "Anna Davis",
        "bio": "Anna is a senior web developer with 10+ years of experience building scalable web applications.",
        },
        "testimonials": [
            { "text": "Great course! Learned a lot about web development.","author": "Charlotte" },
            { "text": "The instructor explains everything clearly and concisely.", "author": "Daniel" }
        ],
        "syllabus": [
            "Week 1: Introduction to HTML, CSS, and JavaScript",
            "Week 2: Responsive Design with Flexbox and Grid",
            "Week 3: React Basics and Advanced Concepts",
            "Week 4: Node.js and Express for Back-end Development",
            "Week 5: Building RESTful APIs",
            "Week 6: Deploying Full-Stack Applications",
            "Week 7: Final Project and Review",
            "Week 8: Web Development Trends and Future Learning"
        ],
        "features": [
            "Hands-on projects to build real-world skills",
            "Expert guidance from experienced instructors",
            "Access to exclusive online resources and tools",
            "Interactive coding exercises and quizzes",
            "Networking opportunities with fellow learners",
            "Lifetime access to course materials",
            "Certificate of completion upon finishing the course"
        ],
        "image": webDevelopment,
        "popularity": 4.5,
        "price": 249
    },
    {
        "id": 10,
        "title": "Content Writing",
        "description": "Hone your writing skills for web and social media to engage and grow your audience.",
        "category": "Marketing",
        "duration": "3 weeks",
        "instructor": {
            "name": "William Harris"
        },
        "image": contentWriting,
        "features": [
            "SEO-friendly writing",
            "Audience engagement techniques",
            "Social media content strategy"
        ],
        "testimonials": [
            { "text": "Increased my content's reach significantly!", "author": "Charlotte" },
            { "text": "Perfect for aspiring content creators.", "author": "Daniel" }
        ],
        "syllabus": [
            "Week 1: Understanding Content Writing Basics",
            "Week 2: SEO-Friendly Writing Techniques",
            "Week 3: Engaging Your Audience",
            "Week 4: Crafting Content for Social Media",
            "Week 5: Editing and Proofreading Skills",
            "Week 6: Final Project and Feedback"
        ],
        "popularity": 4.1,
        "price": 79
    },
    {
        "id": 11,
        "title": "Social Media Marketing",
        "description": "Learn to grow your brand's online presence through effective social media strategies.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": {
            "name": "Olivia Martin"
        },
        "image": socialMediaMarketing,
        "features": [
            "Platform-specific strategies",
            "Content creation tips",
            "Engagement metrics"
        ],
        "testimonials": [
            { "text": "Helped me boost my brand's followers!", "author": "Sophia" },
            { "text": "Insightful tips for managing social media.", "author": "Michael" }
        ], "syllabus": [
            "Week 1: Introduction to Social Media Platforms",
            "Week 2: Creating Engaging Content",
            "Week 3: Building Your Brand's Voice",
            "Week 4: Analyzing Engagement Metrics",
            "Week 5: Developing a Social Media Strategy"
        ],
        "popularity": 4.3,
        "price": 119
    },
    {
        "id": 12,
        "title": "WordPress Development",
        "description": "Master WordPress to build customizable, scalable websites for your clients.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": {
            "name": "Daniel Young"
        },
        "image": wordpressDevelopment,
        "features": [
            "Theme and plugin development",
            "Customizable layouts",
            "SEO and performance optimization"
        ],
        "testimonials": [
            { "text": "Made WordPress easy to understand.", "author": "Ella" },
            { "text": "I can now build complete sites!", "author": "Jacob" }
        ],
        "syllabus": [
            "Week 1: Introduction to WordPress and Installation",
            "Week 2: Understanding Themes and Plugins",
            "Week 3: Customizing Layouts and SEO Basics",
            "Week 4: Performance Optimization Techniques",
            "Week 5: Creating and Managing Content",
            "Week 6: Final Project and Review"
        ],
        "popularity": 4.6,
        "price": 139
    },
    {
        "id": 13,
        "title": "Photography",
        "description": "Learn the basics of photography, from composition to camera settings, and start taking great pictures.",
        "category": "Media",
        "duration": "4 weeks",
        "instructor": {
            "name": "Jessica Anderson"
        },
        "image": photography,
        "features": [
            "Camera settings",
            "Lighting techniques",
            "Composition and framing"
        ],
        "testimonials": [
            { "text": "Improved my photo skills instantly!", "author": "Lucas" },
            { "text": "Great for beginners and pros alike.", "author": "Mia" }
        ],
        "syllabus": [
            "Week 1: Introduction to Photography Basics",
            "Week 2: Understanding Camera Settings",
            "Week 3: Lighting Techniques and Composition",
            "Week 4: Practical Photography Assignments",
            "Week 5: Editing and Post-Processing Techniques"
        ],
        "popularity": 4.5,
        "price": 89
    },
    {
        "id": 14,
        "title": "Illustration",
        "description": "Learn to draw and illustrate from scratch using tools like Adobe Illustrator and Procreate.",
        "category": "Design",
        "duration": "5 weeks",
        "instructor": {
            "name": "Ethan Wilson"
        },
        "image": illustration,
        "features": [
            "Digital drawing techniques",
            "Color theory and shading",
            "Character and concept design"
        ],
        "testimonials": [
            { "text": "Perfect for learning illustration basics!", "author": "Isabella" },
            { "text": "I can now create my own characters.", "author": "Liam" }
        ],
        "syllabus": [
            "Week 1: Introduction to Digital Illustration Tools",
            "Week 2: Basics of Drawing and Color Theory",
            "Week 3: Character Design Fundamentals",
            "Week 4: Concept Design and Shading Techniques",
            "Week 5: Final Project: Create Your Own Illustration"
        ],
        "popularity": 4.7,
        "price": 119
    },
    {
        "id": 15,
        "title": "Mobile App Development",
        "description": "Learn to build Android and iOS apps using tools like React Native and Flutter.",
        "category": "Programming",
        "duration": "8 weeks",
        "instructor": {
            "name": "Henry Adams"
        },
        "image": mobileAppDevelopment,
        "features": [
            "Cross-platform development",
            "UI/UX for mobile apps",
            "API integration"
        ],
        "testimonials": [
            { "text": "A great start for mobile development.", "author": "Ethan" },
            { "text": "I built my first app thanks to this!", "author": "Charlotte" }
        ],
        "syllabus": [
            "Week 1: Introduction to Mobile App Development",
            "Week 2: Setting Up the Development Environment",
            "Week 3: Cross-Platform Development with React Native",
            "Week 4: Building UI/UX for Mobile Apps",
            "Week 5: API Integration and Data Management",
            "Week 6: Testing and Debugging",
            "Week 7: Final Project: Build Your First App",
            "Week 8: Deployment and Best Practices"
        ],
        "popularity": 4.8,
        "price": 229
    },
    {
        "id": 16,
        "title": "Data Science",
        "description": "Master data science techniques, including data visualization and predictive modeling.",
        "category": "Tech",
        "duration": "9 weeks",
        "instructor": {
            "name": "Sophia Thompson"
        },
        "image": dataScience,
        "features": [
            "Data visualization with Python",
            "Predictive modeling",
            "Data wrangling and preprocessing"
        ],
        "testimonials": [
            { "text": "Great intro to data science!", "author": "Oliver" },
            { "text": "The predictive modeling was amazing.", "author": "Ava" }
        ],
        "syllabus": [
            "Week 1: Introduction to Data Science and Python",
            "Week 2: Data Visualization Techniques",
            "Week 3: Data Wrangling and Preprocessing",
            "Week 4: Exploratory Data Analysis",
            "Week 5: Predictive Modeling Basics",
            "Week 6: Advanced Predictive Modeling Techniques",
            "Week 7: Introduction to Machine Learning",
            "Week 8: Final Project: Data Science Case Study",
            "Week 9: Presentation of Projects and Review"
        ],
        "popularity": 4.9,
        "price": 249
    },
    {
        "id": 17,
        "title": "Excel Mastery",
        "description": "Learn to create advanced Excel formulas, pivot tables, and data analysis reports.",
        "category": "Business",
        "duration": "4 weeks",
        "instructor": {
            "name": "James Allen"
        },
        "image": excelMastery,
        "features": [
            "Advanced Excel formulas",
            "Data visualization techniques",
            "Pivot tables and analysis"
        ],
        "testimonials": [
            { "text": "Excel feels easy now!", "author": "Ella" },
            { "text": "Helped me at work tremendously.", "author": "Liam" }
        ],
        "syllabus": [
            "Week 1: Introduction to Advanced Excel Features",
            "Week 2: Creating Complex Formulas",
            "Week 3: Data Visualization Techniques in Excel",
            "Week 4: Mastering Pivot Tables and Data Analysis"
        ],
        "popularity": 4.3,
        "price": 69
    },
    {
        "id": 18,
        "title": "Blockchain Basics",
        "description": "Discover how blockchain technology works and its applications in various industries.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": {
            "name": "Mia Collins"
        },
        "image": blockChainBasics,
        "features": [
            "Blockchain fundamentals",
            "Cryptocurrency introduction",
            "Real-world applications"
        ],
        "testimonials": [
            { "text": "Helped me understand blockchain easily.", "author": "Daniel" },
            { "text": "Perfect for beginners!", "author": "Amelia" }
        ],
        "syllabus": [
            "Week 1: Introduction to Blockchain Technology",
            "Week 2: Understanding Cryptography in Blockchain",
            "Week 3: Exploring Smart Contracts",
            "Week 4: Cryptocurrency Basics",
            "Week 5: Real-world Applications of Blockchain",
            "Week 6: Blockchain Case Studies",
            "Week 7: Future Trends in Blockchain Technology"
        ],
        "popularity": 4.6,
        "price": 199
    },
    {
        "id": 19,
        "title": "Copywriting",
        "description": "Learn the art of persuasive writing to create compelling copy for ads, emails, and websites.",
        "category": "Marketing",
        "duration": "4 weeks",
        "instructor": {
            "name": "Lucas Walker"
        },
        "image": copyWritting,
        "features": [
            "Effective ad copy techniques",
            "Persuasive writing skills",
            "Email marketing basics"
        ],
        "testimonials": [
            { "text": "Improved my writing skills greatly!", "author": "Grace" },
            { "text": "Helped my marketing job a lot.", "author": "Ethan" }
        ],
        "syllabus": [
            "Week 1: Introduction to Copywriting Principles",
            "Week 2: Writing Effective Ad Copy",
            "Week 3: Crafting Persuasive Emails",
            "Week 4: Creating Compelling Website Content"
        ],
        "popularity": 4.4,
        "price": 109
    },
    {
        "id": 20,
        "title": "Artificial Intelligence",
        "description": "Explore the fundamentals of AI and machine learning algorithms.",
        "category": "Tech",
        "duration": "10 weeks",
        "instructor": {
            "name": "Noah Roberts"
        },
        "image": artificialIntelligence,
        "features": [
            "Supervised and unsupervised learning",
            "Neural networks basics",
            "Real-world AI applications"
        ],
        "testimonials": [
            { "text": "A great start in AI!", "author": "Sophie" },
            { "text": "Highly informative and engaging.", "author": "James" }
        ],
        "syllabus": [
            "Week 1: Introduction to AI and Machine Learning",
            "Week 2: Supervised Learning Techniques",
            "Week 3: Unsupervised Learning Techniques",
            "Week 4: Basics of Neural Networks",
            "Week 5: Real-world Applications of AI",
            "Week 6: AI Ethics and Implications",
            "Week 7: Final Project: Build an AI Model",
            "Week 8: Presentation of Projects and Review",
            "Week 9: Future of AI",
            "Week 10: Final Exam and Course Conclusion"
        ],
        "popularity": 4.7,
        "price": 129
    },    
    {
        "id": 21,
        "title": "Public Speaking",
        "description": "Gain confidence and learn techniques to deliver powerful public speeches.",
        "category": "Personal Development",
        "duration": "3 weeks",
        "instructor": {
            "name": "Isabella Turner"
        },
        "image": publicSpeaking,
        "features": [
            "Overcoming fear of public speaking",
            "Speech organization and delivery",
            "Audience engagement techniques"
        ],
        "testimonials": [
            { "text": "This course boosted my confidence!", "author": "Emma" },
            { "text": "I can now speak in front of large groups!", "author": "Ava" }
        ],"syllabus": [
            "Week 1: Understanding Public Speaking and Overcoming Fear",
            "Week 2: Structuring Your Speech and Delivery Techniques",
            "Week 3: Engaging Your Audience and Final Presentations"
        ],
        "popularity": 4.4,
        "price": 149
    },
    {
        "id": 22,
        "title": "3D Animation",
        "description": "Master the art of 3D animation using industry-standard software like Blender and Maya.",
        "category": "Design",
        "duration": "8 weeks",
        "instructor": {
            "name": "Jack Phillips"
        },
        "image": d3Animation,
        "features": [
            "Character modeling and rigging",
            "Animation principles",
            "Rendering and compositing"
        ],
        "testimonials": [
            { "text": "Amazing course for aspiring animators!", "author": "Sophia" },
            { "text": "Learned so much about animation!", "author": "Oliver" }
        ],
        "syllabus": [
            "Week 1: Introduction to 3D Animation and Software Overview",
            "Week 2: Character Modeling and Rigging",
            "Week 3: Principles of Animation",
            "Week 4: Rendering Techniques",
            "Week 5: Compositing Basics",
            "Week 6: Advanced Animation Techniques",
            "Week 7: Project Work: Create Your Own Animation",
            "Week 8: Final Presentations and Feedback"
        ],
        "popularity": 4.8,
        "price": 239
    },
    {
        "id": 23,
        "title": "Business Analytics",
        "description": "Learn how to analyze business data and make strategic decisions based on insights.",
        "category": "Business",
        "duration": "6 weeks",
        "instructor": {
            "name": "Ava Campbell"
        },
        "image": businessAnalytics,
        "features": [
            "Data analysis techniques",
            "Business intelligence tools",
            "Strategic decision-making"
        ],
        "testimonials": [
            { "text": "Great insights into business data!", "author": "Mia" },
            { "text": "Helped me in my career significantly.", "author": "Liam" }
        ],
        "syllabus": [
            "Week 1: Introduction to Business Analytics",
            "Week 2: Data Analysis Techniques",
            "Week 3: Business Intelligence Tools",
            "Week 4: Data Visualization Techniques",
            "Week 5: Making Strategic Decisions with Data",
            "Week 6: Case Studies and Final Project"
        ],
        "popularity": 3.7,
        "price": 85
    },
    {
        "id": 24,
        "title": "Game Development",
        "description": "Learn how to create engaging 2D and 3D games using Unity and Unreal Engine.",
        "category": "Programming",
        "duration": "12 weeks",
        "instructor": {
            "name": "Liam Carter"
        },
        "image": gameDevelopment,
        "features": [
            "2D and 3D game mechanics",
            "Level design and optimization",
            "Multiplayer game development"
        ],
        "testimonials": [
            { "text": "A fantastic journey into game development!", "author": "Ella" },
            { "text": "Created my first game in this course!", "author": "Noah" }
        ],
        "syllabus": [
            "Week 1: Introduction to Game Development",
            "Week 2: 2D Game Mechanics",
            "Week 3: 3D Game Mechanics",
            "Week 4: Level Design Principles",
            "Week 5: Multiplayer Game Development",
            "Week 6: Game Optimization Techniques",
            "Week 7: Project Work: Create a Game",
            "Week 8: Final Presentations and Feedback",
            "Week 9: Game Publishing Basics",
            "Week 10: Industry Insights and Future Trends",
            "Week 11: Final Exam and Course Review",
            "Week 12: Showcase Your Game"
        ],
        "popularity": 4.5,
        "price": 179
    },
    {
        "id": 25,
        "title": "Entrepreneurship",
        "description": "Learn how to start and grow your own business, from ideation to scaling.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": {
            "name": "Ella Hughes"
        },
        "image": entrepreneurship,
        "features": [
            "Business plan development",
            "Funding strategies",
            "Marketing and growth tactics"
        ],
        "testimonials": [
            { "text": "This course inspired me to start my own business!", "author": "James" },
            { "text": "Valuable insights into entrepreneurship.", "author": "Isabella" }
        ],
        "syllabus": [
            "Week 1: Introduction to Entrepreneurship and Ideation",
            "Week 2: Developing a Business Plan",
            "Week 3: Funding Strategies for Startups",
            "Week 4: Marketing Tactics for Entrepreneurs",
            "Week 5: Scaling Your Business and Growth Strategies"
        ],
        "popularity": 4.3,
        "price": 189
    },
    {
        "id": 26,
        "title": "Cloud Computing",
        "description": "Master cloud platforms like AWS and Azure to deploy scalable applications.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": {
            "name": "Elijah Flores"
        },
        "image": cloudComputing,
        "features": [
            "Cloud architecture design",
            "Serverless computing",
            "Security and compliance in the cloud"
        ],
        "testimonials": [
            { "text": "Great introduction to cloud technology!", "author": "Grace" },
            { "text": "I feel confident in using AWS now.", "author": "Michael" }
        ],
        "syllabus": [
            "Week 1: Introduction to Cloud Computing",
            "Week 2: Understanding Cloud Architecture",
            "Week 3: Serverless Computing Basics",
            "Week 4: Security and Compliance in the Cloud",
            "Week 5: Deploying Applications on AWS",
            "Week 6: Deploying Applications on Azure",
            "Week 7: Final Project: Build a Cloud Application"
        ],
        "popularity": 4.2,
        "price": 249
    },
    {
        "id": 27,
        "title": "Financial Modeling",
        "description": "Learn how to create financial models for business forecasting and investment analysis.",
        "category": "Finance",
        "duration": "6 weeks",
        "instructor": {
            "name": "Grace Murphy"
        },
        "image": financialModeling,
        "features": [
            "Creating dynamic financial models",
            "Scenario analysis",
            "Valuation techniques"
        ],
        "testimonials": [
            { "text": "Helped me understand financial modeling!", "author": "Olivia" },
            { "text": "Invaluable skills for my finance career.", "author": "Benjamin" }
        ],
        "syllabus": [
            "Week 1: Introduction to Financial Modeling",
            "Week 2: Creating Dynamic Financial Models",
            "Week 3: Scenario Analysis Techniques",
            "Week 4: Valuation Techniques",
            "Week 5: Building Your Own Financial Model",
            "Week 6: Final Project: Presenting Your Model"
        ],
        "popularity": 4.0,
        "price": 110
    },
    {
        "id": 28,
        "title": "Project Management",
        "description": "Develop the skills to manage projects effectively using Agile, Scrum, and other frameworks.",
        "category": "Business",
        "duration": "6 weeks",
        "instructor": {
            "name": "Benjamin Kelly"
        },
        "image": projectManagement,
        "features": [
            "Agile project management techniques",
            "Risk management strategies",
            "Effective team collaboration"
        ],
        "testimonials": [
            { "text": "This course changed the way I manage projects!", "author": "Ava" },
            { "text": "Very practical and informative.", "author": "David" }
        ],
        "syllabus": [
            "Week 1: Introduction to Project Management Frameworks",
            "Week 2: Agile Project Management Techniques",
            "Week 3: Scrum Methodology",
            "Week 4: Risk Management Strategies",
            "Week 5: Effective Team Collaboration",
            "Week 6: Final Project: Managing a Mock Project"
        ],
        "popularity": 4.1,
        "price": 79
    },
    {
        "id": 29,
        "title": "Interior Design",
        "description": "Learn the principles of interior design and create stunning spaces.",
        "category": "Design",
        "duration": "8 weeks",
        "instructor": {
            "name": "Charlotte Rivera"
        },
        "image": interiorDesigning,
        "features": [
            "Space planning and layout",
            "Color theory and materials",
            "Styling and decoration techniques"
        ],
        "testimonials": [
            { "text": "Loved the hands-on approach to design!", "author": "Sophia" },
            { "text": "Great insights into creating beautiful spaces.", "author": "Lucas" }
        ],
        "syllabus": [
            "Week 1: Introduction to Interior Design Principles",
            "Week 2: Space Planning and Layout Techniques",
            "Week 3: Color Theory and Material Selection",
            "Week 4: Styling and Decoration Techniques",
            "Week 5: Project Work: Design Your Own Space",
            "Week 6: Lighting Design and Ambiance",
            "Week 7: Sustainable Design Practices",
            "Week 8: Final Presentations and Review"
        ],
        "popularity": 4.6,
        "price": 169
    },
    {
        "id": 30,
        "title": "UI/UX Design",
        "description": "Master the art of user interface and user experience design to build intuitive applications.",
        "category": "Design",
        "duration": "6 weeks",
        "instructor": {
            "name": "Mason Edwards"
        },
        "image": uiuxDesign,
        "features": [
            "User research and persona creation",
            "Wireframing and prototyping",
            "Usability testing and feedback"
        ],
        "testimonials": [
            { "text": "Transformed the way I design interfaces!", "author": "Emily" },
            { "text": "Very engaging and insightful course.", "author": "Noah" }
        ],
        "syllabus": [
            "Week 1: Introduction to UI/UX Design",
            "Week 2: User Research and Persona Creation",
            "Week 3: Wireframing Techniques",
            "Week 4: Prototyping Basics",
            "Week 5: Usability Testing and Feedback",
            "Week 6: Final Project: Design a User Interface"
        ],
        "popularity": 4.5,
        "price": 159
    },    
    {
        "id": 31,
        "title": "Software Testing",
        "description": "Learn software testing techniques including unit testing, integration testing, and test automation.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": {
            "name": "Harper Simmons"
        },
        "image": softwareTesting,
        "features": [
            "Introduction to software testing principles",
            "Hands-on experience with testing tools",
            "Best practices for writing effective test cases",
            "Understanding of test automation frameworks"
        ],
        "testimonials": [
            { "text": "This course clarified my understanding of testing concepts!", "author": "Liam" },
            { "text": "The hands-on approach made learning testing techniques easy.", "author": "Olivia" }
        ],
        "syllabus": [
        "Week 1: Introduction to Software Testing",
        "Week 2: Types of Testing and Test Planning",
        "Week 3: Writing Effective Test Cases",
        "Week 4: Automated Testing Tools Overview",
        "Week 5: Integration Testing and Best Practices",
        "Week 6: Final Project: Creating a Testing Plan"
    ],
        "popularity": 4.0,
        "price": 139
    },    
    {
        "id": 32,
        "title": "Database Management",
        "description": "Understand relational databases, SQL, and database design to manage and query large data sets.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": {
            "name": "Evelyn Russell"
        },
        "image": databaseManagement,
        "features": [
            "Introduction to relational database concepts",
            "Hands-on SQL queries for data manipulation",
            "Database normalization and design principles",
            "Techniques for optimizing database performance"
        ],
        "testimonials": [
            { "text": "This course made database concepts so easy to understand!", "author": "Sophia" },
            { "text": "Evelyn's teaching style is clear and engaging.", "author": "James" }
        ],
        "syllabus": [
        "Week 1: Introduction to Relational Databases",
        "Week 2: SQL Basics and Data Manipulation",
        "Week 3: Advanced SQL Queries",
        "Week 4: Database Design and Normalization",
        "Week 5: Performance Tuning Techniques",
        "Week 6: Transaction Management and Security",
        "Week 7: Final Project: Designing a Database"
    ],
        "popularity": 3.9,
        "price": 99
    },    
    {
        "id": 33,
        "title": "Augmented Reality Development",
        "description": "Learn how to create augmented reality applications for mobile devices using AR frameworks.",
        "category": "Programming",
        "duration": "8 weeks",
        "instructor": {
            "name": "Ethan Peterson"
        },
        "image": augmentedReality,
        "features": [
            "Overview of AR technologies and frameworks",
            "Hands-on projects for mobile AR applications",
            "Understanding user experience in AR design",
            "Best practices for testing and deploying AR apps"
        ],
        "testimonials": [
            { "text": "This course opened up new dimensions in app development!", "author": "Isabella" },
            { "text": "Ethan’s insights into AR were invaluable for my projects.", "author": "Liam" }
        ],
        "syllabus": [
        "Week 1: Introduction to Augmented Reality",
        "Week 2: Overview of AR Frameworks (ARKit, ARCore)",
        "Week 3: Setting Up Your Development Environment",
        "Week 4: Building Basic AR Experiences",
        "Week 5: User Experience Design in AR",
        "Week 6: Testing and Debugging AR Applications",
        "Week 7: Deploying AR Apps on Mobile Devices",
        "Week 8: Final Project: Create an AR Application"
    ],
        "popularity": 4.7,
        "price": 269
    },
    {
        "id": 34,
        "title": "HR Management",
        "description": "Master the skills of human resource management, recruitment, and employee training.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": {
            "name": "Madison Cook"
        },
        "image": hrManagement,
        "features": [
            "Fundamentals of HR management and leadership",
            "Effective recruitment and talent acquisition strategies",
            "Employee training and development techniques",
            "Legal considerations in HR practices"
        ],
        "testimonials": [
            { "text": "A must-take course for aspiring HR professionals!", "author": "Emma" },
            { "text": "Madison's experience in HR shines through in her teaching.", "author": "Noah" }
        ],
        "syllabus": [
        "Week 1: Introduction to HR Management",
        "Week 2: Recruitment Strategies and Best Practices",
        "Week 3: Employee Training and Development",
        "Week 4: Performance Management and Appraisals",
        "Week 5: Legal Considerations in HR"
    ],
        "popularity": 3.8,
        "price": 79
    },
    {
        "id": 35,
        "title": "Supply Chain Management",
        "description": "Learn the principles of supply chain management, from logistics to inventory control.",
        "category": "Business",
        "duration": "6 weeks",
        "instructor": {
            "name": "Samuel Bell"
        },
        "image": supplyManagement,
        "features": [
            "Understanding supply chain processes and workflows",
            "Inventory management and control techniques",
            "Logistics planning and optimization",
            "Risk management in supply chains"
        ],
        "testimonials": [
            { "text": "This course provided practical insights into supply chain operations!", "author": "Oliver" },
            { "text": "Samuel's teaching made complex concepts easy to grasp.", "author": "Ava" }
        ],
        "syllabus": [
        "Week 1: Introduction to Supply Chain Management",
        "Week 2: Supply Chain Processes and Workflows",
        "Week 3: Inventory Management Techniques",
        "Week 4: Logistics Planning and Optimization",
        "Week 5: Risk Management in Supply Chains",
        "Week 6: Final Project: Analyzing a Supply Chain"
    ],
        "popularity": 3.9,
        "price": 129
    },
    {
        "id": 36,
        "title": "Leadership and Team Building",
        "description": "Learn how to lead and build effective teams with communication and leadership techniques.",
        "category": "Business",
        "duration": "4 weeks",
        "instructor": {
            "name": "Amelia James"
        },
        "image": leadershipAndTeam,
        "features": [
            "Key leadership styles and their applications",
            "Techniques for effective team communication",
            "Strategies for resolving conflicts within teams",
            "Building a positive team culture"
        ],
        "testimonials": [
            { "text": "This course transformed my approach to leadership!", "author": "Zoe" },
            { "text": "Amelia's insights into team dynamics were invaluable.", "author": "Ethan" }
        ],
        "syllabus": [
        "Week 1: Introduction to Leadership Concepts",
        "Week 2: Effective Communication in Teams",
        "Week 3: Conflict Resolution Strategies",
        "Week 4: Building a Positive Team Culture"
    ],
        "popularity": 4.4,
        "price": 189
    },    
    {
        "id": 37,
        "title": "E-Commerce Development",
        "description": "Learn how to build, manage, and scale online stores using platforms like Shopify and WooCommerce.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": {
            "name": "Logan Martinez"
        },
        "image": eCommerceDevelopment,
        "features": [
            "Setting up online stores using popular platforms",
            "Payment gateway integration and management",
            "Marketing strategies for e-commerce success",
            "Analyzing sales data for business growth"
        ],
        "testimonials": [
            { "text": "Logan made complex topics easy to understand!", "author": "Mia" },
            { "text": "The practical approach helped me launch my store quickly.", "author": "Lucas" }
        ],
        "syllabus": [
        "Week 1: Introduction to E-Commerce and Platforms",
        "Week 2: Setting Up Your Online Store",
        "Week 3: Payment Gateway Integration",
        "Week 4: Marketing Strategies for E-Commerce",
        "Week 5: Analyzing Sales Data",
        "Week 6: Final Project: Launching Your E-Commerce Store"
    ],
        "popularity": 4.8,
        "price": 229
    },
    {
        "id": 38,
        "title": "Customer Relationship Management",
        "description": "Understand CRM tools and techniques to improve customer satisfaction and retention.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": {
            "name": "Lily Taylor"
        },
        "image": customerRelationManagement,
        "features": [
            "Overview of CRM systems and their benefits",
            "Strategies for enhancing customer interactions",
            "Data analysis for improving customer retention",
            "Implementing CRM tools for business efficiency"
        ],
        "testimonials": [
            { "text": "This course helped me understand my customers better!", "author": "Oliver" },
            { "text": "Lily's expertise in CRM was evident and very helpful.", "author": "Ava" }
        ],
        "syllabus": [
        "Week 1: Introduction to CRM Systems",
        "Week 2: Enhancing Customer Interactions",
        "Week 3: Data Analysis for Customer Retention",
        "Week 4: Implementing CRM Tools",
        "Week 5: Case Study: Successful CRM Strategies"
    ],
        "popularity": 3.7,
        "price": 49
    },    
    {
        "id": 39,
        "title": "Networking Fundamentals",
        "description": "Learn networking basics, including TCP/IP, routers, switches, and network security.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": {
            "name": "Mason Walker"
        },
        "image": networkFundamentals,
        "features": [
            "Understanding network architectures and protocols",
            "Hands-on experience with routers and switches",
            "Introduction to network security practices",
            "Troubleshooting common networking issues"
        ],
        "testimonials": [
            { "text": "Mason made networking concepts clear and engaging!", "author": "Sophie" },
            { "text": "I feel much more confident in my networking skills now.", "author": "Jacob" }
        ],
        "syllabus": [
        "Week 1: Introduction to Networking Concepts",
        "Week 2: TCP/IP and Network Protocols",
        "Week 3: Hands-on with Routers and Switches",
        "Week 4: Introduction to Network Security",
        "Week 5: Troubleshooting Networking Issues",
        "Week 6: Final Project: Setting Up a Network"
    ],
        "popularity": 4.1,
        "price": 139
    },
    {
        "id": 40,
        "title": "Financial Accounting",
        "description": "Learn financial accounting principles and how to interpret financial statements.",
        "category": "Finance",
        "duration": "5 weeks",
        "instructor": {
            "name": "Avery Young"
        },
        "image": financialAccounting,
        "features": [
            "Fundamentals of financial accounting concepts",
            "Reading and interpreting financial statements",
            "Understanding accounting cycles and processes",
            "Basics of budgeting and financial forecasting"
        ],
        "testimonials": [
            { "text": "Avery's course simplified accounting for me!", "author": "Isabella" },
            { "text": "This course was incredibly informative and well-structured.", "author": "Noah" }
        ],
        "syllabus": [
        "Week 1: Introduction to Financial Accounting",
        "Week 2: Reading Financial Statements",
        "Week 3: Accounting Cycles and Processes",
        "Week 4: Basics of Budgeting",
        "Week 5: Financial Forecasting Techniques"
    ],
        "popularity": 3.7,
        "price": 120
    },
    {
        "id": 41,
        "title": "Virtual Reality Development",
        "description": "Learn to create immersive virtual reality experiences using VR frameworks and tools.",
        "category": "Programming",
        "duration": "9 weeks",
        "instructor": {
            "name": "Ella Allen"
        },
        "image": virtualReality,
        "features": [
            "Introduction to VR concepts and technologies",
            "Hands-on experience with VR development tools",
            "Designing engaging VR user experiences",
            "Best practices for testing and deploying VR applications"
        ],
        "testimonials": [
            { "text": "Ella's course was a game-changer for my VR skills!", "author": "Liam" },
            { "text": "The practical projects helped me build a solid portfolio.", "author": "Sophie" }
        ],
        "syllabus": [
                "Week 1: Introduction to Virtual Reality",
                "Week 2: VR Development Tools",
                "Week 3: User Experience Design in VR",
                "Week 4: Testing VR Applications",
                "Week 5: Deploying VR Experiences",
                "Week 6: Advanced VR Techniques",
                "Week 7: VR Project Development",
                "Week 8: Portfolio Building",
                "Week 9: Future of VR Technology"
            ],
        "popularity": 4.7,
        "price": 269
    },   
    {
        "id": 42,
        "title": "DevOps Essentials",
        "description": "Master DevOps tools and practices to streamline development and operations workflows.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": {
            "name": "Jackson Scott"
        },
        "image": devopsEssentials,
        "features": [
            "Understanding DevOps principles and culture",
            "Hands-on with CI/CD pipelines",
            "Managing infrastructure with configuration management tools",
            "Monitoring and logging practices for production systems"
        ],
        "testimonials": [
            { "text": "Jackson made complex DevOps concepts easy to grasp!", "author": "Emma" },
            { "text": "This course significantly improved my workflow efficiency.", "author": "Noah" }
        ],
        "syllabus": [
                "Week 1: Introduction to DevOps",
                "Week 2: CI/CD Pipeline Fundamentals",
                "Week 3: Infrastructure Management",
                "Week 4: Configuration Management Tools",
                "Week 5: Monitoring and Logging",
                "Week 6: DevOps Best Practices",
                "Week 7: Capstone Project"
            ],
        "popularity": 4.8,
        "price": 179
    },    
    {
        "id": 43,
        "title": "Ethical Hacking",
        "description": "Learn ethical hacking techniques to identify and fix vulnerabilities in systems and networks.",
        "category": "Tech",
        "duration": "8 weeks",
        "instructor": {
            "name": "Layla Lewis"
        },
        "image": ethicalHacking,
        "features": [
            "Foundational concepts of ethical hacking",
            "Hands-on penetration testing techniques",
            "Identifying common vulnerabilities and exploits",
            "Creating a security improvement plan for systems"
        ],
        "testimonials": [
            { "text": "Layla's expertise in cybersecurity is unmatched!", "author": "Zoe" },
            { "text": "I feel equipped to handle security challenges now.", "author": "James" }
        ],
        "syllabus": [
                "Week 1: Introduction to Ethical Hacking",
                "Week 2: Penetration Testing Techniques",
                "Week 3: Vulnerability Identification",
                "Week 4: Exploitation Techniques",
                "Week 5: Reporting and Remediation",
                "Week 6: Building a Security Plan",
                "Week 7: Advanced Ethical Hacking Techniques",
                "Week 8: Final Project"
            ],
        "popularity": 4.8,
        "price": 279
    },    
    {
        "id": 44,
        "title": "Public Relations",
        "description": "Understand the essentials of PR and how to manage a brand's public image.",
        "category": "Marketing",
        "duration": "4 weeks",
        "instructor": {
            "name": "Daniel Hall"
        },
        "image": publicRelations,
        "features": [
            "Basics of public relations strategies",
            "Media relations and communication techniques",
            "Crisis management and reputation building",
            "Measuring PR success and effectiveness"
        ],
        "testimonials": [
            { "text": "Daniel's insights into PR strategies were incredibly helpful!", "author": "Olivia" },
            { "text": "This course boosted my confidence in managing public images.", "author": "Mason" }
        ],
        "syllabus": [
                "Week 1: Introduction to Public Relations",
                "Week 2: Media Relations Techniques",
                "Week 3: Crisis Management Strategies",
                "Week 4: Measuring PR Effectiveness"
            ],
        "popularity": 4.5,
        "price": 140
    },    
    {
        "id": 45,
        "title": "Email Marketing",
        "description": "Learn how to create successful email marketing campaigns that engage and convert.",
        "category": "Marketing",
        "duration": "3 weeks",
        "instructor": {
            "name": "Scarlett Rivera"
        },
        "image": emailMarketing,
        "features": [
            "Designing effective email marketing strategies",
            "Understanding email automation and segmentation",
            "Analyzing campaign performance metrics",
            "Best practices for increasing open and click rates"
        ],
        "testimonials": [
            { "text": "Scarlett's course helped me boost my email open rates!", "author": "Ava" },
            { "text": "I gained practical skills to enhance my marketing campaigns.", "author": "Liam" }
        ],
        "syllabus": [
                "Week 1: Introduction to Email Marketing",
                "Week 2: Designing Effective Campaigns",
                "Week 3: Analyzing Performance Metrics"
            ],
        "popularity": 4.2,
        "price": 89
    },    
    {
        "id": 46,
        "title": "Data Visualization",
        "description": "Learn to present data visually using tools like Tableau, Power BI, and D3.js.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": {
            "name": "William Gonzalez"
        },
        "image": dataVisualization,
        "features": [
            "Understanding data visualization principles",
            "Hands-on experience with Tableau and Power BI",
            "Creating interactive visualizations with D3.js",
            "Best practices for effective data storytelling"
        ],
        "testimonials": [
            { "text": "William's course transformed how I visualize data!", "author": "Ava" },
            { "text": "The projects were engaging and practical.", "author": "Oliver" }
        ],
        "syllabus": [
                "Week 1: Introduction to Data Visualization",
                "Week 2: Working with Tableau",
                "Week 3: Exploring Power BI",
                "Week 4: Creating Visualizations with D3.js",
                "Week 5: Data Storytelling Techniques",
                "Week 6: Final Project Presentation"
            ],
        "popularity": 4.1,
        "price": 59
    },    
    {
        "id": 47,
        "title": "Mobile Game Development",
        "description": "Learn how to develop mobile games for Android and iOS platforms using game engines like Unity.",
        "category": "Programming",
        "duration": "10 weeks",
        "instructor": {
            "name": "Grace Nelson"
        },
        "image": mobileGameDevelopment,
        "features": [
            "Introduction to Unity and mobile game design",
            "Hands-on experience with game mechanics and physics",
            "Understanding mobile platform constraints",
            "Best practices for game testing and deployment"
        ],
        "testimonials": [
            { "text": "Grace made game development so much fun!", "author": "Ethan" },
            { "text": "The course was detailed and very informative.", "author": "Sophia" }
        ],
        "syllabus": [
                "Week 1: Introduction to Mobile Game Development",
                "Week 2: Basics of Unity",
                "Week 3: Game Mechanics and Physics",
                "Week 4: Designing Levels",
                "Week 5: Mobile Platform Considerations",
                "Week 6: Game Testing Techniques",
                "Week 7: Finalizing Game Designs",
                "Week 8: Deployment Strategies",
                "Week 9: Marketing Your Game",
                "Week 10: Final Project Showcase"
            ],
        "popularity": 4.7,
        "price": 219
    },    
    {
        "id": 48,
        "title": "Branding Essentials",
        "description": "Learn how to build and manage a strong brand identity that resonates with your audience.",
        "category": "Marketing",
        "duration": "5 weeks",
        "instructor": {
            "name": "Carter King"
        },
        "image": brandingEssentials,
        "features": [
            "Understanding the principles of branding",
            "Creating a brand identity and strategy",
            "Managing brand perception and reputation",
            "Techniques for effective brand storytelling"
        ],
        "testimonials": [
            { "text": "Carter's insights on branding were invaluable!", "author": "Liam" },
            { "text": "This course helped me clarify my brand's voice.", "author": "Emma" }
        ],
        "syllabus": [
                "Week 1: Introduction to Branding",
                "Week 2: Creating Brand Identity",
                "Week 3: Managing Brand Perception",
                "Week 4: Effective Brand Storytelling",
                "Week 5: Final Branding Project"
            ],
        "popularity": 4.3,
        "price": 130
    },    
    {
        "id": 49,
        "title": "Customer Service Excellence",
        "description": "Learn techniques to provide outstanding customer service and build long-lasting relationships.",
        "category": "Business",
        "duration": "3 weeks",
        "instructor": {
            "name": "Luna Wright"
        },
        "image": customerServiceExcellence,
        "features": [
            "Fundamentals of customer service",
            "Effective communication and problem-solving skills",
            "Building rapport and trust with customers",
            "Strategies for handling difficult situations"
        ],
        "testimonials": [
            { "text": "Luna's course completely changed my approach to customer service!", "author": "Noah" },
            { "text": "The role-playing scenarios were incredibly helpful.", "author": "Zoe" }
        ],
        "syllabus": [
                "Week 1: Fundamentals of Customer Service",
                "Week 2: Effective Communication Skills",
                "Week 3: Handling Difficult Situations"
            ],
        "popularity": 4.5,
        "price": 99
    },    
    {
        "id": 50,
        "title": "Data Engineering",
        "description": "Master the skills required to design, build, and manage scalable data systems.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": {
            "name": "James Adams"
        },
        "image": dataEngineering,
        "features": [
            "Understanding data engineering concepts and tools",
            "Building and managing data pipelines",
            "Best practices for data warehousing and ETL",
            "Hands-on experience with cloud data services"
        ],
        "testimonials": [
            { "text": "James provided excellent insights into data systems!", "author": "Olivia" },
            { "text": "This course has significantly enhanced my data skills.", "author": "Mason" }
        ],
        "syllabus": [
                "Week 1: Introduction to Data Engineering",
                "Week 2: Tools and Technologies",
                "Week 3: Building Data Pipelines",
                "Week 4: Data Warehousing Concepts",
                "Week 5: ETL Best Practices",
                "Week 6: Cloud Data Services",
                "Week 7: Final Project"
            ],
        "popularity": 4.7,
        "price": 210
    },    
    {
        "id": 51,
        "title": "Natural Language Processing",
        "description": "Explore NLP techniques to analyze and process human language using machine learning.",
        "category": "Tech",
        "duration": "8 weeks",
        "instructor": {
            "name": "Addison Clark"
        },
        "image": naturalLanguageProcessing,
        "features": [
            "Understanding NLP fundamentals and applications",
            "Hands-on experience with NLP libraries like NLTK and spaCy",
            "Techniques for text preprocessing and feature extraction",
            "Building and deploying NLP models"
        ],
        "testimonials": [
            { "text": "Addison’s course opened my eyes to the power of language processing!", "author": "Olivia" },
            { "text": "The practical examples made complex concepts easy to grasp.", "author": "Ethan" }
        ],
        "syllabus": [
        "Week 1: Introduction to Natural Language Processing",
        "Week 2: Text Preprocessing Techniques",
        "Week 3: Feature Extraction Methods",
        "Week 4: Language Modeling",
        "Week 5: Sentiment Analysis",
        "Week 6: Named Entity Recognition",
        "Week 7: Building NLP Applications",
        "Week 8: Final Project and Deployment"
    ],
        "popularity": 4.7,
        "price": 129
    },    
    {
        "id": 52,
        "title": "Data Mining",
        "description": "Learn how to extract valuable insights from large datasets using data mining techniques.",
        "category": "Tech",
        "duration": "6 weeks",
        "instructor": {
            "name": "Joshua Baker"
        },
        "image": dataMining,
        "features": [
            "Introduction to data mining concepts and techniques",
            "Data preprocessing and cleaning methods",
            "Exploratory data analysis and visualization",
            "Applying data mining algorithms to real-world datasets"
        ],
        "testimonials": [
            { "text": "Joshua’s insights into data mining were eye-opening!", "author": "Sophia" },
            { "text": "I gained practical skills I can apply immediately.", "author": "Mason" }
        ],
        "syllabus": [
        "Week 1: Introduction to Data Mining",
        "Week 2: Data Preprocessing Techniques",
        "Week 3: Exploratory Data Analysis",
        "Week 4: Visualization Techniques",
        "Week 5: Data Mining Algorithms",
        "Week 6: Real-World Applications"
    ],
        "popularity": 4.3,
        "price": 140
    },    
    {
        "id": 53,
        "title": "Game UI/UX Design",
        "description": "Learn how to design user interfaces and experiences specifically for video games.",
        "category": "Design",
        "duration": "6 weeks",
        "instructor": {
            "name": "Penelope Hill"
        },
        "image": gameUiUxDesign,
        "features": [
            "Principles of UI/UX design in gaming",
            "Creating immersive and engaging user experiences",
            "Hands-on projects with game design tools",
            "Best practices for testing game interfaces"
        ],
        "testimonials": [
            { "text": "Penelope's course was a game-changer for my design skills!", "author": "Liam" },
            { "text": "The focus on gaming UX was incredibly beneficial.", "author": "Emma" }
        ],
        "syllabus": [
        "Week 1: Introduction to Game UI/UX",
        "Week 2: Principles of UI Design",
        "Week 3: Principles of UX Design",
        "Week 4: Hands-on Project: Designing a Game Interface",
        "Week 5: Testing Game Interfaces",
        "Week 6: Final Project Presentation"
    ],
        "popularity": 4.7,
        "price": 279
    },    
    {
        "id": 54,
        "title": "IT Support Fundamentals",
        "description": "Learn the basics of IT support, troubleshooting, and help desk operations.",
        "category": "Tech",
        "duration": "4 weeks",
        "instructor": {
            "name": "Benjamin Wood"
        },
        "image": itSupportFundamentals,
        "features": [
            "Understanding IT support roles and responsibilities",
            "Techniques for troubleshooting hardware and software issues",
            "Customer service skills for IT professionals",
            "Best practices for documenting support requests"
        ],
        "testimonials": [
            { "text": "Benjamin's teaching made IT support straightforward!", "author": "Ava" },
            { "text": "The hands-on exercises were extremely helpful.", "author": "Noah" }
        ],
        "syllabus": [
            "Week 1: Introduction to IT Support",
            "Week 2: Troubleshooting Techniques",
            "Week 3: Customer Service Skills",
            "Week 4: Documentation and Best Practices"
        ],
        "popularity": 4.0,
        "price": 159
    },    
    {
        "id": 55,
        "title": "Advanced Excel",
        "description": "Go beyond the basics and learn advanced Excel techniques like macros, VBA, and data automation.",
        "category": "Business",
        "duration": "5 weeks",
        "instructor": {
            "name": "Lily Cox"
        },
        "image": advancedExcel,
        "features": [
            "Mastering Excel formulas and functions",
            "Introduction to Excel macros and VBA programming",
            "Data analysis and visualization techniques",
            "Automation of repetitive tasks with Excel"
        ],
        "testimonials": [
            { "text": "Lily's course took my Excel skills to the next level!", "author": "Emma" },
            { "text": "The automation techniques were particularly valuable.", "author": "Oliver" }
        ],
        "syllabus": [
        "Week 1: Advanced Formulas and Functions",
        "Week 2: Introduction to Macros",
        "Week 3: VBA Programming Basics",
        "Week 4: Data Analysis Techniques",
        "Week 5: Automation Techniques"
    ],
        "popularity": 3.7,
        "price": 69
    },    
    {
        "id": 56,
        "title": "Google Ads Mastery",
        "description": "Learn to create and optimize Google Ads campaigns for maximum ROI.",
        "category": "Marketing",
        "duration": "4 weeks",
        "instructor": {
            "name": "Jacob Diaz"
        },
        "image": googleAdsMastery,
        "features": [
            "Understanding Google Ads structure and strategies",
            "Creating effective ad campaigns and targeting",
            "Analyzing campaign performance and ROI",
            "Best practices for optimizing ad spend"
        ],
        "testimonials": [
            { "text": "Jacob's expertise in Google Ads was invaluable!", "author": "Isabella" },
            { "text": "The strategies I learned helped boost my marketing efforts.", "author": "Liam" }
        ],
        "syllabus": [
        "Week 1: Introduction to Google Ads",
        "Week 2: Creating Effective Campaigns",
        "Week 3: Analyzing Campaign Performance",
        "Week 4: Best Practices for Optimization"
    ],
        "popularity": 3.9,
        "price": 79
    },    
    {
        "id": 57,
        "title": "Design Thinking",
        "description": "Learn the principles of design thinking to solve complex problems with innovative solutions.",
        "category": "Design",
        "duration": "5 weeks",
        "instructor": {
            "name": "Ella Gray"
        },
        "image": designThinking,
        "features": [
            "Understanding the design thinking process",
            "Techniques for user-centered design",
            "Collaborative problem-solving methods",
            "Practical applications of design thinking in various fields"
        ],
        "testimonials": [
            { "text": "Ella's approach to design thinking was refreshing!", "author": "Noah" },
            { "text": "The group exercises fostered creativity and innovation.", "author": "Zoe" }
        ],
        "syllabus": [
        "Week 1: Introduction to Design Thinking",
        "Week 2: User-Centered Design Techniques",
        "Week 3: Collaborative Problem Solving",
        "Week 4: Practical Applications in Various Fields",
        "Week 5: Final Project Presentation"
    ],
        "popularity": 4.2,
        "price": 149
    },    
    {
        "id": 58,
        "title": "Agile Software Development",
        "description": "Learn Agile methodologies to manage software projects and deliver high-quality products.",
        "category": "Tech",
        "duration": "7 weeks",
        "instructor": {
            "name": "Samuel Rogers"
        },
        "image": agileSoftwareDevelopment,
        "features": [
            "Understanding Agile principles and frameworks",
            "Implementing Scrum and Kanban methodologies",
            "Techniques for effective team collaboration",
            "Best practices for project management and delivery"
        ],
        "testimonials": [
            { "text": "Samuel’s insights into Agile transformed my project management skills!", "author": "Ava" },
            { "text": "The practical exercises made learning Agile principles enjoyable.", "author": "Liam" }
        ],
        "syllabus": [
            "Week 1: Introduction to Agile Principles",
            "Week 2: Scrum Framework and Practices",
            "Week 3: Kanban Methodology",
            "Week 4: Agile Project Management Tools",
            "Week 5: Effective Team Collaboration",
            "Week 6: Managing Stakeholder Expectations",
            "Week 7: Final Project Presentation"
        ],
        "popularity": 4.1,
        "price": 159
    },    
    {
        "id": 59,
        "title": "Microsoft Azure Essentials",
        "description": "Learn to use Microsoft Azure cloud services to build and manage applications in the cloud.",
        "category": "Tech",
        "duration": "5 weeks",
        "instructor": {
            "name": "Avery Torres"
        },
        "image": microsoftAzureEssentials,
        "features": [
            "Understanding cloud computing fundamentals",
            "Hands-on experience with Azure services",
            "Deploying and managing applications on Azure",
            "Best practices for cloud security and compliance"
        ],
        "testimonials": [
            { "text": "Avery's course made Azure accessible and practical!", "author": "Emma" },
            { "text": "I feel confident deploying my applications in the cloud now.", "author": "Oliver" }
        ],
        "syllabus": [
            "Week 1: Introduction to Cloud Computing",
            "Week 2: Overview of Microsoft Azure",
            "Week 3: Azure Portal and Resource Management",
            "Week 4: Building Azure Solutions",
            "Week 5: Deploying and Managing Applications in Azure"
        ],
        "popularity": 4.1,
        "price": 99
    },    
    {
        "id": 60,
        "title": "Event Planning and Management",
        "description": "Learn how to plan, organize, and manage successful events, from small gatherings to large conferences.",
        "category": "Business",
        "duration": "4 weeks",
        "instructor": {
            "name": "Mia Bennett"
        },
        "image": eventPlanningManagement,
        "features": [
            "Fundamentals of event planning and management",
            "Techniques for budgeting and logistics",
            "Marketing strategies for successful events",
            "Best practices for on-site management and execution"
        ],
        "testimonials": [
            { "text": "Mia's course helped me plan my first event with confidence!", "author": "Zoe" },
            { "text": "The practical tips and tools were invaluable.", "author": "Ethan" }
        ],
        "syllabus": [
            "Week 1: Introduction to Event Planning",
            "Week 2: Budgeting and Resource Management",
            "Week 3: Marketing and Promotion Strategies",
            "Week 4: Venue Selection and Logistics",
            "Week 5: Crisis Management in Events",
            "Week 6: Final Event Planning Project"
        ],
        "popularity": 4.4,
        "price": 139
    },    
    {
        "id": 61,
        "title": "Time Management",
        "description": "Learn to effectively manage your time and increase productivity with practical strategies and tools.",
        "category": "Personal Development",
        "duration": "3 weeks",
        "instructor": {
            "name": "David Wilson"
        },
        "image": timeManagement,
        "features": [
            "Understanding time management principles",
            "Techniques for prioritizing tasks",
            "Tools for planning and scheduling",
            "Strategies for overcoming procrastination"
        ],
        "testimonials": [
            { "text": "David's course transformed how I approach my day!", "author": "Sophia" },
            { "text": "The practical tools helped me regain control of my time.", "author": "Mason" }
        ],
        "syllabus": [
            "Week 1: Introduction to Time Management",
            "Week 2: Prioritization Techniques",
            "Week 3: Tools for Planning and Scheduling"
        ],
        "popularity": 4.5,
        "price": 100
    },    
    {
        "id": 62,
        "title": "Leadership Skills",
        "description": "Develop the leadership skills necessary to inspire and lead a team towards success.",
        "category": "Personal Development",
        "duration": "5 weeks",
        "instructor": {
            "name": "Sarah Johnson"
        },
        "image": leadershipSkills,
        "features": [
            "Understanding different leadership styles",
            "Techniques for effective team communication",
            "Strategies for motivating and inspiring others",
            "Building a strong and cohesive team"
        ],
        "testimonials": [
            { "text": "Sarah's insights into leadership were invaluable!", "author": "Olivia" },
            { "text": "I feel more confident leading my team now.", "author": "Ethan" }
        ],
        "syllabus": [
            "Week 1: Understanding Leadership Styles",
            "Week 2: Effective Team Communication",
            "Week 3: Motivating and Inspiring Others",
            "Week 4: Building Cohesive Teams",
            "Week 5: Final Leadership Project"
        ],
        "popularity": 4.6,
        "price": 179
    },    
    {
        "id": 63,
        "title": "Emotional Intelligence",
        "description": "Understand emotional intelligence and how it can enhance your personal and professional relationships.",
        "category": "Personal Development",
        "duration": "4 weeks",
        "instructor": {
            "name": "Emily Watson"
        },
        "image": emotionalIntelligence,
        "features": [
            "Understanding the components of emotional intelligence",
            "Techniques for self-awareness and self-regulation",
            "Improving empathy and interpersonal skills",
            "Applying emotional intelligence in various contexts"
        ],
        "testimonials": [
            { "text": "Emily's course helped me understand my emotions better!", "author": "Mia" },
            { "text": "The skills I learned improved my relationships significantly.", "author": "Liam" }
        ],
        "syllabus": [
            "Week 1: Introduction to Emotional Intelligence",
            "Week 2: Self-Awareness and Self-Regulation",
            "Week 3: Improving Empathy",
            "Week 4: Applying Emotional Intelligence"
        ],
        "popularity": 4.5,
        "price": 159
    },    
    {
        "id": 64,
        "title": "Stress Management",
        "description": "Discover techniques to manage stress and maintain a healthy work-life balance.",
        "category": "Personal Development",
        "duration": "3 weeks",
        "instructor": {
            "name": "Michael Lee"
        },
        "image": stressManagement,
        "features": [
            "Understanding the sources of stress",
            "Techniques for stress reduction and relaxation",
            "Creating a personal stress management plan",
            "Balancing work and personal life"
        ],
        "testimonials": [
            { "text": "Michael's course provided me with effective stress-relief techniques!", "author": "Emma" },
            { "text": "I feel more balanced and in control of my life.", "author": "Oliver" }
        ],
        "syllabus": [
            "Week 1: Understanding Stress",
            "Week 2: Techniques for Stress Reduction",
            "Week 3: Creating a Personal Stress Management Plan"
        ],
        "popularity": 4.1,
        "price": 110
    },    
    {
        "id": 65,
        "title": "Communication Skills",
        "description": "Enhance your communication skills to improve both personal and professional interactions.",
        "category": "Personal Development",
        "duration": "4 weeks",
        "instructor": {
            "name": "Jessica Parker"
        },
        "image": communicationSkills,
        "features": [
            "Understanding the fundamentals of effective communication",
            "Techniques for active listening and feedback",
            "Strategies for clear and assertive expression",
            "Improving non-verbal communication skills"
        ],
        "testimonials": [
            { "text": "Jessica's course significantly improved my communication skills!", "author": "Ava" },
            { "text": "I now feel more confident in my interactions.", "author": "Noah" }
        ],
        "syllabus": [
            "Week 1: Basics of Effective Communication",
            "Week 2: Verbal and Non-Verbal Communication",
            "Week 3: Active Listening Skills",
            "Week 4: Public Speaking and Presentation Skills"
        ],
        "popularity": 4.6,
        "price": 219
    }    
]

export default courses;