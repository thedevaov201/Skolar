import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
const Review = () => {
  return (
    <section className='min-h-auto px-4 py-24 w-full bg-white'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>
        <div>
            <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Trusted by Students Across Nigeria</h2>

            <div className='mt-20 overflow-hidden md:max-w-xl mx-auto flex flex-col space-y-8'>
                <p>"SKOLAR has completely transformed how I access learning materials and connect with my peers. 
                    The platform is intuitive, well-organized, and has everything I need in one place. I can easily find relevant articles, download resources for my courses, and engage with a supportive community of students."
                </p>
                <div className='flex items-center space-x-2'>
                    <img src='./user1.jpg' className='size-10 md:size-15 rounded-full bg-amber-200'/>
                    <div className='text-sm'>
                        <p className='text-bold'>Chioma Adebayo</p>
                        <span className='text-gray-400'>University of Lagos . computer Science . 300 Level</span>
                    </div>
                </div>
            </div>
            <div className=' mt-10 flex items-center justify-end space-x-3 md:max-w-xl mx-auto'>
              <div className='size-12 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition duration-300'>
                <ArrowLeft size={20} />
              </div>
              <div className='size-12 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition duration-300'>
                <ArrowRight size={20} />
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Review