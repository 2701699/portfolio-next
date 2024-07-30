import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header/page";
import Footer from "./Footer/page";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Login from "./Login/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Bilal Next",
  description:
    "Portfolio personel avec Next Js et Tailwind et Authentification et protection des routes avec Clerk",
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider> 
      <html lang="en">
        <body className={inter.className}>
          {/* en cas ou l'utilisateur n'est pas autheentifier il est redirige vers la page Login */}
          <SignedOut>
            <Login />
          </SignedOut>

          {/* Les routes disponible a l'utilisateur authentifie */}
          <SignedIn>
            <div className="flex items-center justify-between w-full p-0 bg-green-600">
              <div className="flex-grow">
                <Header />
              </div>
              {/* Boutton de logout customise selon la methode du login*/}
              <UserButton showName />
            </div>
            {children}
            <Footer />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
