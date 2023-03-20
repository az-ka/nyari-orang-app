import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import ProfileHeader from "../../components/profileHeader";
import RepoList from "../../components/repoList";
import { UserDetail } from "../../types/UserDetail";
import fetcher from "../../utils/fetcher";

export default function Detail() {
    const router = useRouter();
    const { username } = router.query;

    const { data: user, error } = useSWR<UserDetail>(
        username && `https://api.github.com/users/${username}`,
        fetcher
    );

    return (
        <Layout title="Detail">
            <div className="py-10">
                <Head>
                    <title>Detail {user?.name}</title>
                </Head>
                <div>
                    <ProfileHeader user={user} />
                    <RepoList reposUrl={user?.repos_url} />
                </div>
            </div>
        </Layout>
    );
}
