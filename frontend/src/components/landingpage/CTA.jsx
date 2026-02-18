import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  return (
     <section className='min-h-auto px-4 p-24 w-full bg-gray-100'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>
        <div className='bg-blue-950 rounded-2xl px-4 py-12 md:p-16 '>
            <h2 className='text-2xl md:text-6xl font-bold text-white md:max-w-2xl'>Ready to Transform your campus Experience?</h2>
            
            <div className='mt-32 md:flex items-center justify-between space-y-4'>
                <Link to="/signup" className="bg-white px-4 py-2 rounded-3xl flex items-center justify-between gap-2 whitespace-nowrap">
                  <p className="text-sm font-bold">Start Learning Now</p>
                  <div className="bg-gray-900 p-3 text-white flex items-center justify-center rounded-full">
                    <ArrowRight size={10}/>
                  </div>
                </Link>
                <div className='text-white md:max-w-110'>
                  <p className="text-sm md:text-xl">Join thousands of students already using SKOLAR</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default CTA
