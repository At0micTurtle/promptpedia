import { Inter } from 'next/font/google';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Provider from '@components/Provider';
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptpedia',
  description: 'Discover and share AI prompts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>        
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
};
