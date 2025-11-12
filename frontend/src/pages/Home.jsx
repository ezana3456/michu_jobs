export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🚀</span>
              <span>Ethiopia's Leading Job Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your
              <span className="block text-green-600">Dream Job</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Michu Jobs connects exceptional talent with forward-thinking companies. 
              <span className="block text-green-700 font-semibold mt-2">
                Where Careers Feel Like Home
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                <span>💼</span>
                Start Hiring
              </button>
              <button className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                <span>🔍</span>
                Find Work
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600 text-sm">Jobs Posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50K+</div>
              <div className="text-gray-600 text-sm">Talents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-green-600">Opportunities</span>
            </h2>
            <p className="text-gray-600 text-lg">Handpicked roles from top Ethiopian companies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Senior Software Engineer</h3>
                  <p className="text-green-600 font-semibold">ABC Technology</p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Tech
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <span>📍</span>
                  <span>Addis Ababa</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💰</span>
                  <span>Competitive</span>
                </div>
              </div>
              <button className="w-full bg-green-50 text-green-700 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Marketing Manager</h3>
                  <p className="text-green-600 font-semibold">XYZ Corporation</p>
                </div>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Marketing
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <span>📍</span>
                  <span>Addis Ababa</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💰</span>
                  <span>Competitive</span>
                </div>
              </div>
              <button className="w-full bg-green-50 text-green-700 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Data Analyst</h3>
                  <p className="text-green-600 font-semibold">LMN Solutions</p>
                </div>
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  Analytics
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <span>📍</span>
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💰</span>
                  <span>Competitive</span>
                </div>
              </div>
              <button className="w-full bg-green-50 text-green-700 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals and companies building the future of work in Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Post a Job
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300">
              Browse Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-light mb-4">Michu Jobs</h2>
            <p className="text-gray-400 text-lg mb-6">
              Where Careers Feel Like Home
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}