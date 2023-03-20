/* eslint-disable @next/next/no-img-element */
import React from "react";
import { UserDetail } from "../types/UserDetail";

export default function ProfileHeader({ user }: Props) {
    if (!user) return null;

    const StatsItem = ({ value, label }: { value: number; label: string }) => {
        return (
            <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-gray-300">{value}</p>
                <p className="font-semibold text-gray-300">{label}</p>
            </div>
        );
    };

    return (
        <div className="flex flex-row items-center space-x-7 justify-center text-[#ffff]">
            {/* <span className="px-80 py-12 top-0 bg-white absolute"></span> */}
            <img
                src={`${user?.avatar_url}`}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full p-1 ring-[3px]  ring-[#ffff]"
            />
            <div>
                <div className="flex flex-col">
                    <span className="text-3xl font-semibold">{user?.name}</span>
                    <span className=" text-base font-light">#{user.id}</span>
                </div>
                <div className="inline-flex items-center space-x-5 ">
                    <StatsItem value={user?.followers} label="Followers" />
                    <StatsItem value={user?.following} label="Following" />
                    <StatsItem
                        value={user?.public_repos}
                        label="Public Repos"
                    />
                </div>
            </div>
        </div>
    );
}

interface Props {
    user?: UserDetail;
}
