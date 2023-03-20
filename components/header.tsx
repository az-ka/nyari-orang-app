import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="flex justify-center m-5 md:m-10 text-white">
                <IconBrandGithub className="hover:text-[#F2F3F5] h-24 w-24 md:h-[200px] md:w-[200px]" />

                <p className="font-semibold text-5xl md:text-8xl ">
                    Nyari <br /> Orang
                </p>
            </div>
        </>
    );
}
