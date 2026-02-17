import React from 'react'

const CTA = () => {
  return (
     <section className='min-h-auto px-4 p-24 w-full bg-gray-100'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>
        <div className='bg-blue-950 rounded-2xl px-4 py-12 md:p-16 '>
            <h2 className='text-2xl md:text-6xl font-bold text-white md:max-w-2xl'>Ready to Transform your campus Experience?</h2>
            
            <div className='mt-32 md:flex items-center justify-between space-y-4'>
                <button className='bg-white text-white px-12 md:px-10 md:py-2 rounded-full'>
                    Start Learning Now
                </button>
                <div className='text-white text-sm md:max-w-65'>
                    <p>Join thousands of students already using SKOLAR</p>
                    <span>No credit card required . Free forever</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default CTA
