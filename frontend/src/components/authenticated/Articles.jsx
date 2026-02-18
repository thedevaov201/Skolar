const ArticlesList = [
    {title: "Effective Study Techniques for University Students", category: "Study Tips", readTime: "8 mins read"},
    {title: "Time Management Strategies for Busy Students", category: "Productivity", readTime: "6 mins read"},
    {title: "Understanding Research Methodology", category: "Research", readTime: "10 mins read"},
    {title: "Building a Successful Career in Academia", category: "Career", readTime: "7 mins read"},
    {title: "Maintaining Mental Health During Exams", category: "Wellness", readTime: "5 mins read"},
    {title: "Collaborative Learning: Benefits and Strategies", category: "Collaboration", readTime: "9 mins read"}
]
const Articles = () => {
  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {Articles.map((article, index) => (
            <div key={index} className='pb-2 bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all cursor-pointer'>
                <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
            <img alt="TechFlow brand identity" src='./tool1.jpg'
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
        </div>

        <div className='mt-8 px-4 md:px-6'>
            <div className='bg-green-300 rounded-full w-15 px-3 py-2 flex items-center justify-center whitespace-nowrap'>
                <span className='text-sm text-white'>{article.category}</span>
            </div>
            <h3 className='my-4 font-bold text-xl'>{article.title}</h3>
            <p className='text-[17px] text-gray-500'>Access thousands of well-researched articles covering study techniques, academic skills, and subject-specific content.</p>
        </div>
            </div>
        ))}
    </div>
  )
}

export default Articles
