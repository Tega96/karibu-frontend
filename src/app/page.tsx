import Link from "next/link";


 function Pages() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello world! Welcome back</h1>
      
      <ul className="flex flex-row gap-5 ">
        <li><Link href="/dashboard" className="py-2 px-4 bg-green-500 rounded-xl hover:bg-green-700">dashboard</Link></li>
        <li><Link href="/" className="bg-red-500 border py-2 px-5 rounded-xl hover:bg-green-500">home</Link></li>
      </ul>
    </div>
  );
}
export default Pages;