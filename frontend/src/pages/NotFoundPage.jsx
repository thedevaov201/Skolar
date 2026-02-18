import { FileExclamationPoint } from 'lucide-react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center h-[80vh]">
      <FileExclamationPoint className='text-yellow-400 fa-4x mb-4' />
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        class="text-white bg-primary hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back
      </Link>
    </section>
  )
}

export default NotFoundPage 
