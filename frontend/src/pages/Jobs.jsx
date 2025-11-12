import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function JobList() {
  const [showSector, setShowSector] = useState(true);
  const [showType, setShowType] = useState(true);
  const [showSite, setShowSite] = useState(true);

  const jobs = [
    {
      title: "Sales Representative",
      company: "Private Client",
      location: "Addis Ababa, Ethiopia",
      description:
        "We are seeking experienced and motivated Sales Representatives to join our dynamic team. The ideal candidate will have a strong background in cosmetics, skincare, or medical aesthetics sales and a proven ability to drive results.",
      tags: ["Sales and Promotion", "Remote - Full Time"],
      level: "Senior",
      deadline: "Nov 29, 2025",
      posted: "1 hour ago",
    },
    {
      title: "Host and Content Creator",
      company: "Private Client",
      location: "Addis Ababa, Ethiopia",
      description:
        "We are looking for a creative host and content creator to produce engaging digital content and manage our online presence.",
      tags: ["Marketing", "Part-time"],
      level: "Mid",
      deadline: "Dec 1, 2025",
      posted: "1 hour ago",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-10 py-8">
      {/* Search Bar */}
<div className="max-w-4xl mx-auto mb-10 relative">
  <input
    type="text"
    placeholder="Search for jobs, companies, or locations..."
    className="w-full pl-12 pr-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-700 focus:border-green-700 focus:outline-none transition-all duration-200"
  />
  
  {/* Search Icon */}
  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700 text-xl">
    🔍
  </span>
</div>


      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* Job List */}
<div className="flex-1 space-y-6">
  {jobs.map((job, i) => (
    <div
      key={i}
      className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{job.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {job.company} • {job.location}
          </p>
        </div>
        <p className="text-xs text-gray-400">{job.posted}</p>
      </div>

      {/* Job Description */}
      <p className="text-gray-700 mt-3 line-clamp-3 text-sm">{job.description}</p>
      <button className="text-indigo-600 text-sm mt-2 font-medium hover:underline">
        Show More
      </button>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Job Meta */}
      <div className="flex justify-between items-center mt-5 text-sm text-gray-500">
        <p>
          <span className="font-medium">{job.level}</span> • Experience
        </p>
        <p>
          <span className="font-medium">{job.deadline}</span> • Deadline
        </p>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mt-6">
        <button className="border-2 border-indigo-500 text-indigo-500 font-semibold px-6 py-2 rounded-xl hover:bg-indigo-50 transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>


        {/* Filter Sidebar */}
<aside className="w-full lg:w-80 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100 h-fit">
  <h3 className="text-xl font-bold text-gray-900 mb-6">Filter Jobs</h3>

  {/* Sector */}
  <div className="mb-6">
    <button
      onClick={() => setShowSector(!showSector)}
      className="flex justify-between items-center w-full font-medium text-gray-800 hover:text-indigo-600 transition"
    >
      Sector
      <ChevronDown className={`w-5 h-5 transform transition-transform ${showSector ? "rotate-180" : ""}`} />
    </button>
    {showSector && (
      <select className="w-full mt-3 border border-gray-200 px-3 py-2 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">Select sector</option>
        <option>Technology</option>
        <option>Marketing</option>
        <option>Sales</option>
        <option>Design</option>
      </select>
    )}
  </div>

  {/* Job Types */}
  <div className="mb-6">
    <button
      onClick={() => setShowType(!showType)}
      className="flex justify-between items-center w-full font-medium text-gray-800 hover:text-indigo-600 transition"
    >
      Job Types
      <ChevronDown className={`w-5 h-5 transform transition-transform ${showType ? "rotate-180" : ""}`} />
    </button>
    {showType && (
      <div className="mt-3 space-y-2 text-gray-700">
        {[
          "Permanent (Full-time)",
          "Part-time",
          "Remote",
          "Freelance",
          "Contractual",
          "Volunteer",
          "Intern (Paid)",
          "Intern (Unpaid)",
        ].map((type, i) => (
          <label
            key={i}
            className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition"
          >
            <input type="checkbox" className="accent-indigo-500" />
            {type}
          </label>
        ))}
      </div>
    )}
  </div>

  {/* Job Sites */}
  <div className="mb-6">
    <button
      onClick={() => setShowSite(!showSite)}
      className="flex justify-between items-center w-full font-medium text-gray-800 hover:text-indigo-600 transition"
    >
      Job Sites
      <ChevronDown className={`w-5 h-5 transform transition-transform ${showSite ? "rotate-180" : ""}`} />
    </button>
    {showSite && (
      <div className="mt-3 space-y-2 text-gray-700">
        {["On-site", "Remote", "Hybrid"].map((site, i) => (
          <label
            key={i}
            className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition"
          >
            <input type="checkbox" className="accent-indigo-500" />
            {site}
          </label>
        ))}
      </div>
    )}
  </div>
</aside>

      </div>
    </div>
  );
}
