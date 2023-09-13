// components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black to-purple-700 p-4">
      <div className="flex justify-between items-center">
        <div>
          {/* Logo here, you can use an img tag or inline SVG */}
          <span className="text-xl font-semibold">Kramp</span>
        </div>
        <div>
          {/* Notification Icon, using a dummy icon for now */}
          <span className="bg-red-500 rounded-full p-1">
            <i className="fas fa-bell"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
