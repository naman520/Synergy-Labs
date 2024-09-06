import React, { useState } from 'react'

export default function Delete() {

  const [id, setId] = useState('');

  const handleDelete = () =>{
    if(id){
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE',
        })
        .then(response => {
          if (response.ok){
            alert('User Deleted Successfully');
          }else{
            alert('Failed to delete User')
          }
        })
        .catch(error => {
          console.error('Error :', error);
        })
    }else{
      alert('Please enter valid id')
    }
  }


  return (
    <div className='bg-blue-400 min-h-screen flex justify-center items-center p-4'>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder='Enter User Id' className='border border-gray-300 rounded-md px-4 py-2 w-64'/>
        <button onClick={handleDelete}>Delete User</button>
    </div>
  )
}
