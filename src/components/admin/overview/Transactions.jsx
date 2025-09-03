import { assets } from "../../../assets/assets";



export default function Transactions() {


    return (
        <div className="border-2 border-white rounded-md mt-10 h-full">
            <div className="py-5 grid grid-cols-1 gap-5 px-10 md:px-20 md:grid-cols-2">
                <div className="space-y-8 mt-5">
                    <h3 className="text-xl font-bold">Transactions</h3>
                    <p>
                        Hi welcome, this page is the general overview section of the admin panel which
                        you could edit and modify the view of the page to ya’ preferred taste.
                    </p>
                    <button className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-white p-3 px-5 font-bold rounded-full">Learn More</button>
                </div>
                <div className="h-full">
                    <img src={assets.admintrans} alt="" className="w-[600px]"/>
                </div>
            </div>
        </div>
    )
}