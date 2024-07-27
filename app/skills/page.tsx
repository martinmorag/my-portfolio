import { CommandLineIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { languages, projects } from "@/app/ui/exports";
import { Metadata } from 'next';
import Link from "next/link";
 
export const metadata: Metadata = {
  title: "Skills | Martin Moraga's Portfolio",
};

export default function Page() {
  return (
    <main className="w-[90vw] h-[100%] mx-auto mb-[18vh] 
    flex flex-col items-end md:w-[65vw] md:min-h-[90vh] md:mx-auto md:mt-2 md:mb-4">
        <CommandLineIcon className="w-[45px] h-[45px] relative top-0 right-0 mb-2 invisible md:visible"/>
        <div className="flex flex-col items-center h-[100%] w-[100%] bg-primary-back rounded-lg pb-5">
          <div className="flex flex-col items-center">
              <h1 className="text-[1.8rem] py-4">My Skills</h1>
              <div className="w-[85vw] my-3 flex flex-wrap md:w-[45vw]">
                  {languages.map((language : {url : string, name: string, percentage: number}) => {
                      return (
                        <div key={language.name} className="w-[33%] p-2">
                          <Image
                            src={language.url}
                            alt={`${language.name} Icon`}
                            width={50}
                            height={50}
                            className="mx-auto"
                          />
                          <div className="border-2 border-primary-hover rounded-lg m-2 bg-white">
                            <div
                              className="h-4 bg-primary-back rounded-md"
                              style={{ width: `${language.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                  })}
              </div>
          </div>
          <div className="my-4 flex flex-col">
            <h1 className="text-[1.8rem] text-center pt-[3rem]">My Projects</h1>
              {projects.map((project) => {
                return (
                  <div className="w-[80vw] md:w-[35vw] pt-4">
                    <h3 className="mt-3 mb-2">{project.name}</h3>
                    <Link
                    href={project.url}>
                    <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    layout="responsive"
                    className="transition-transform transition-[0.5s] transition-ease-in-out rounded-lg shadow-md shadow-[black] hover:scale-105"
                    ></Image>
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
    </main>
  );
}
