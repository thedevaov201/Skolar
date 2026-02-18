import { NavLink } from "react-router-dom"
import { Menu } from "lucide-react";

const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? 'text-blue-600 font-medium whitespace-nowrap': 'text-gray-700 hover:text-primary/90 font-medium whitespace-nowrap';
  return (
    <div className='fixed top-0 left-0 right-0 z-50 p-4 bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto md:px-20 flex items-center justify-between'>

        <NavLink className='text-xl font-bold flex items-center space-x-2'>
          <img className="size-7 md:size-8" src="./skolar-logo.png"/>
          <span>Skolar</span>
        </NavLink>

        <div className='hidden md:flex items-center gap-8'>
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/article" className={linkClass}>Articles</NavLink>
          <NavLink to="/resources" className={linkClass}>Resources</NavLink>
          <NavLink to="/community" className={linkClass}>Community</NavLink>
        </div>

        <div className='hidden md:flex items-center gap-3 text-sm font-medium'>
          <NavLink to="/login" className="md:block px-5 py-2.5 transition-colors whitespace-nowrap hover:text-primary" >Log In</NavLink>
          <NavLink to="/signup" className="px-2 py-2 md:px-5 md:py-2.5 bg-primary/90 text-white rounded-lg hover:bg-primary transition-colors whitespace-nowrap">Get Started</NavLink>
        </div>
        
        <div className="md:hidden">
          <Menu size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;