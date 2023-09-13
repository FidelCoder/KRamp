// contexts/NotificationContext.tsx

import React, { createContext, useContext, useState, useCallback } from 'react';

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
}

const NotificationContext = createContext<{
  notification: Notification | null;
  setNotification: (notification: Notification | null) => void;
}>({
  notification: null,
  setNotification: () => {},
});

export const useNotification = () => {
  return useContext(NotificationContext);
};

interface Props {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
      {notification && (
        <div className={`fixed bottom-4 left-4 p-4 rounded-md text-white ${notification.type === 'success' ? 'bg-green-500' : notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
