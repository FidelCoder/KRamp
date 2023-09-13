import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { UserProvider } from '../contexts/UserContext';
import { NotificationProvider } from '../contexts/NotificationContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>

    <ThemeProvider>

    <UserProvider>
      <NotificationProvider>
      <Layout>
        {/* <Header /> */}
        <Component {...pageProps} />
      </Layout>
      </NotificationProvider>

    </UserProvider>
    </ThemeProvider>
    </AuthProvider>

  );
}

export default MyApp;
