'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { MdShowChart } from "react-icons/md";
import { BiDollar } from "react-icons/bi";

function Navigation() {    
     const pathname = usePathname()
     console.log(pathname);
     
  return (
    <nav className="flex justify-center items-center w-full h-11 mt-2.5">
        <Link href={"/"} className={`${pathname === '/' ? 'bg-blue' : 'bg-blue-opacity'} flex justify-center items-center size-[38px] rounded-xl mr-8`}>
        <MdHome size={30} fill="white"/>
        </Link>
        <Link href={"/dashboard"} className={`${pathname === '/dashboard' ? 'bg-blue' : 'bg-blue-opacity'} flex justify-center items-center size-[38px] rounded-xl mr-8`}>
        <MdShowChart size={30} fill="white"/>
        </Link>
        <Link href={"/currency"} className={`${pathname === '/currency' ? 'bg-blue' : 'bg-blue-opacity'} flex justify-center items-center size-[38px] rounded-xl`}>
        <BiDollar size={30} fill="white"/>
        </Link>
    </nav>
  )
}

export default Navigation