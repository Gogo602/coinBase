import { Link } from "react-router-dom";


export default function Home(){

    return (
        <div className="bg-[#1E0338] flex items-center justify-center h-screen w-full">
            <div className="space-y-10 text-center text-2xl">
                <h1 className="text-3xl">Welcome to coinBase</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                    <Link
                        to='/user'
                        className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] px-5 py-2 rounded-md"
                    >
                        GO TO USER
                    </Link>
                    <Link
                        to='/agent'
                        className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] px-5 py-2 rounded-md"
                    >
                        GOT TO AGENT
                    </Link>
                    <Link
                        to='admin'
                        className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] px-5 py-2 rounded-md"
                    >
                        GO TO ADMIN
                    </Link>
                </div>
            </div>
        </div>
    )
}