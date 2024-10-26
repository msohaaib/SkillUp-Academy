const Dashboard = () => {


    //HardCoded Data for user progress
    const courses = [
        { id: 1, title: 'Web Development', progress: 80 },
        { id: 2, title: 'Data Science', progress: 55 },
        { id: 3, title: 'UI/UX Design', progress: 30 },
    ];
    
    //HardCoded Data for user Profile
    const userProfile = {
        name: 'Muhammad Sohaib',
        email: 'sohaib@example.com',
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
                <div className="space-y-4">
                    {courses.map(course => (
                        <div key={course.id} className="bg-white p-4 rounded shadow">
                            <h3 className="text-lg font-medium">{course.title}</h3>
                            <div className="h-2 bg-gray-200 rounded">
                                <div
                                    className="h-full bg-blue-600 rounded"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <p className="mt-1 text-sm text-gray-600">{course.progress}% completed</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
                <div className="bg-white p-4 rounded shadow">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={userProfile.name}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={userProfile.email}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
