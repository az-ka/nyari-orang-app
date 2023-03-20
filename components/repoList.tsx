import { IconLayoutList, IconRefresh } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { Repos } from "../types/Repos";
import fetcher from "../utils/fetcher";
import moment from "moment";

export default function RepoList({ reposUrl }: Props) {
    const { data, error, mutate } = useSWR<Repos[]>(reposUrl, fetcher, {
        refreshInterval: 1000,
    });

    const isLoading = !data && !error;

    const onRefresh = () => {
        mutate();
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-10 space-y-5">
            <p className="inline-flex items-center space-x-3">
                <IconLayoutList className="w-6 h-6" />
                <span className="text-2xl font-bold">List Repository</span>{" "}
                <button
                    onClick={() => onRefresh()}
                    className="py-3 text-[#CECECE] hover:text-[#F2F3F5]"
                >
                    <IconRefresh className="w-4 h-4" />
                </button>
            </p>
            <div>
                {data?.map((repo, index) => (
                    <div
                        key={index}
                        className="flex flex-col hover:bg-[# w-full hover:bg-[#383A40] p-10"
                    >
                        <div className="flex justify-between">
                            <div>
                                <Link
                                    href={repo.html_url}
                                    className="text-xl font-bold mr-2"
                                >
                                    {repo.name}
                                </Link>
                                {repo.language && (
                                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-neutral-50 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-600">
                                        {repo.language}
                                    </span>
                                )}
                            </div>
                            <span className="grid grid-cols-1 text-sm  px-3 py-1 text-end">
                                {/* <div>{repo.language}</div> */}
                                <div>
                                    {moment(repo.created_at).format(
                                        "MMMM, DD YYYY"
                                    )}
                                </div>
                            </span>
                        </div>
                        <p className="text-sm truncate w-2/3">
                            {repo.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

interface Props {
    reposUrl?: string;
}
