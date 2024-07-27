"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, AcademicCapIcon, InboxArrowDownIcon, CommandLineIcon } from "@heroicons/react/24/outline";


const links = [
    { name: "Home", href: "/", icon: HomeIcon},
    { name: "Education", href: "/education", icon: AcademicCapIcon},
    { name: "Skills", href: "/skills", icon: CommandLineIcon},
    { name: "Contact", href: "/contact", icon: InboxArrowDownIcon}
]

export default function Sidenav() {
    const pathname = usePathname();

    return (     
        <>
            <div className="flex fixed bottom-0 w-[90vw] h-[13vh] mb-3 mx-auto left-1/2 transform -translate-x-1/2 rounded-md md:mx-4 md:mb-4 mt-[100px] md:py-4 bg-primary-back 
            md:relative md:block md:w-[22vw] md:h-[400px] md:mx-auto">
                <Image
                src="/myself.jpg"
                alt="Photo of myself"
                width={300}
                height={200}
                className="hidden
                rounded-md md:block md:w-[60%] md:h-[auto] mx-auto py-0 mb-0 mt-[-2rem] relative top-[-2rem]"
                />
                <h1 className="hidden md:block text-center text-[1.3rem] pb-2">Martin Moraga</h1>
                <div className="hidden md:flex flex-col justify-between">
                    {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[44px] w-[75%] items-center justify-center bg-white text-center my-2 mx-auto rounded-md hover:bg-primary-hover
                            ${ isActive ? 'border-4 border-primary-hover' : ''
                        }`}
                        >
                        {link.name}
                        </Link>
                    );
                    })}
                </div>
                <div className="flex md:hidden w-[100%] h-[100%] justify-center items-center ">
                    {links.map((link) => {
                    const LinkIcon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[50px] w-[50px] items-center justify-center bg-white text-center mx-auto rounded-md
                            ${ isActive ? 'border-4 border-primary-hover' : ''
                        }`}
                        ><LinkIcon className="w-[2rem] h-[auto] " />
                        </Link>
                    );
                    })}
                </div>
            </div>
            <div className="hidden md:flex w-[50%] mx-auto justify-around relative">
                <Link href="https://www.instagram.com/martin_morag/">
                    <Image
                    src="/instagram.png"
                    alt="Instagram Icon"
                    width={35}
                    height={35}
                    ></Image>
                </Link>
                <Link href="https://github.com/martinmorag">
                    <Image
                    src="/github.png"
                    alt="GitHub Icon"
                    width={35}
                    height={35}
                    ></Image>
                </Link>
            </div>
        </>
    );
}
  