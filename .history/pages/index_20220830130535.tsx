import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractData,
  useContractCall,
} from "@thirdweb-dev/react";
import Login from '../components/Login';


const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  console.log(address)
  if (!address) return <Login/>;
    if (isLoading) {}
    return (
      <div>
        
      </div>
    );
  

  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Collie Lottery</title>
      </Head>

      <Header/>

      
     
    </div>
  )
}

export default Home
