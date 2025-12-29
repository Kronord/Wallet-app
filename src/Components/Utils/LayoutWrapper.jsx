"use client";
import { usePathname } from "next/navigation";
import Header from "../Shared/Header";
import Navigation from "../Shared/Navigation";

function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideHeaderOn = ["/login", "/registration"];

  return (
    <div className="flex flex-col items-center">
      {!hideHeaderOn.includes(pathname) && <Header />}
      {!hideHeaderOn.includes(pathname) ? (
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
