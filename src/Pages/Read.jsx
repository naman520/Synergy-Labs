import React, { useEffect, useState } from 'react'


export default function Read() {

    const [users, setUser] = useState([])

    useEffect(() => {
        const fetchdata = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const json = await response.json()
                setUser(json)
            } catch (error) {
                console.log(error)
            }
        };
        fetchdata();
    },[])

  return (
  
       <div className='bg-blue-400 min-h-screen p-4 overflow-x-auto '>
        <p className=' lg:hidden pb-8 text-md font-bold'>PLEASE SWIPE RIGHT SIDE TO SEE THE CONTENT &#x2192; </p>
      <table className='min-w-full divide-y divide-gray-200 pt-20 '>
        <thead>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>Username</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>Email</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>Address</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>Phone</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>Website</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.name}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>{user.username}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>{user.email}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>{user.phone}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>{user.website}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
