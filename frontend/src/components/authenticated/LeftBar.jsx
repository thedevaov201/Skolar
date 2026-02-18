import { Link } from "react-router-dom"

const LeftBar = () => {
  return (
    <div className="w-1/6 h-screen shadow-md pt-24 relative">
        <ul className="space-y-4 px-4">
            <li><Link to="/" className="px-6 py-2 text-lg text-gray-500">Dashboard</Link></li>
            <li><Link to="/articles" className="px-6 py-2 text-lg text-gray-500">Articles</Link></li>
            <li><Link to="/resources" className="px-6 py-2 text-lg text-gray-500">Resources</Link></li>
            <li><Link to="/community" className="px-6 py-2 text-lg text-gray-500">Community</Link></li>
            <li><Link to="/profile" className="px-6 py-2 text-lg text-gray-500 cursor-pointer">Profile</Link></li>
        </ul>
        <div className="absolute w-full bottom-0 border-t-2 border-t-gray-200 shadow-xs px-6 py-6">
            <Link className="text-lg text-gray-500">Logout</Link>
        </div>
    </div>
  )
}

export default LeftBar
