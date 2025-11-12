import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const [selectedType, setSelectedType] = useState("");
  const [profileName, setProfileName] = useState("");
  const navigate = useNavigate();

  const profileTypes = [
    {
      id: "jobseeker",
      title: "Job Seeker",
      description: "Looking for employment opportunities",
      icon: "👤",
      color: "blue",
      features: ["Apply to jobs", "Get job recommendations", "Track applications"]
    },
    {
      id: "company", 
      title: "Company",
      description: "Hiring talent for your organization",
      icon: "🏢",
      color: "green",
      features: ["Post job listings", "Manage candidates", "Employer branding"]
    },
    {
      id: "privateclient",
      title: "Private Client", 
      description: "Hiring for personal projects",
      icon: "💼",
      color: "purple",
      features: ["Post projects", "Find freelancers", "Direct communication"]
    }
  ];

  const handleCreateProfile = () => {
    if (!selectedType || !profileName.trim()) return;

    // Create new profile
    const newProfile = {
      id: Date.now(),
      name: profileName,
      type: selectedType,
      role: profileTypes.find(t => t.id === selectedType)?.title,
      avatar: profileName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      lastActive: "Just now"
    };

    // Save to localStorage or send to API
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (!userData.profiles) userData.profiles = [];
    userData.profiles.push(newProfile);
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to profile selection
    navigate("/profiles");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Profile</h1>
          <p className="text-gray-600">Set up a new profile for different needs</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* Profile Name Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Name
            </label>
            <input
              type="text"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              placeholder="Enter profile name (e.g., Personal, Work, Freelance)"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
            />
          </div>

          {/* Profile Type Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Profile Type
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {profileTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    selectedType === type.id
                      ? `border-${type.color}-500 ring-2 ring-${type.color}-200 bg-${type.color}-50`
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 bg-${type.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-2xl">{type.icon}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{type.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <ul className="space-y-1 text-left text-xs text-gray-600">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <span className="text-green-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/profiles")}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateProfile}
              disabled={!selectedType || !profileName.trim()}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}