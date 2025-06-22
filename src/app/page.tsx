import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-row items-center justify-between bg-neutral-900 text-white">
            <div className="flex basis-1/4 m-3 bg-amber-400">
                A
            </div>
            <div className="flex basis-2/4 m-3 bg-blue-400">
                AA
            </div>
            <div className="flex basis-1/4 m-3 bg-green-400">
                A
            </div>
        </main>
    );
}
