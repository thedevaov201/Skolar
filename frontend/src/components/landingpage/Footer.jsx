import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <section className='min-h-auto px-4 pt-24 pb-10 w-full bg-gray-50'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>

        <div className='bg-gray-950 rounded-2xl p-4 md:p-16'>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
            {/* column 1 */}
            <div>
              <div className='flex items-center space-x-3'>
                <img src='./skolar-logo.png' className='size-5'/>
                <h1 className='ttext-xl md:text-2xl font-bold text-white'>Skolar</h1>
              </div>
              <p className='my-4 text-gray-400 text-sm'>Empowering student success</p>
              <div className=" py-2 border border-gray-700 rounded-md text-white flex items-center justify-center space-x-8">
                <p className="text-sm">Explore Platform</p>
                <ArrowRight size={15} />
              </div>
            </div>

            {/* column 2 */}
            <div>
              <h3 className='font-bold text-xl text-white'>Platform</h3>
              <ul className='mt-5 space-y-4'>
                <li><NavLink href='#' className='text-gray-400 text-sm'>Articles</NavLink></li>
                <li><NavLink href='#' className='text-gray-400 text-sm'>Resources</NavLink></li>
                <li><NavLink href='#' className='text-gray-400 text-sm'>Community</NavLink></li>
                <li><NavLink href='#' className='text-gray-400 text-sm'>About Us</NavLink></li>
                <li><NavLink href='#' className='text-gray-400 text-sm'>Contact</NavLink></li>
              </ul>
            </div>

            {/* column 3 */}
            <div>
              <h3 className='font-bold text-xl text-white'>Connect</h3>
              <ul className='mt-5 space-y-4'>
                <li><NavLink href='#' className='text-gray-400 text-sm'>Instagram</NavLink></li>
                <li><NavLink href='#' className='text-gray-400 text-sm'>Twitter</NavLink></li>
                <li><NavLink href='#' className='text-gray-400 text-sm'>LinkedIn</NavLink></li>
              </ul>
            </div>

            {/* column 4 */}
            <div className='space-y-4'>
              <h3 className='font-bold text-xl text-white'>Stay Updated</h3>
              <p className='text-gray-400 text-sm'>Get the latest articles and resources</p>
              <div className="flex">
                  <input type="email" placeholder="Your email address" className="p-2 bg-gray-800 text-white text-sm border border-gray-700 rounded-l-md focus:outline-none focus:border-primary w-full" />
                  <button className="p-2 bg-primary text-sm text-white rounded-r-md hover:bg-primary/90 whitespace-nowrap">Subscribe</button>
              </div>
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
