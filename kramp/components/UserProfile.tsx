// components/UserProfile.tsx

import React from 'react';
import { useUser } from '../contexts/UserContext';

const UserProfile: React.FC = () => {
  const { user, logout } = useUser();

  if (!user) return null;

  return (
    <div className="bg-gray-800 p-4 m-4 rounded-md flex items-center">
      <img src={user.avatar} alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <span className="text-lg font-medium">{user.name}</span>
        <span className="block text-sm text-gray-400">{user.email}</span>
      </div>
      <button onClick={logout} className="ml-auto bg-red-500 p-2 rounded-md text-white">Logout</button>
    </div>
  );
}

export default UserProfile;
