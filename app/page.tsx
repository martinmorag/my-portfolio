import { HomeIcon, AcademicCapIcon, InboxArrowDownIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Home | Martin Moraga's Portfolio",
};

const links = [
  { name: "Education", href: "/education", icon: AcademicCapIcon },
  { name: "Skills", href: "/skills", icon: CommandLineIcon },
  { name: "Contact", href: "/contact", icon: InboxArrowDownIcon }
]

export default function Home() {

  return (
    <main className="w-[90vw] h-[100%] mx-auto mb-[18vh] 
    flex flex-col items-end md:w-[65vw] md:min-h-[90vh] md:mx-auto md:mt-2 md:mb-4">
      <HomeIcon className="w-[45px] h-[45px] relative top-0 right-0 mb-2 invisible md:visible" />
      <div className="flex flex-col justify-around items-center bg-primary-back w-[100%] h-[100%] rounded-lg p-2 ">
        <div className="flex flex-col items-center p-4 w-[85vw] md:w-[75%]">
          <h1 className="text-4xl pb-[3rem]">Welcome to my personal portfolio </h1>
          <span className="text-[1.05rem]">I am a passionate software development student eager to expand my skills and knowledge in the field. With a strong willingness to learn and grow, I am enthusiastic about opportunities to apply my education and contribute effectively in real-world projects</span>
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
      </div>
    </main>
  );
}
