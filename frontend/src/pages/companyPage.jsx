// Individual Job Poster Dashboard
export default function IndividualJobPosterDashboard() {
  const individualStats = [
    { name: 'Active Listings', value: '3', change: '+1', changeType: 'increase' },
    { name: 'Total Views', value: '89', change: '+24', changeType: 'increase' },
    { name: 'Applications', value: '15', change: '+8', changeType: 'increase' },
    { name: 'Messages', value: '7', change: '+3', changeType: 'increase' },
  ];

  const myListings = [
    { id: 1, title: 'House Cleaning Needed', type: 'Cleaning', budget: '500 ETB', applicants: 8, status: 'Active', date: '2024-01-15' },
    { id: 2, title: 'Tutor for Math & Science', type: 'Education', budget: '800 ETB', applicants: 5, status: 'Active', date: '2024-01-14' },
    { id: 3, title: 'Graphic Design Project', type: 'Design', budget: '1,200 ETB', applicants: 2, status: 'Active', date: '2024-01-10' },
  ];

  const recentApplications = [
    { id: 1, name: 'Helen Teshome', position: 'House Cleaning', rate: '450 ETB', status: 'Pending', date: '2 hours ago' },
    { id: 2, name: 'Daniel Mekonnen', position: 'Math Tutor', rate: '750 ETB', status: 'Interviewing', date: '1 day ago' },
    { id: 3, name: 'Sara Abraham', position: 'Graphic Design', rate: '1,000 ETB', status: 'Rejected', date: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Individual Poster Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Michu Jobs</h1>
                  <p className="text-xs text-gray-500 -mt-1">My Listings</p>
                </div>
              </div>
              
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#" className="border-green-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  My Listings
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Applications
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                Post New Job
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">AT</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Alem Tesfaye</p>
                  <p className="text-xs text-gray-500">Individual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Hello, Alem! 👋</h1>
              <p className="text-purple-100 mt-1">Your listings have received 15 applications this week</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Post New Job
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {individualStats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600">📊</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd>
                        <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className="font-medium text-green-600">
                    {stat.change}
                  </span>
                  <span className="text-gray-500"> from last week</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Listings */}
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">My Active Listings</h3>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View all
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {myListings.map((listing) => (
                <div key={listing.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{listing.title}</h4>
                      <div className="flex gap-4 mt-1">
                        <span className="text-sm text-gray-500">{listing.type}</span>
                        <span className="text-sm text-gray-500">{listing.budget}</span>
                        <span className="text-sm text-gray-500">{listing.applicants} applicants</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {listing.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Posted on {listing.date}</span>
                    <div className="flex gap-2">
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        View Applicants
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Recent Applications</h3>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View all
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentApplications.map((application) => (
                <div key={application.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{application.name}</h4>
                      <p className="text-sm text-gray-500">{application.position} • {application.rate}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      application.status === 'Interviewing' ? 'bg-yellow-100 text-yellow-800' :
                      application.status === 'Pending' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {application.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{application.date}</span>
                    <div className="flex gap-2">
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Message
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Job Categories */}
        <div className="mt-8 bg-white shadow-sm rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Quick Post by Category</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                <span className="text-2xl mb-2">🏠</span>
                <span className="text-sm font-medium text-gray-900">Home Services</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                <span className="text-2xl mb-2">🎓</span>
                <span className="text-sm font-medium text-gray-900">Tutoring</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                <span className="text-2xl mb-2">💻</span>
                <span className="text-sm font-medium text-gray-900">Tech & Design</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                <span className="text-2xl mb-2">🔧</span>
                <span className="text-sm font-medium text-gray-900">Other Services</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}