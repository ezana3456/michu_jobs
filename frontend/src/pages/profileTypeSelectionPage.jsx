import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSelection() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Exedin Suite",
      type: "jobseeker",
      role: "Senior Frontend Developer",
      avatar: "ES",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Exedin Suite",
      type: "privateclient",
      role: "Project Owner",
      avatar: "ES",
      lastActive: "1 day ago"
    }
  ]);

  const navigate = useNavigate();

  const handleProfileSelect = (profile) => {
    // Set active profile and redirect to appropriate dashboard
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    userData.activeProfile = profile;
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Navigate to appropriate dashboard based on profile type
    if (profile.type === "jobseeker") {
      navigate("/jobseeker/dashboard");
    } else if (profile.type === "company") {
      navigate("/employer/dashboard");
    } else if (profile.type === "privateclient") {
      navigate("/client/dashboard");
    }
  };

  const handleAddProfile = () => {
    navigate("/profile/create");
  };

  const getProfileColor = (type) => {
    const colors = {
      jobseeker: "from-blue-500 to-blue-600",
      company: "from-green-500 to-green-600", 
      privateclient: "from-purple-500 to-purple-600"
    };
    return colors[type] || "from-gray-500 to-gray-600";
  };

  const getTypeBadgeColor = (type) => {
    const colors = {
      jobseeker: "bg-blue-100 text-blue-700",
      company: "bg-green-100 text-green-700",
      privateclient: "bg-purple-100 text-purple-700"
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  const getTypeDisplay = (type) => {
    const types = {
      jobseeker: "Job Seeker",
      company: "Company",
      privateclient: "Private Client"
    };
    return types[type] || "Profile";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Michu Jobs
          </h1>
          <p className="text-gray-600">Where Careers Feel Like Home</p>
        </div>

        {/* Profile Selection Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Choose your Profile
            </h2>
            <p className="text-gray-600">
              Select a profile to post jobs or look for work
            </p>
          </div>

          {/* Profiles List */}
          <div className="space-y-4 mb-8">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => handleProfileSelect(profile)}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${getProfileColor(profile.type)} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  <span className="text-white font-bold text-sm">{profile.avatar}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{profile.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeBadgeColor(profile.type)}`}>
                      {getTypeDisplay(profile.type)}
                    </span>
                    <span className="text-xs text-gray-500 truncate">
                      {profile.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Last active {profile.lastActive}
                  </p>
                </div>
                
                <div className="text-gray-400 group-hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Add Profile Button */}
          <button
            onClick={handleAddProfile}
            className="w-full flex items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-200 group"
          >
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
              <span className="text-xl font-bold">+</span>
            </div>
            <span className="font-semibold">Add Profile</span>
          </button>

          {/* Help Text */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              You can switch profiles anytime from your account settings
            </p>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">Your Profiles</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-blue-600">
                {profiles.filter(p => p.type === 'jobseeker').length}
              </div>
              <div className="text-xs text-gray-600">Job Seeker</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600">
                {profiles.filter(p => p.type === 'privateclient').length}
              </div>
              <div className="text-xs text-gray-600">Client</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">
                {profiles.filter(p => p.type === 'company').length}
              </div>
              <div className="text-xs text-gray-600">Company</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}