interface Props {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props) {
    return (
        <>
            <input
                type="text"
                id="helper-text"
                className="bg-[#383A40] border-none text-gray-300 text-lg rounded-lg focus:ring-[#313338] focus:border-[#313338] block w-full p-5 placeholder-gray-300 "
                placeholder="Ketikan Nama GitHub Nya"
                value={props.value}
                onChange={props.onChange}
            />
        </>
    );
}
