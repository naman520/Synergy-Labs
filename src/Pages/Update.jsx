import React, { useEffect, useState } from 'react';

export default function Update({ id }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
      setName(user.name);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Error fetching user');
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          name: name,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedUser = await response.json();
      console.log('User updated:', updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Error updating user');
    }
  };

  return (
    <div className='bg-blue-400 min-h-screen flex justify-center items-center p-4'>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}
