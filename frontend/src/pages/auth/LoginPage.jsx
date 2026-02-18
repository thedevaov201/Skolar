import {useState} from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Input from "../../components/ui/Input"

const LoginPage = () => {
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")
  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4'>
      <div className="md:min-w-sm">

        <div>
          <div className="mb-8 flex items-center justify-center space-x-4">
            <img src="/skolar-logo.png" className="size-10"/>
            <h1 className='text-3xl font-bold'>SKOLAR</h1>
          </div>
          <h1 className="text-center text-3xl">Welcome Back</h1>
          <p className="text-center text-gray-500 mt-2">Login to continue your learning journey</p>
        </div>

        <div className='bg-white rounded-sm px-8 pt-8 pb-4 mt-10 shadow-sm border-2 border-gray-100'>
          <form onSubmit={handleLogin}>
            <Input
             label="Email"
             type="email"
             placeholder="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <Input
             label="Password"
             type="password"
             placeholder="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />

            {/* Checkbox and Forgot Password Link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="size-3 md:size-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-[8px] md:text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-[8px] md:text-sm font-medium text-blue-600 hover:text-teal-500 transition duration-150"
            >
              Forgot Password?
            </a>
          </div>

            <button type="submit" className="mt-5 w-full py-3 px-4 bg-primary/90 hover:bg-primary text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-200 cursor-pointer">
              Log In
            </button>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <Link to={"/signup"} className="text-blue-700">
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        <div className="flex items-center justify-center text-sm mt-5 text-gray-500 hover:text-gray-900 transition-colors space-x-2">
          <ArrowLeft size={15} />
          <Link to={"/"} className="">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
