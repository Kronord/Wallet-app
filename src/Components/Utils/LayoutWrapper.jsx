"use client";
import { usePathname } from "next/navigation";
import { useAuthGuard } from "./authGuard";
import Header from "../Shared/Header";
import Navigation from "../Shared/Navigation";

function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const publicRoutes = ["/login", "/registration"];

  

  return (
    <div className="flex flex-col items-center">
      {!publicRoutes.includes(pathname) && <Header />}
      {!publicRoutes.includes(pathname) ? (
        <main className="flex flex-col items-center h-full w-full bg-gray-bg max-w-[425px]">
          <Navigation />
          {children}
        </main>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export default LayoutWrapper;
