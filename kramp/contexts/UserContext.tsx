// contexts/UserContext.tsx

import React, { createContext, useContext, useState } from 'react';
import { useNotification } from './NotificationContext';


interface User {
  name: string;
  email: string;
  avatar: string;
}

const UserContext = createContext<{
  user: User | null;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { setNotification } = useNotification();

  const login = () => {
    const mockUser = {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/path/to/avatar.png",
    };
    setUser(mockUser);
    setNotification({ message: 'Logged in successfully!', type: 'success' });

  };

  const logout = () => {
    setUser(null);
    setNotification({ message: 'Logged out successfully!', type: 'info' });

  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
