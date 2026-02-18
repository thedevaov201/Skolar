import { Link } from "react-router-dom"
import { ArrowRight, Bookmark, Book, ArrowDownToLine, MessageCircle, FolderDown, Clock3 } from "lucide-react"

import TopBar from "../../components/authenticated/TopBar"
import LeftBar from "../../components/authenticated/LeftBar"

const DashboardPage = () => {
  return (
    <>
            <div className="w-full">
                <div className="bg-primary p-10 rounded-md flex items-center space-x-6">
                    <img src="./user1.jpg" className="size-15 rounded-full" />
                    <div>
                        <h2 className="text-white text-3xl font-bold">Welcome back, Adeleke Victory!</h2>
                        <p className="text-white font-semibold mt-2">University of Ilorin . Computer Science . 300 Level</p>
                    </div>
                </div>

                {/* Box 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                        <div className="size-12 flex items-center justify-center bg-primary rounded-md">
                            <Book size={24} className="text-white"/>
                        </div>
                        <h1 className="text-3xl mt-4">24</h1>
                        <p className="mt-2 text-sm text-gray-500">Articles Read</p>
                    </div>

                    <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                        <div className="size-12 flex items-center justify-center bg-green-400 rounded-md">
                            <ArrowDownToLine size={24} className="text-white"/>
                        </div>
                        <h1 className="text-3xl mt-4">12</h1>
                        <p className="mt-2 text-sm text-gray-500">Resources Downloaded</p>
                    </div>

                    <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                        <div className="size-12 flex items-center justify-center bg-primary rounded-md">
                            <MessageCircle size={24} className="text-white"/>
                        </div>
                        <h1 className="text-3xl mt-4">8</h1>
                        <p className="mt-2 text-sm text-gray-500">Community Post</p>
                    </div>             
                </div>

                {/* Box 2 */}
                <div className="mt-10">
                    <h1 className="text-xl font-semibold">Quick Actions</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                        <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                            <div className="size-12 flex items-center justify-center bg-primary rounded-md">
                                <Book size={24} className="text-white"/>
                            </div>
                            <h1 className="text-lg mt-4">Browse Articles</h1>
                            <p className="mt-2 text-sm text-gray-500">Explore curated learning content</p>
                        </div>

                        <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                            <div className="size-12 flex items-center justify-center bg-green-400 rounded-md">
                                <FolderDown size={24} className="text-white"/>
                            </div>
                            <h1 className="text-lg mt-4">Download Resources</h1>
                            <p className="mt-2 text-sm text-gray-500">Explore curated learning content</p>
                        </div>

                        <div className="px-6 py-4 bg-white rounded-md shadow-sm">
                            <div className="size-12 flex items-center justify-center bg-primary rounded-md">
                                <Book size={24} className="text-white"/>
                            </div>
                            <h1 className="text-lg mt-4">Join Community</h1>
                            <p className="mt-2 text-sm text-gray-500">Explore curated learning content</p>
                        </div>
                        
                    </div>
                </div>

                {/* Box 3 */}
                <div className="mt-10">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Recent Articles</h1>
                        <Link className="text-sm text-primary flex items-center space-x-2 font-semibold">
                          <span>View All</span>
                          <ArrowRight size={10}/>
                        </Link>
                    </div>

                    <div className="space-y-4 mt-3">

                        <div className="p-6 bg-white rounded-md shadow-sm">
                            <div className="flex items-center justify-between">
                                <h1 className="text-bold text-lg">Effective Study Techniques for University Students</h1>
                                <Link >
                                    <ArrowRight size={15} />
                                </Link>
                            </div>

                            <div className="mt-3 flex items-center space-x-4">
                                <p className="text-gray-400 flex items-center space-x-2">
                                    <Bookmark size={15} />
                                    <span className="text-sm">Study Tips</span>
                                </p>
                                <p className="text-gray-400 flex items-center space-x-2">
                                    <Clock3 size={15} />
                                    <span className="text-sm">8 mins read</span>
                                </p>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-md shadow-sm">
                            <div className="flex items-center justify-between">
                                <h1 className="text-bold text-lg">Time Management Strategies for Busy Students</h1>
                                <Link >
                                    <ArrowRight size={15} />
                                </Link>
                            </div>

                            <div className="mt-3 flex items-center space-x-4">
                                <p className="text-gray-400 flex items-center space-x-2">
                                    <Bookmark size={15} />
                                    <span className="text-sm">Productivity</span>
                                </p>
                                <p className="text-gray-400 flex items-center space-x-2">
                                    <Clock3 size={15} />
                                    <span className="text-sm">6 mins read</span>
                                </p>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-md shadow-sm">
                            <div className="flex items-center justify-between">
                                <h1 className="text-bold text-lg">Understanding Research Methodology</h1>
                                <Link >
                                    <ArrowRight size={15} />
                                </Link>
                            </div>
                            <div className="mt-3 flex items-center space-x-4">
                                <p className="text-gray-400 flex items-center space-x-2">
                                    <Bookmark size={15} />
                                    <span className="text-sm">Research</span>
                                </p>
                                <p className="text-gray-400 flex items-center space-x-2">
                                    <Clock3 size={15} />
                                    <span className="text-sm">12 mins read</span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
    </>
  )
}

export default DashboardPage
