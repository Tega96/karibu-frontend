import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-6 ">
            <h1>Hello world from the dashboard</h1>
            
            <Image src="/nft.png" alt="nft" width={350} height={350} />
        </div>
    )
}
export default Dashboard;