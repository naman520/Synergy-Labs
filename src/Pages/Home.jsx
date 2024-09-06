import React from 'react'
import { Link } from 'react-router-dom'
import Read from './Read'

export default function Home() {
  return (
    <>
        <div className=' bg-lime-300 min-h-screen text-blue-900 '>
            <div className=' text-center pt-24 text-3xl font-bold'>
                CRUD Application
            </div>
            <div className='grid grid-cols-2 gap-10 text-center pt-20 sm:grid-cols-2 md:grid-cols-4'>
                <Link to='/create' className='shadow-xl shadow-white py-6 text-2xl font-medium hover:animate-bounce rounded-full px-11 bg-teal-400'>Create</Link>
                <Link to='/read' className='shadow-xl shadow-white py-6 text-2xl font-medium hover:animate-bounce rounded-full px-11 bg-teal-400'>Read</Link>
                <Link to='/update' className='shadow-xl shadow-white py-6 text-2xl font-medium hover:animate-bounce rounded-full px-11 bg-teal-400'>Update</Link>
                <Link to='/delete' className='shadow-xl shadow-white py-6 text-2xl font-medium hover:animate-bounce rounded-full px-11 bg-teal-400'>Delete</Link>
            </div>
        </div>
    </>
    
  )
}
