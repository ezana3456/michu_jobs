import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setIsDropdownOpen(false);
    navigate("/");
  };

  const getAvatarInitials = (name) => {
    return name
      ?.split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => handleNavigation("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Michu Jobs</h1>
              <p className="text-xs text-gray-500 -mt-1">Find your comfort</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("/")}
              className={`font-medium transition-colors duration-200 ${
                isActive("/") 
                  ? "text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/jobs")}
              className={`font-medium transition-colors duration-200 ${
                isActive("/jobs") 
                  ? "text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Find Jobs
            </button>
            <button
              onClick={() => handleNavigation("/companies")}
              className={`font-medium transition-colors duration-200 ${
                isActive("/companies") 
                  ? "text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Companies
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Post Job Button */}
            <button
              onClick={() => handleNavigation("/post-job")}
              className="hidden sm:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>💼</span>
              Post a Job
            </button>

            {isLoggedIn ? (
              /* User Dropdown */
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-medium">
                      {getAvatarInitials(user?.name)}
                    </span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.role}</p>
                  </div>
                  <svg 
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => handleNavigation("/profile")}
                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span>👤</span>
                        My Profile
                      </button>
                      <button
                        onClick={() => handleNavigation("/dashboard")}
                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span>📊</span>
                        Dashboard
                      </button>
                      <button
                        onClick={() => handleNavigation("/settings")}
                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span>⚙️</span>
                        Settings
                      </button>
                    </div>

                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                      >
                        <span>🚪</span>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Auth Buttons */
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleNavigation("/login")}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavigation("/register")}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("/")}
                className="font-medium text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/jobs")}
                className="font-medium text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Find Jobs
              </button>
              <button
                onClick={() => handleNavigation("/companies")}
                className="font-medium text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Companies
              </button>
              
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => handleNavigation("/profile")}
                    className="font-medium text-gray-700 hover:text-green-600 transition-colors text-left"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => handleNavigation("/dashboard")}
                    className="font-medium text-gray-700 hover:text-green-600 transition-colors text-left"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => handleNavigation("/post-job")}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full justify-center"
                  >
                    <span>💼</span>
                    Post a Job
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-left font-medium text-red-600 hover:text-red-700 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleNavigation("/login")}
                    className="text-center text-gray-700 hover:text-green-600 font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleNavigation("/register")}
                    className="text-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </header>
  );
}