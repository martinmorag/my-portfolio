"use client";

import { HomeIcon, AcademicCapIcon, InboxArrowDownIcon, CommandLineIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Education", href: "/education", icon: AcademicCapIcon },
  { name: "Skills", href: "/skills", icon: CommandLineIcon },
  { name: "Contact", href: "/contact", icon: InboxArrowDownIcon }
]

export default function Home() {
  const [dropdown, setDropdown] = useState(false);

  function dropdownButton() {
    setDropdown(prevState => !prevState); // Toggles the state
  }

  return (
    <main className="w-[90vw] h-[100%] mx-auto mb-0
    flex flex-col order-1 md:order-2 items-end md:w-[65vw] md:min-h-[90vh] md:mx-auto md:mt-2 md:mb-4">
      <HomeIcon className="w-[45px] h-[45px] relative top-0 right-0 mb-2 invisible md:visible" />
      <div className="flex flex-col justify-around items-center bg-primary-back w-[100%] h-[100%] rounded-lg p-2 ">
        <div className="flex flex-col items-center p-4 w-[85vw] md:w-[75%]">
          <h1 className="text-4xl pb-[3rem] pt-[2rem]">Welcome to my personal portfolio </h1>
          <span className="text-[1.05rem]">I am a passionate software development student eager to expand my skills and knowledge in the field. With a strong willingness to learn and grow, I am enthusiastic about opportunities to apply my education and contribute effectively to real-world projects.</span>
        </div>
        <div className="w-[85%] h-[100%]
        md:w-[75%] md:h-[100%]">
          <h2 className="text-[1.4rem] text-center my-4">Sections</h2>
          <div className="flex w-[100%] my-[1.5rem] justify-around md:my-[1rem]">
          {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <>
                    <Link
                    key={link.name}
                    href={link.href}
                    className={`flex flex-col w-[5.5rem] h-[5.5rem] md:w-[7rem] h-[7rem] items-center justify-center text-[1rem] md:text-[1.2rem] bg-white md:p-3 rounded-md`}
                    >
                    {link.name}
                    <LinkIcon className="w-[2rem] md:w-[2.3rem] h-[auto] pt-2" />
                    </Link>
                  </>
                );
          })}
          </div>
        </div>
        <div className="my-[2rem]">
          <button
          onClick={dropdownButton} 
          className="flex items-center justify-between w-[80vw] h-[15vh]
          md:w-[50vw] md:h-[10vh] rounded-[25px] bg-white px-4">
            <p className="flex-grow text-center text-[1.05rem]">What are important things in Web Development</p>
            <ChevronDownIcon className="w-[22px] h-[22px] text-primary" />
          </button>
          <div
            className={`w-[80vw]
              md:w-[50vw] bg-white mt-2 p-[1.5rem] rounded-[25px] transition-all duration-300 ease-in-out transform ${
              dropdown ? "max-h-[100%] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
          {dropdown && (
            <div className="text-[1rem]">
              <h3 className="text-[1.5rem] font-bold">API (Application Programming Interface)</h3>
              <p>In web development, APIs play a crucial role as they allow developers to interact with third-party data and services without needing to share the underlying code. APIs enable you to leverage functionalities provided by others and integrate them into your projects.</p>
              <p>Some key concepts to know are: REST APIs, HTTP request methods and CRUD operations.</p>
              <h3 className="text-[1.5rem] font-bold mt-5">Authentication</h3>
              <p>User authentication is essential for managing user access and security on a website. It involves allowing users to log in, log out, and access personalized resources, ensuring that certain pages or actions are restricted to authenticated users.</p>
              <p>Some authentication methods are: JWT, sessions and cookies, third party services.</p>
              <h3 className="text-[1.5rem] font-bold mt-5">Programming Languages (Backend)</h3>
              <p>Programming languages are essential for web development, as they allow you to communicate with and control computer systems. Web developers use a range of languages to implement application logic and manage backend operations.</p>
              <p>Some popular backend programming languages include: PHP, Python, Java.</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </main>
  );
}
