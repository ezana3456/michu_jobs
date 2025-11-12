import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProfileSetup() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  // Different form configurations based on profile type
  const formConfigs = {
    jobseeker: {
      steps: [
        {
          title: "Basic Information",
          fields: [
            { name: "fullName", label: "Full Name", type: "text", required: true },
            { name: "profession", label: "Profession/Title", type: "text", required: true },
            { name: "location", label: "Location", type: "text", required: true },
            { name: "phone", label: "Phone Number", type: "tel" },
          ]
        },
        {
          title: "Professional Details",
          fields: [
            { name: "experience", label: "Years of Experience", type: "number" },
            { name: "education", label: "Highest Education", type: "text" },
            { name: "skills", label: "Skills (comma separated)", type: "text" },
            { name: "resume", label: "Upload Resume", type: "file" },
          ]
        },
        {
          title: "Career Preferences",
          fields: [
            { name: "jobType", label: "Preferred Job Type", type: "select", options: ["Full-time", "Part-time", "Contract", "Remote", "Hybrid"] },
            { name: "salaryExpectation", label: "Salary Expectation", type: "text" },
            { name: "industries", label: "Preferred Industries", type: "text" },
          ]
        }
      ]
    },
    company: {
      steps: [
        {
          title: "Company Information",
          fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "industry", label: "Industry", type: "text", required: true },
            { name: "companySize", label: "Company Size", type: "select", options: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"] },
            { name: "website", label: "Company Website", type: "url" },
          ]
        },
        {
          title: "Company Details",
          fields: [
            { name: "description", label: "Company Description", type: "textarea" },
            { name: "logo", label: "Company Logo", type: "file" },
            { name: "location", label: "Headquarters Location", type: "text" },
          ]
        },
        {
          title: "Contact Information",
          fields: [
            { name: "contactPerson", label: "Contact Person", type: "text", required: true },
            { name: "contactEmail", label: "Contact Email", type: "email", required: true },
            { name: "contactPhone", label: "Contact Phone", type: "tel" },
          ]
        }
      ]
    },
    privateclient: {
      steps: [
        {
          title: "Personal Information",
          fields: [
            { name: "fullName", label: "Full Name", type: "text", required: true },
            { name: "clientType", label: "I am a", type: "select", options: ["Individual", "Small Business Owner", "Startup Founder", "Other"] },
            { name: "location", label: "Location", type: "text" },
          ]
        },
        {
          title: "Project Needs",
          fields: [
            { name: "serviceNeeds", label: "What services do you need?", type: "textarea" },
            { name: "budgetRange", label: "Budget Range", type: "text" },
            { name: "timeline", label: "Project Timeline", type: "select", options: ["Urgent", "1-2 weeks", "1 month", "Flexible"] },
          ]
        }
      ]
    }
  };

  const currentConfig = formConfigs[type] || formConfigs.jobseeker;
  const totalSteps = currentConfig.steps.length;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      // Save profile data
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      userData.profile = formData;
      userData.profileCompleted = true;
      localStorage.setItem("user", JSON.stringify(userData));

      // Navigate to appropriate dashboard
      navigate(`/${type}/dashboard`);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  if (!formConfigs[type]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Profile Type</h1>
          <button 
            onClick={() => navigate("/profile/type")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Choose Profile Type
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {currentConfig.steps[step - 1].title}
            </h1>
            <span className="text-gray-600">Step {step} of {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <form className="space-y-6">
            {currentConfig.steps[step - 1].fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                
                {field.type === "textarea" ? (
                  <textarea
                    value={formData[field.name] || ""}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                    rows={4}
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
                  />
                ) : field.type === "select" ? (
                  <select
                    value={formData[field.name] || ""}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200 bg-white"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : field.type === "file" ? (
                  <input
                    type="file"
                    onChange={(e) => handleInputChange(field.name, e.target.files[0])}
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
                  />
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                    className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
                  />
                )}
              </div>
            ))}
          </form>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 mt-6 border-t border-gray-200">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : navigate("/profile/type")}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              {step === 1 ? "Back" : "Previous"}
            </button>
            
            {step < totalSteps ? (
              <button
                onClick={() => setStep(step + 1)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Complete Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}