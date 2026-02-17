import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useAuthStore } from "../store/AuthStore"
import Input from "../components/Input"

const SignupPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")
  //const [confirmPassword, setConfirmPassword ] = useState("")
  //const [name, setName] = useState("")
  //const [university, setUniversity] = useState("")
  //const [department, setDepartment ] = useState("")
  //const [level, setLevel ] = useState("")

  const navigate = useNavigate()
  const { signup, error, isLoading} = useAuthStore()

  async function handleSignup(e) {
    e.preventDefault()
    try {
      await signup(name, email, password)
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4 py-8'>
      <div className="md:min-w-sm">

        <div className='text-center'>
          <h1 className='text-3xl font-bold'>SKOLAR</h1>
          <p>Create Your Account</p>
          <span>Join thousands of students already learning on SKOLAR</span>
        </div>

        <div className='bg-white rounded-sm px-4 md:px-8 pt-8 pb-4 mt-10 shadow-sm border-2 border-gray-100'>
          <form onSubmit={handleSignup}>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <Input
                label="Name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/*<div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <Input
                label="University"
                type="text"
                placeholder="University"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
              <Input
                label="Department"
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <Input
              label="Level"
              type="text"
              placeholder="Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
            */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

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
                className="ml-2 block text-[8px] md:text-sm text-gray-700"
              >
                I agree to the <span className="text-primary/90">Terms of Service</span> and <span className="text-primary/90">Privacy Policy</span>
              </label>
            </div>
          </div>

            <button type="submit" className="mt-6 w-full py-3 px-4 bg-primary/90 hover:bg-primary text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-200 cursor-pointer">
              {isLoading ? "Loading..." : "Create Account"}
            </button>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-700">
                Log In
              </Link>
            </p>
          </form>
        </div>

        <div className="text-center text-sm mt-5 text-gray-500 hover:text-gray-800 transition-colors">
          <Link to={"/"} className="">Back to Home</Link>
        </div>

      </div>
    </div>
  )
}

export default SignupPage
