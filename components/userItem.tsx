/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { User } from "@/types/User";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    users?: User;
}

export default function UserItem(props: Props) {
    return (
        <>
            <div className="flex justify-between items-center hover:bg-[# w-full hover:bg-[#383A40] p-5">
                <div className="inline-flex items-center">
                    <img
                        src={`${props.users?.avatar_url}`}
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <span className="ml-3">{props.users?.login}</span>
                </div>
                <span>
                    <Link href={`detail/${props.users?.login}`}>
                        <IconArrowRight
                            className="text-[#CECECE] hover:text-[#F2F3F5]"
                            size={30}
                        />
                    </Link>
                </span>
            </div>
        </>
    );
}
