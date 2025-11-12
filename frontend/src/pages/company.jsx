export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "ABC Technology",
      industry: "Technology",
      employees: "50-200",
      location: "Addis Ababa",
      jobs: 24,
      logo: "AT",
      description: "Building the future of tech in Ethiopia",
      featured: true
    },
    {
      id: 2,
      name: "XYZ Corporation",
      industry: "Finance",
      employees: "200-500",
      location: "Addis Ababa",
      jobs: 18,
      logo: "XC",
      description: "Leading financial services provider",
      featured: true
    },
    {
      id: 3,
      name: "LMN Solutions",
      industry: "Consulting",
      employees: "20-50",
      location: "Remote",
      jobs: 12,
      logo: "LS",
      description: "Strategic business solutions",
      featured: false
    },
    {
      id: 4,
      name: "Green Farms",
      industry: "Agriculture",
      employees: "500-1000",
      location: "Hawassa",
      jobs: 8,
      logo: "GF",
      description: "Sustainable agriculture practices",
      featured: false
    },
    {
      id: 5,
      name: "Blue Health",
      industry: "Healthcare",
      employees: "100-200",
      location: "Addis Ababa",
      jobs: 15,
      logo: "BH",
      description: "Quality healthcare services",
      featured: false
    },
    {
      id: 6,
      name: "Tech Valley",
      industry: "Technology",
      employees: "10-50",
      location: "Addis Ababa",
      jobs: 6,
      logo: "TV",
      description: "Innovative tech startup",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Top Companies</h1>
              <p className="text-gray-600 mt-2">Discover amazing companies hiring in Ethiopia</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{companies.length} companies</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  For Employers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Filter Companies</h3>
              
              {/* Industry Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>All Industries</option>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Agriculture</option>
                  <option>Consulting</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>All Locations</option>
                  <option>Addis Ababa</option>
                  <option>Remote</option>
                  <option>Hawassa</option>
                  <option>Dire Dawa</option>
                </select>
              </div>

              {/* Company Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <div className="space-y-2">
                  {['1-10', '10-50', '50-200', '200-500', '500+'].map(size => (
                    <label key={size} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="ml-2 text-sm text-gray-700">{size} employees</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Companies List */}
          <div className="lg:w-3/4">
            {/* Sort and Search */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Search companies..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border-0 text-sm font-medium focus:ring-0 bg-transparent">
                    <option>Most Popular</option>
                    <option>Most Jobs</option>
                    <option>Alphabetical</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Featured Companies */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Companies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companies.filter(company => company.featured).map(company => (
                  <div key={company.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">{company.logo}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 cursor-pointer">
                              {company.name}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">{company.description}</p>
                          </div>
                          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-3">
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            🏢 {company.industry}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            📍 {company.location}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            👥 {company.employees}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-green-600 font-semibold">
                            {company.jobs} open positions
                          </span>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                            View Jobs
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Companies */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">All Companies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.filter(company => !company.featured).map(company => (
                  <div key={company.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{company.logo}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 hover:text-green-600 cursor-pointer">
                          {company.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{company.industry}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>📍</span>
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>👥</span>
                        <span>{company.employees} employees</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold text-sm">
                        {company.jobs} jobs
                      </span>
                      <button className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-100 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600">
                  Previous
                </button>
                <button className="px-3 py-2 rounded-lg bg-green-600 text-white">1</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600">2</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600">3</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}