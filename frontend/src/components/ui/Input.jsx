import React from 'react'

const Input = ({label,...props}) => {
  return (
    <div className='relative'>
      <label htmlFor={label} className="text-sm mb-1 font-bold">
        {label}
      </label>

      <input
         {...props}
         className='w-full pl-2 pr-3 py-2 mb-3 md:mb-6 bg-transparent rounded-lg border border-gray-400 placeholder-gray-400 text-sm focus:ring-1 focus:ring-primary/90 focus:outline-none transition duration-200'
      />
    </div>
  )
}

export default Input;
