import "./globals.css";
import { ReactNode } from "react";
import { Navbar, Footer } from "../components";

export const metadata = {
  title: "Jayden Yu | Portfolio",
  description: "Personal website of Jayden Yu – software & mathematics.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="night-sky-bg text-gray-100 min-h-screen flex flex-col relative">
        {/* Space background with stars */}
        <div className="stars-container fixed inset-0 z-0 overflow-hidden">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="stars4"></div>
          <div className="shooting-star" style={{ top: '20%', animationDelay: '0s' }}></div>
          <div className="shooting-star" style={{ top: '60%', animationDelay: '4s' }}></div>
          <div className="shooting-star" style={{ top: '80%', animationDelay: '8s' }}></div>
        </div>
        
        {/* White navbar with enforced styling */}
        <div className="relative z-20">
          <Navbar />
        </div>
        
        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
