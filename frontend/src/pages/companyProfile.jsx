export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Company Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">AT</span>
                </div>
              </div>
              
              {/* Company Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">ABC Technology</h1>
                    <p className="text-gray-600 mt-2">Building the future of tech in Ethiopia</p>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>🌐</span>
                        <span>www.abctech.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>📍</span>
                        <span>Addis Ababa, Ethiopia</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>👥</span>
                        <span>50-200 employees</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>🏢</span>
                        <span>Technology</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex gap-3">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
                      <span>👁️</span>
                      Follow Company
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-green-500 hover:text-green-600 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-gray-600 text-sm">Open Jobs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-gray-600 text-sm">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2018</div>
                    <div className="text-gray-600 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-gray-600 text-sm">Happiness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* About Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  ABC Technology is a leading software development company in Ethiopia, 
                  specializing in creating innovative solutions for businesses across Africa. 
                  We believe in the power of technology to transform lives and drive economic growth.
                </p>
                
                <div className="mt-6 space-y-3">
                  <h4 className="font-medium text-gray-900">Why Join Us?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Competitive salaries and benefits
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Professional development opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Flexible work arrangements
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Innovative projects with impact
                    </li>
                  </ul>
                </div>
              </div>

              {/* Culture & Benefits */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Culture & Benefits</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">🏢 Work Environment</h4>
                    <p className="text-gray-600 text-sm mt-1">Modern offices with collaborative spaces and relaxation areas</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">💼 Professional Growth</h4>
                    <p className="text-gray-600 text-sm mt-1">Training programs, conference attendance, and mentorship</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">🏥 Health & Wellness</h4>
                    <p className="text-gray-600 text-sm mt-1">Comprehensive health insurance and wellness programs</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">🎉 Team Activities</h4>
                    <p className="text-gray-600 text-sm mt-1">Regular team building events and social activities</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">📍</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Headquarters</p>
                      <p className="text-sm text-gray-600">Bole Road, Addis Ababa</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">📧</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">careers@abctech.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">📱</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <p className="text-sm text-gray-600">+251 11 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Open Positions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Open Positions</h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  24 jobs available
                </span>
              </div>

              <div className="space-y-4">
                {/* Job Listing 1 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 cursor-pointer">
                        Senior Frontend Developer
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          📍 Addis Ababa
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          💰 30,000 - 45,000 ETB
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          ⏰ Full-time
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">React</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">TypeScript</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Next.js</span>
                  </div>
                </div>

                {/* Job Listing 2 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 cursor-pointer">
                        DevOps Engineer
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          📍 Remote
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          💰 35,000 - 50,000 ETB
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          ⏰ Full-time
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">AWS</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Docker</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Kubernetes</span>
                  </div>
                </div>

                {/* Job Listing 3 */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 cursor-pointer">
                        Product Manager
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          📍 Addis Ababa
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          💰 40,000 - 55,000 ETB
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          ⏰ Full-time
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">Product Strategy</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">Agile</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">User Research</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 border-2 border-dashed border-gray-300 text-gray-600 py-4 rounded-lg font-semibold hover:border-green-500 hover:text-green-600 transition-colors">
                View All 24 Positions
              </button>
            </div>

            {/* Team Gallery */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Life at ABC Technology</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Team Photo {item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mt-4 text-center">
                Join our vibrant team and be part of Ethiopia's tech revolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}