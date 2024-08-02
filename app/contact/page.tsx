import { InboxArrowDownIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Contact from "@/app/ui/contact";

export default function Page() {
    return (
        <main className="w-[90vw] h-[100%] mx-auto mb-0 
        flex flex-col order-1 md:order-2 items-end md:w-[65vw] md:min-h-[90vh] md:mx-auto md:mt-2 md:mb-4">
            <InboxArrowDownIcon className="w-[45px] h-[45px] relative top-0 right-0 mb-2 invisible md:visible"/>
            <div className="flex flex-col items-center h-[100%] w-[100%] bg-primary-back rounded-lg pb-5">
                <h1 className="text-[1.85rem] py-[2.1rem]">Get in touch</h1>
                <div className="py-0 md:py-4">
                    <div className="flex flex-col p-0 w-[90vw] 
                    md:justify-around md:flex-row items-center md:w-[50vw] h-[100%] text-lg">
                        <div className="flex w-[75vw] justify-start 
                        md:justify-around items-center md:w-[18vw] h-[13.5vh] text-lg">
                            <div className="flex justify-center items-center bg-primary text-[white] w-[60px] h-[60px]">
                                <PhoneIcon className="w-[30px] h-[30px]"/>
                            </div>
                            <div className="flex flex-col pl-3 md:pl-0">
                                <p className="font-bold text-[1.3rem]">Phone Number</p>
                                <p>+5493756405074</p>
                            </div>
                        </div>
                        <div className="flex w-[75vw] justify-start 
                        md:justify-around items-center md:w-[24vw] h-[13.5vh] text-lg">
                            <div className="flex justify-center items-center bg-primary text-[white] w-[60px] h-[60px] md:mr-2">
                                <EnvelopeIcon className="w-[30px] h-[30px]"/>
                            </div>
                            <div className="flex flex-col pl-3 md:pl-0">
                                <p className="font-bold text-[1.3rem]">E-mail</p>
                                <p>moragamartin2@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] my-[2rem]">
                    <Contact />
                </div>
            </div>
        </main>
    )
}