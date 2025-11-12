import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading applications data
    setTimeout(() => {
      setApplications([
        {
          id: 1,
          jobId: 101,
          title: "Senior Frontend Developer",
          company: "ABC Technology",
          companyLogo: "AT",
          location: "Addis Ababa",
          type: "Full-time",
          salary: "25,000 - 40,000 ETB",
          appliedDate: "2024-01-15",
          status: "under-review",
          statusText: "Under Review",
          statusColor: "blue",
          lastUpdate: "2 days ago",
          interviewDate: null,
          notes: "Your application is being reviewed by the hiring team."
        },
        {
          id: 2,
          jobId: 102,
          title: "UX/UI Designer",
          company: "Creative Studio",
          companyLogo: "CS",
          location: "Remote",
          type: "Full-time",
          salary: "20,000 - 35,000 ETB",
          appliedDate: "2024-01-12",
          status: "interview",
          statusText: "Interview Scheduled",
          statusColor: "yellow",
          lastUpdate: "1 day ago",
          interviewDate: "2024-01-20 at 2:00 PM",
          notes: "Technical interview scheduled with design team."
        },
        {
          id: 3,
          jobId: 103,
          title: "Data Analyst",
          company: "Data Insights Inc",
          companyLogo: "DI",
          location: "Addis Ababa",
          type: "Contract",
          salary: "18,000 - 30,000 ETB",
          appliedDate: "2024-01-10",
          status: "rejected",
          statusText: "Not Selected",
          statusColor: "red",
          lastUpdate: "3 days ago",
          interviewDate: null,
          notes: "We've decided to move forward with other candidates."
        },
        {
          id: 4,
          jobId: 104,
          title: "Mobile Developer",
          company: "AppWorks",
          companyLogo: "AW",
          location: "Addis Ababa",
          type: "Full-time",
          salary: "22,000 - 38,000 ETB",
          appliedDate: "2024-01-08",
          status: "accepted",
          statusText: "Offer Received",
          statusColor: "green",
          lastUpdate: "5 hours ago",
          interviewDate: null,
          notes: "Congratulations! We're excited to extend an offer."
        },
        {
          id: 5,
          jobId: 105,
          title: "Product Manager",
          company: "Tech Solutions",
          companyLogo: "TS",
          location: "Remote",
          type: "Full-time",
          salary: "35,000 - 50,000 ETB",
          appliedDate: "2024-01-05",
          status: "applied",
          statusText: "Application Sent",
          statusColor: "gray",
          lastUpdate: "1 week ago",
          interviewDate: null,
          notes: "Your application has been received."
        }
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const statusFilters = [
    { value: "all", label: "All Applications", count: applications.length },
    { value: "under-review", label: "Under Review", count: applications.filter(app => app.status === "under-review").length },
    { value: "interview", label: "Interview", count: applications.filter(app => app.status === "interview").length },
    { value: "accepted", label: "Offers", count: applications.filter(app => app.status === "accepted").length },
    { value: "rejected", label: "Rejected", count: applications.filter(app => app.status === "rejected").length },
    { value: "applied", label: "Applied", count: applications.filter(app => app.status === "applied").length }
  ];

  const filteredApplications = filter === "all" 
    ? applications 
    : applications.filter(app => app.status === filter);

  const getStatusColor = (color) => {
    const colors = {
      green: "bg-green-100 text-green-800 border-green-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      red: "bg-red-100 text-red-800 border-red-200",
      gray: "bg-gray-100 text-gray-800 border-gray-200"
    };
    return colors[color] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusIcon = (status) => {
    const icons = {
      "applied": "📨",
      "under-review": "👀",
      "interview": "📅",
      "accepted": "✅",
      "rejected": "❌"
    };
    return icons[status] || "📄";
  };

  const withdrawApplication = (applicationId) => {
    setApplications(applications.filter(app => app.id !== applicationId));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
              <p className="text-gray-600 mt-1">Track and manage your job applications</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {applications.length} application{applications.length !== 1 ? 's' : ''}
              </span>
              <button 
                onClick={() => navigate("/jobs")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Find More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((status) => (
              <button
                key={status.value}
                onClick={() => setFilter(status.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === status.value
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{status.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                  filter === status.value
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {status.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📭</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-600 mb-6">
                {filter === "all" 
                  ? "You haven't applied to any jobs yet." 
                  : `You don't have any applications with status "${statusFilters.find(s => s.value === filter)?.label}".`}
              </p>
              <button 
                onClick={() => navigate("/jobs")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Browse Jobs
              </button>
            </div>
          ) : (
            filteredApplications.map((application) => (
              <div key={application.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Job Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{application.companyLogo}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 cursor-pointer">
                                {application.title}
                              </h3>
                              <p className="text-green-600 font-medium">{application.company}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex items-center gap-2">
                              <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(application.statusColor)}`}>
                                <span>{getStatusIcon(application.status)}</span>
                                {application.statusText}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-3">
                            <span className="flex items-center gap-1 text-sm text-gray-600">
                              📍 {application.location}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-gray-600">
                              ⏰ {application.type}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-gray-600">
                              💰 {application.salary}
                            </span>
                          </div>

                          {/* Status Details */}
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <div>
                                <p className="text-sm text-gray-700">{application.notes}</p>
                                {application.interviewDate && (
                                  <p className="text-sm text-gray-600 mt-1">
                                    <strong>Interview:</strong> {application.interviewDate}
                                  </p>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">
                                Updated {application.lastUpdate}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 lg:items-end">
                      <div className="text-sm text-gray-500 text-right">
                        Applied on {application.appliedDate}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/jobs/${application.jobId}`)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-green-500 hover:text-green-600 transition-colors"
                        >
                          View Job
                        </button>
                        {application.status === "applied" && (
                          <button
                            onClick={() => withdrawApplication(application.id)}
                            className="px-4 py-2 border border-red-300 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
                          >
                            Withdraw
                          </button>
                        )}
                        {application.status === "accepted" && (
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                            Respond to Offer
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Application Stats */}
        {applications.length > 0 && (
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Application Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {applications.filter(app => app.status === "accepted").length}
                </div>
                <div className="text-gray-600 text-sm">Offers Received</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {applications.filter(app => app.status === "interview").length}
                </div>
                <div className="text-gray-600 text-sm">Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {applications.filter(app => app.status === "under-review").length}
                </div>
                <div className="text-gray-600 text-sm">Under Review</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {Math.round((applications.filter(app => app.status === "accepted").length / applications.length) * 100)}%
                </div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}