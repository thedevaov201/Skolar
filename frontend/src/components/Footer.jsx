import React from 'react'

const Footer = () => {
  return (
    <section className='min-h-auto px-4 pt-24 pb-10 w-full bg-gray-50'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>

        <div className='bg-gray-950 rounded-2xl p-8 md:p-16'>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
            {/* column 1 */}
            <div>
              <h1 className='text-2xl font-bold text-white'>Skolar</h1>
            </div>

            {/* column 2 */}
            <div>
              <h3 className='font-bold text-xl text-white'>Platform</h3>
              <ul className='mt-5 space-y-4'>
                <li><a href='#' className='text-gray-400 text-sm'>Articles</a></li>
                <li><a href='#' className='text-gray-400 text-sm'>Resources</a></li>
                <li><a href='#' className='text-gray-400 text-sm'>Community</a></li>
                <li><a href='#' className='text-gray-400 text-sm'>About Us</a></li>
                <li><a href='#' className='text-gray-400 text-sm'>Contact</a></li>
              </ul>
            </div>

            {/* column 3 */}
            <div>
              <h3 className='font-bold text-xl text-white'>Connect</h3>
              <ul className='mt-5 space-y-4'>
                <li><a href='#' className='text-gray-400 text-sm'>Instagram</a></li>
                <li><a href='#' className='text-gray-400 text-sm'>Twitter</a></li>
                <li><a href='#' className='text-gray-400 text-sm'>LinkedIn</a></li>
              </ul>
            </div>

            {/* column 4 */}
            <div className='space-y-4'>
              <h3 className='font-bold text-xl text-white'>Stay Updated</h3>
              <p className='text-gray-400 text-sm'>Get the latest articles and resources</p>
            </div>

          </div>
          
          {/* Bottom Content */}
          <div className='mt-24 space-y-4 border-t border-t-gray-700 text-gray-500 font-bold text-[10px] md:text-sm  md:flex items-center justify-between pt-5'>
            <p>@ 2024 SKOLAR. All right reserved.</p>
            <p>Powered by AOV</p>
          </div>

        </div>
          
      </div>
    </section>
  )
}

export default Footer
