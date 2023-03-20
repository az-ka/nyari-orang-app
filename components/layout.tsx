import Head from "next/head";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    title?: string;
    // any props that come into the component
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
            <Head>
                <title>
                    Nyari Orang {props.title ? `| ${props.title}` : ""}
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`flex min-h-screen text-white bg-[#2B2D31] font-poppins`}
            >
                <main className={`m-auto md:w-1/3`}>{children}</main>
            </div>
        </>
    );
}
