"use client"; // Corrected from "use-client" to "use client"
import { userInfo, headerItems } from "@/constants/Constant";
import { navItems } from "@/models/Header";
import { useState } from "react";
import { BiMenu} from "react-icons/bi"
import {Link as ScrollLink} from "react-scroll"
const Header: React.FC = () => {
    const [itemNav, showNav] = useState<boolean>(true)
  return (
    <header className="bg-white text-black p-4 justify-between fixed-top-0 w-full z-20 md:flex sticky top-0">
      {/* Header Left Part */}
      <div className="text-3xl font-bold flex justify-between">
        <h2>{userInfo.name}</h2>
        <BiMenu size={40} className="md:hidden" 
        onClick={()=>showNav(prevState => !prevState)}
        />
      </div>

      {/* Header Right Part */}
      <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${itemNav?'hidden':'block'}`}>
      { Object.keys(headerItems).map(item =>(
         <ScrollLink
         to={headerItems[item as keyof navItems].page}
         key = {headerItems[item as keyof navItems].label}
         spy={true}
         smooth={true}
          className="block md:inline-block cursor-pointer" 
         >{headerItems[item as keyof navItems].label}
         </ScrollLink>
      ))}
      </div>
    </header>
  );
};

export default Header;
