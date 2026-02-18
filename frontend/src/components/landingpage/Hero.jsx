import { Newspaper, FileDown, Users } from "lucide-react"
const Hero = () => {
  return (
    <section className='min-h-screen px-4 pt-35 pb-24 w-full bg-gray-100'>
      <div className='md:max-w-7xl md:mx-auto md:px-20'>

        <div className='md:max-w-4xl mx-auto md:flex flex-row items-center justify-center md:gap-30'>

            <div className='md:min-w-xs'>
              <div className='bg-gray-600 rounded-full px-4 py-2 whitespace-nowrap md:max-w-sm'>
                <span className='text-sm text-white'>Join 12,000+ students already learning</span>
              </div>
              <h1 className='mt-5 text-5xl md:text-7xl leading-14 md:leading-20'>
                Your Campus
                <span className='font-light'> Learning Hub</span>
              </h1>
              <p className='text-lg text-gray-400 mt-4 mb-8'>
                  Access curated articles, download resources, and connect with peers-all in one platform built
                  for University Students.
              </p>
              <button className='text-white px-12 py-3 md:px-10 md:py-2 bg-primary/90 hover:bg-primary transition rounded-full'>
                  Get Started Free
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg mt-10 p-6 md:p-8 border border-gray-100 md:min-w-xs"> 
                <div className='hero-stat space-y-6'>
                    <div className='container'>
                      <div className='size-12 bg-purple-100 rounded-xl flex items-center justify-center'>
                        <Newspaper size={24} className="text-purple-500"/>
                      </div>
                      <div>
                        <p>10,000+</p>
                        <span>Articles</span>
                      </div>
                    </div>

                    <div className='container'>
                      <div className='size-12 bg-yellow-50 rounded-xl flex items-center justify-center'>
                        <FileDown size={24} className="text-yellow-500"/>
                      </div>
                      <div>
                        <p>500+</p>
                        <span>Resources</span>
                      </div>
                    </div>

                    <div className='container'>
                      <div className='size-12 bg-primary/10 rounded-xl flex items-center justify-center'>
                        <Newspaper size={24} className="text-primary/90"/>
                      </div>
                      <div>
                        <p>Active</p>
                        <span>Community</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
