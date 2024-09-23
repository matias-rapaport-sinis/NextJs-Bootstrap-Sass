
import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{height : "100vh"}}>
      <body style={{height : "100vh"}}>
        {children}
      </body>
    </html>
  );
}
