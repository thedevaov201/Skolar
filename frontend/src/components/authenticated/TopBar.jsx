import { Link } from "react-router-dom"
import { Bell } from "lucide-react"

const DahboardNav = () => {
  return (
    <div className='w-full py-4 px-4 md:px-8 bg-white fixed z-50 shadow-sm'>
        <div className="flex items-center justify-between">
            <Link to="/dashboard" className='text-xl font-bold flex items-center space-x-2'>
                <img className="size-8" src="./skolar-logo.png"/>
                <span>Skolar</span>
            </Link>

            <div className="flex items-center space-x-6">
                <div>
                    <Bell className="size-5" />
                </div>
                <img src="./public/user1.jpg" className="size-10 rounded-full"/>
            </div>
        </div>
    </div>
  )
}

export default DahboardNav
