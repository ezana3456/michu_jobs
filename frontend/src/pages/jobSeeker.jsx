import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function JobSeekerDashboard() {
  const [activeTab, setActiveTab] = useState("recommended");
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: "Senior Frontend Developer",
          company: "ABC Technology",
          location: "Addis Ababa",
          type: "Full-time",
          salary: "25,000 - 40,000 ETB",
          posted: "2 hours ago",
          skills: ["React", "TypeScript", "Next.js"],
          featured: true,
          match: 95
        },
        {
          id: 2,
          title: "UX/UI Designer",
          company: "Creative Studio",
          location: "Remote",
          type: "Full-time",
          salary: "20,000 - 35,000 ETB",
          posted: "1 day ago",
          skills: ["Figma", "Adobe XD", "User Research"],
          featured: false,
          match: 87
        },
        {
          id: 3,
          title: "Data Analyst",
          company: "Data Insights",
          location: "Addis Ababa",
          type: "Contract",
          salary: "18,000 - 30,000 ETB",
          posted: "3 days ago",
          skills: ["Python", "SQL", "Tableau"],
          featured: true,
          match: 78
        },
        {
          id: 4,
          title: "Mobile Developer",
          company: "AppWorks",
          location: "Addis Ababa",
          type: "Full-time",
          salary: "22,000 - 38,000 ETB",
          posted: "1 week ago",
          skills: ["React Native", "Flutter", "Firebase"],
          featured: false,
          match: 92
        }
      ]);

      setApplications([
        {
          id: 1,
          jobId: 1,
          title: "Senior Frontend Developer",
          company: "ABC Technology",
          status: "under-review",
          statusText: "Under Review",
          appliedDate: "2024-01-15",
          color: "blue"
        },
        {
          id: 2,
          jobId: 2,
          title: "UX/UI Designer",
          company: "Creative Studio",
          status: "interview",
          statusText: "Interview Scheduled",
          appliedDate: "2024-01-12",
          color: "yellow"
        },
        {
          id: 3,
          jobId: 3,
          title: "Data Analyst",
          company: "Data Insights",
          status: "rejected",
          statusText: "Not Selected",
          appliedDate: "2024-01-10",
          color: "red"
        }
      ]);

      setProfile({
        name: "John Doe",
        title: "Frontend Developer",
        location: "Addis Ababa",
        profileCompletion: 75,
        skills: ["React", "JavaScript", "TypeScript", "CSS", "HTML"],
        resume: "john_doe_resume.pdf"
      });

      setIsLoading(false);
    }, 1000);
  }, []);

  const handleQuickApply = (jobId) => {
    // Simulate application
    const job = jobs.find(j => j.id === jobId);
    if (job) {
      setApplications(prev => [...prev, {
        id: Date.now(),
        jobId: job.id,
        title: job.title,
        company: job.company,
        status: "applied",
        statusText: "Applied",
        appliedDate: new Date().toISOString().split('T')[0],
        color: "green"
      }]);
    }
  };

  const getStatusColor = (color) => {
    const colors = {
      green: "bg-green-100 text-green-800",
      blue: "bg-blue-100 text-blue-800",
      yellow: "bg-yellow-100 text-yellow-800",
      red: "bg-red-100 text-red-800"
    };
    return colors[color] || "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">JD</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {profile.name}! 👋</h1>
                <p className="text-green-100">{profile.title} • {profile.location}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate("/profile")}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Edit Profile
              </button>
              <button 
                onClick={() => navigate("/upload-resume")}
                className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Upload Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Completion */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Profile Completion</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Profile Strength</span>
                  <span className="font-semibold text-green-600">{profile.profileCompletion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${profile.profileCompletion}%` }}
                  ></div>
                </div>
                <button className="w-full bg-green-50 text-green-700 py-2 rounded-lg font-semibold hover:bg-green-100 transition-colors">
                  Complete Profile
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications Sent</span>
                  <span className="font-bold text-gray-900">{applications.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-bold text-gray-900">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interviews</span>
                  <span className="font-bold text-gray-900">2</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Your Skills</h3>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Edit
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Your Resume</h3>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600">📄</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{profile.resume}</p>
                    <p className="text-gray-500 text-xs">Updated 2 days ago</p>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Applications Status */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Application Status</h2>
                <button 
                  onClick={() => navigate("/my-applications")}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                    <div>
                      <h3 className="font-semibold text-gray-900">{application.title}</h3>
                      <p className="text-gray-600 text-sm">{application.company}</p>
                      <p className="text-gray-500 text-xs">Applied on {application.appliedDate}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.color)}`}>
                      {application.statusText}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Recommendations */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">Recommended Jobs</h2>
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                  {["recommended", "recent", "saved"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-white text-green-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 cursor-pointer">
                              {job.title}
                            </h3>
                            <p className="text-green-600 font-medium">{job.company}</p>
                          </div>
                          {job.featured && (
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            📍 {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            ⏰ {job.type}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            💰 {job.salary}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Posted {job.posted}</span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-600 font-medium">{job.match}% match</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex lg:flex-col gap-2">
                        <button
                          onClick={() => handleQuickApply(job.id)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
                        >
                          Quick Apply
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-green-500 hover:text-green-600 transition-colors whitespace-nowrap">
                          Save Job
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <button className="border-2 border-dashed border-gray-300 text-gray-600 py-3 px-6 rounded-lg font-semibold hover:border-green-500 hover:text-green-600 transition-colors w-full">
                  Load More Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}