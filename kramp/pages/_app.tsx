import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { UserProvider } from '../contexts/UserContext';
import { NotificationProvider } from '../contexts/NotificationContext';
import { ThemeProvider } from '../contexts/ThemeContext';



function MyApp({ Component, pageProps }: AppProps) {
  return (
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

  );
}

export default MyApp;
