import { Link } from "react-router-dom"
import { Search } from "lucide-react"

import Articles from "../../components/authenticated/Articles"

const filters = [
    "All", "Study Tips", "Productivity", "Research", "Career", "Wellness", "Collaboration"
]

const ArticlePage = () => {
  return (
    <div>
      <h1 className='text-2xl'>Learning Articles</h1>
      <p className="mt-2 text-sm text-gray-500">Explore curated articles to enhance your academic journey</p>

      <div className='w-full p-6 bg-white rounded-md shadow-sm mt-10'>
        <div className='w-full relative'>
            <Search size={15} className="absolute top-3 left-3 text-gray-500"/>
            <input type="text" className="w-full border border-gray-300 px-10 py-2 rounded-sm outline-none" />

            {/* Filter Link */}
            <div className="flex items-center space-x-2 mt-4">
            {filters.map((filter, index) => (
                <div key={index} >
                    <Link className="px-3 py-1 bg-gray-100 text-gray-700 rounded-xl text-sm hover:bg-gray-200 transition-colors">
                        {filter}
                    </Link>
                </div>
            ))}
            </div>
        </div>
      </div>

      {/* Articles List */}
      <Articles />
    </div>
  )
}

export default ArticlePage
