
"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export function useAuthGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const token = useSelector((s) => s.auth.token);
  let secureId = '';

  const publicRoutes = ["/login", "/register"];

  useEffect(() => {
    if (!token && !publicRoutes.includes(pathname)) {
      router.replace("/login");
      secureId = 'secure';
    }
  }, [token, pathname, router]);
}
