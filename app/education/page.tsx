import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Education | Martin Moraga's Portfolio",
};

export default function Page() {
  return (
    <main className="w-[90vw] h-[100%] mx-auto mb-[18vh] 
    flex flex-col items-end md:w-[65vw] md:min-h-[90vh] md:mx-auto md:mt-2 md:mb-4">
      <AcademicCapIcon className="w-[45px] h-[45px] relative top-0 right-0 mb-2 invisible md:visible"/>
      <div className="flex flex-col items-center h-[100%] w-[100%] bg-primary-back rounded-lg pb-5">
        <Image
        src="/BYUI_logo_black.svg"
        alt="Logo of BYU Idaho"
        width={150}
        height={150}
        className="w-[150px] h-[auto] my-[2.5rem]"
        ></Image>
        <div className="flex flex-col items-center w-[80%]">
          <div className="flex justify-between my-4 text-[1.25rem] font-bold">
            <h3 className="w-[40%]">Certificate of Web and Computer Programming</h3>
            <p className="flex-end">Received on July of 2023</p>
          </div>
          <p className="leading-relaxed">Writing of programs for various domains, designed effective websites, developed dynamic web pages following industry standards, and continually learned new technologies.</p>
        </div>
        <div className="flex flex-col items-center w-[80%]">
          <div className="flex justify-between my-4 text-[1.25rem] font-bold">
            <h3 className="w-[50%] pr-[5rem]">Certificate of Sofware Development</h3>
            <p>Received on July of 2024</p>
          </div>
          <p className="leading-relaxed">Have learned web development basics, demonstrated skills in HTML, CSS, JavaScript and NodeJs, and wrote code for server data handling. They can inject data into the DOM, design and build relational and NoSQL databases, implement CRUD tools with SQL, and solve problems using code.</p>
        </div>
      </div>
    </main>
  );
}