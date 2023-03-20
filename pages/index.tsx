import Image from "next/image";
import Layout from "@/components/layout";
import Input from "@/components/input";
import Button from "@/components/button";
import UserList from "@/components/userList";
import Header from "@/components/header";
import { useState } from "react";
import { User } from "@/types/User";
import { SearchRes } from "@/types/SearchRes";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState<SearchRes | null>(null);

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search) {
            setIsLoading(true);
            fetch(
                `  https://api.github.com/search/users?q=${search}&per_page=10`
            ).then((res) =>
                res
                    .json()
                    .then((data) => {
                        // console.log(data);
                        const users: User[] = data.items;
                        const searchRes: SearchRes = {
                            search: search,
                            users: users,
                        };
                        setResult(searchRes);
                    })
                    .finally(() => setIsLoading(false))
            );
        }
    };

    return (
        <>
            <Layout title="Home">
                <Header />
                <form
                    className="flex place-self-center space-x-1"
                    onSubmit={onSearchSubmit}
                >
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button type="submit" isLoading={isLoading} />
                </form>
                {result && <UserList result={result} />}

                {/* {JSON.stringify(result)} */}
                {/* <h1 className="text-3xl font-normal">Hello world!</h1> */}
            </Layout>
        </>
    );
}
