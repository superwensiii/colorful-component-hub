import { Bell, Search, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-navy text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-semibold">Customer Self Service</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-light-blue transition-colors">Dashboard</a>
            <a href="#" className="hover:text-light-blue transition-colors">Payments</a>
            <a href="#" className="hover:text-light-blue transition-colors">Reports</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-2 hover:bg-white/10 rounded-full p-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;