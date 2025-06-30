import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = true
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 cursor-pointer">
                <div className="text-2xl font-bold text-blue-600 flex items-center">
                  HLM Service
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link to="/billing" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Billing
              </Link>
              <Link to="/admin" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Admin
              </Link>
              <Link to="/provider" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Provider
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button>
              <Link to="/api/login">Sign In</Link>
            </button>
            <button className="md:hidden">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;