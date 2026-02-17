import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 p-4'>
      <div className='max-w-7xl mx-auto md:px-20 flex items-center justify-between'>

        <Link className='text-xl font-bold flex items-center space-x-2'>
          <img className="size-8" src="./skolar-logo.png"/>
          <span>Skolar</span>
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          <Link className='nav-link'>Home</Link>
          <Link className='nav-link'>Articles</Link>
          <Link className='nav-link'>Resources</Link>
          <Link className='nav-link'>Community</Link>
        </div>

        <div className='flex items-center gap-3 text-sm font-medium'>
          <Link to="/login" className="hidden md:block px-5 py-2.5 transition-colors whitespace-nowrap hover:text-primary" >Log In</Link>
          <Link to="/signup" className="px-5 py-2.5 bg-primary/90 text-white rounded-lg hover:bg-primary transition-colors whitespace-nowrap">Get Started</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar;