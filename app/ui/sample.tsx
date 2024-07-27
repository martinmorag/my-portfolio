import { CommandLineIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { languages } from "@/app/ui/languages";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Skills | Martin Moraga's Portfolio",
};

export default function Page() {
  return (
    <main className="flex flex-col items-end w-[65vw] h-[90vh]  mx-auto mt-5 ">
      <CommandLineIcon className="w-[45px] h-[45px] relative top-0 right-0 mb-2"/>
      <div className="flex flex-col items-center h-[100%] w-[100%] bg-primary-back rounded-lg pb-5">
        <div className="flex flex-col items-center">
            <h1 className="text-[1.8rem] py-4">My Skills</h1>
            <div className="w-[50vw] flex flex-wrap">
                {languages.map((language : any) => {
                    return (
                        <div key={language.name} className="w-[33%] p-2">
                        <Image
                        src={language.url}
                        alt={`${language.name} Icon`}
                        width={50}
                        height={50}
                        className="mx-auto"
                        ></Image>
                            <div className="border-2 border-primary-hover rounded-lg m-2 bg-white" >
                                <div className={`h-4 w-[${language.percentage}%] bg-primary-back rounded-md`}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="">

        </div>

      </div>
    </main>
  );
}
