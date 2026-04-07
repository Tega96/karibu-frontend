import Link from "next/link";

const Dashboard = () => {
    return (
        <div className="">
            <h1>Hello world from the dashboard</h1>
            <ul className="flex flex-row gap-5 ">
                <li><Link href="/dashboard" className="py-2 px-4 bg-green-500 rounded-xl hover:bg-green-700">dashboard</Link></li>
                <li><Link href="/" className="bg-red-500 border py-2 px-5 rounded-xl hover:bg-green-500">home</Link></li>
            </ul>
        </div>
    )
}
export default Dashboard;