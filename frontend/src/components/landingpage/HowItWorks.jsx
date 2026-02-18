import { UserPlus, Search, GraduationCap } from "lucide-react"
const HowItWorks = () => {
  return (
    <section className='min-h-auto px-4 py-24 w-full bg-gray-100'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>
        <div className='text-center'>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">How Skolar Works</h2>
            <p className='text-gray-400 mt-2'>Get started in three steps</p>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='size-15 rounded-full flex items-center justify-center border-5 border-primary'>
                    <span className='text-primary text-3xl'>1</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 bg-white rounded-2xl shadow-lg border border-gray-100 text-center p-4 md:p-8">
                    <div className='size-15 text-white rounded flex items-center justify-center bg-primary'>
                        <UserPlus size={24} />
                    </div>
                    <h3 className='text-2xl font-bold'>Create Account</h3>
                    <p className='text-gray-500'>Sign up with your university email in less than a minute. Quick, simple, and secure registration process.</p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='size-15 rounded-full flex items-center justify-center border-5 border-primary'>
                    <span className='text-primary text-3xl'>2</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 bg-white rounded-2xl shadow-lg border border-gray-100 text-center p-4 md:p-8">
                    <div className='size-15 text-white rounded flex items-center justify-center bg-primary'>
                        <Search size={24} />
                    </div>
                    <h3 className='text-2xl font-bold'>Explore Content</h3>
                    <p className='text-gray-500'>Browse through thousands of articles, resources, and community posts tailored to your academic needs.</p>
                </div>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='size-15 rounded-full flex items-center justify-center border-5 border-primary'>
                    <span className='text-primary text-3xl'>3</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 bg-white rounded-2xl shadow-lg border border-gray-100 text-center p-4 md:p-8">
                    <div className='size-15 text-white rounded flex items-center justify-center bg-primary'>
                        <GraduationCap size={24} />
                    </div>
                    <h3 className='text-2xl font-bold'>Start Learning</h3>
                    <p className='text-gray-500'>Download materials, engage with the community, and accelerate your academic success with SKOLAR.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
