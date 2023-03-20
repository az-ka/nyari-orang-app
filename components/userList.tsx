import { SearchRes } from "@/types/SearchRes";
import UserItem from "./userItem";

interface Props {
    result?: SearchRes;
}

export default function UserList(props: Props) {
    return (
        <>
            <div className="w-full">
                <p className="flex justify-center px-4 pt-4 text-gray-300">
                    Hasil Pencarian :&nbsp;
                    <span className="font-bold text-white">
                        {props.result?.search}
                    </span>
                </p>
                <div className="my-5">
                    {props.result?.users.map((user, index) => (
                        <UserItem key={index} users={user} />
                    ))}
                </div>
            </div>
        </>
    );
}
