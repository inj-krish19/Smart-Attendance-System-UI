import { ThemeProvider } from '../context/ThemeContext';
import '../app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-indigo-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}