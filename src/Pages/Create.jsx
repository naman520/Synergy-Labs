import React, { useEffect, useState } from 'react';

export default function Create() {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify({
            name: name,
            
          }),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };

    // Call fetchData only if name is not empty
    if (name) {
      fetchData();
    }
  }, [name]); 
  

  // Event handler to update the name state
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
    <div className='bg-blue-400 min-h-screen flex justify-center items-center p-4'>
      
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter name"
        className='border border-gray-300 rounded-md px-4 py-2 w-64'
        />
      <button onClick={() => setName(name)}>Submit</button>
    </div>
    </>
  );
}
