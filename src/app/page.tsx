import Image from 'next/image';


 function Home() {
  return (
    <div className="flex flex-col flex-2 justify-center items-center">
      <h1>Hello world! Welcome back</h1>
      <Image src="/nft.png" alt="nft" width={400} height={400} />
      
    </div>
  );
}
export default Home;