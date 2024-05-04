
'use client'
import Link from "next/link"
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
const Navbar = () => {
    const[isMenuOpen, setisMenuOpen] = useState(false)
    const tigglemenu =()=>{
          setisMenuOpen(!isMenuOpen)
    }
  return (
    <>
      <header className="w-full sticky top-0 left-0 z-10 border-b lg:py-5 py-3 ">
        <nav className="md:container mx-auto px-6">
            <div className="flex justify-between items-center">
                <div>
                 <Link href="/" className="text-lg font-semibold text-black">Securitynet.ai</Link>
                </div>

                {/* for large devices */}
                <div className="lg:flex items-center hidden">
                   <Link href={"/#"}  className="px-4 text-sm text-black hover:text-red-500 transition-all uppercase">security.ai</Link>
                   <Link href={"/#"} className="px-4 text-sm text-black hover:text-red-500 transition-all uppercase">tokenomics</Link>
                   <Link href={"/#"} className="px-4 text-sm text-black hover:text-red-500 transition-all uppercase">About</Link>
                   <Link href={"/#"} className="px-4 text-sm text-black hover:text-red-500 transition-all uppercase">contact</Link>
                   <Link href={"/#"} className="text-sm text-black hover:text-red-500 uppercase">Blog</Link>
                </div>

                <div className="lg:block hidden">
                  <Link href={"/#"} className="text-sm font-semibold text-Black transition-all bg-yellow py-3.5 px-7 rounded-xl hover:border-red-800 hover:bg-transparent hover:border uppercase ">white paper</Link>
                </div>
               
                {/* menu btn from small devicess */}
                <div className="lg:hidden block text-3xl text-indigo-300" onClick={tigglemenu}>
                   <MdOutlineMenuOpen />
                </div>
            </div>

            {/*nav items for small screen  */}
            {
                isMenuOpen &&(
                    <div className="mt-4">
                        <Link href={"/#"}  className="uppercase  block mb-3 text-sm font-semibold  text-black hover:text-red-500 transition-all ">security.ai</Link>
                        <Link href={"/#"} className="uppercase  block mb-3 text-sm font-semibold  text-black hover:text-red-500 transition-all">tokenomics</Link>
                        <Link href={"/#"} className="uppercase  my-2 text-sm font-semibold  text-black hover:text-red-500 transition-all">About</Link>
                        <Link href={"/#"} className="uppercase  block py-3 text-sm font-semibold  text-black hover:text-red-500 transition-all">contact</Link>
                        <Link href={"/#"} className="py-3 text-base font-semibold  text-black hover:text-red-500">Blog</Link>
                <div className="">
                  <Link href={"/#"} className="text-sm mt-3 font-semibold text-Black leading-5 transition-all bg-yellow w-[100px] h-10 flex items-center justify-center rounded-sm hover:border-red-800 hover:bg-transparent hover:border cursor-pointer ">white paper</Link>
                </div>
                    </div>
                )
            }
        </nav>
      </header>
    </>
  )
}

export default Navbar
