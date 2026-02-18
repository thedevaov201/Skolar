import React from 'react'


const Features = () => {
  return (
    <section className='min-h-auto px-4 py-24 w-full bg-gray-white'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>

        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <div>
                <span className='text-sm text-gray-500'>PLATFORM FEATURES</span>
                <h2 className='mt-4 mb-6 font-bold text-5xl md:max-w-sm'>
                    Learn, Connect,
                    <span className='font-light'> Download</span>
                </h2>
            </div>
            <p className='text-sm text-gray-500 md:max-w-sm'>
               SKOLAR brings together everything you need for academic success. 
               Access quality learning materials, engage with a vibrant student community, 
               and download resources—all designed to support your educational journey.
            </p>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='pb-8 bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all cursor-pointer'>
                <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                    <img alt="TechFlow brand identity" src='./tool1.jpg'
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className='mt-8 px-4 md:px-10'>
                    <div className='bg-green-300 rounded-full w-18 px-3 py-2 flex items-center justify-center whitespace-nowrap'>
                        <span className='text-sm text-white'>Learn</span>
                    </div>
                    <h3 className='my-4 font-bold text-3xl'>Curated Learning Articles</h3>
                    <p className='text-[17px] text-gray-500'>Access thousands of well-researched articles covering study techniques, academic skills, and subject-specific content.</p>
                </div>
            </div>
            
            <div className='pb-8 bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all cursor-pointer'>
                <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                    <div className="bg-gray-900 group w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300">
                        <span>icon</span>
                    </div>
                </div>

                <div className='mt-8 px-4 md:px-10'>
                    <div className='bg-green-300 rounded-full w-18 px-3 py-2 flex items-center justify-center whitespace-nowrap'>
                        <span className='text-sm text-white'>Connect</span>
                    </div>
                    <h3 className='my-4 font-bold text-3xl'>Student Community</h3>
                    <p className='text-[17px] text-gray-500'>Join a supportive network of peers, share experirnces, ask questions, and collaborate on academic projects.</p>
                </div>
            </div>

            <div className='pb-8 bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all cursor-pointer'>
                <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                    <img alt="TechFlow brand identity" src='./tool2.jpg'
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className='mt-8 px-4 md:px-10'>
                    <div className='bg-green-300 rounded-full w-18 px-3 py-2 flex items-center justify-center whitespace-nowrap'>
                        <span className='text-sm text-white'>Download</span>
                    </div>
                    <h3 className='my-4 font-bold text-3xl'>Resource Library</h3>
                    <p className='text-[17px] text-gray-500'>Download course materials, past questions, study guides, and reference documents organized by department and level.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Features
