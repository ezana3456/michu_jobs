import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";  
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";  
import PostJob from "./pages/PostJob";
import JobDetails from "./pages/JobDetails";
import CompanyProfilePage from "./pages/companyProfile";
import AdminDashboard from "./pages/admin";
import CompaniesPage from "./pages/companyPage";
import JobSeekerDashboard from "./pages/jobSeeker";
import ApplicationsPage from "./pages/applications";
import ProfileTypeSelection from "./pages/profileTypeSelectionPage";
import ProfileSetup from "./pages/profileType";
import CreateProfile from "./pages/profileCreatin";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/profile/type" element={<ProfileTypeSelection />} />
          <Route path="/profile/setup/:type" element={<ProfileSetup />} />
          <Route path="/profile/create" element={<CreateProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<CompaniesPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/jobseeker" element={<JobSeekerDashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/company/:id" element={<CompanyProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
