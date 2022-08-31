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
import PropagateLoader from "react-spinners/PropagateLoader";


const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  console.log(address)

    if (isLoading) 
    return (
      <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2 mb-10">
          <img 
          src="https://yt3.ggpht.com/Icbp8wymqNkM5UyS_83XIrytKPNVT_wfHOpODP04MOLCBV3trdzSu9_X6tpbLcnrhTfkzdVxoQ=s88-c-k-c0x00ffffff-no-rj-mo" 
          alt=""
          />
          <h1 className="text-lg text-white font-bold">Loading </h1>
        </div>
        <PropagateLoader color="white" size={30} />
      </div>
    );
  
    if (!address) return <Login/>;

  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Collie Lottery</title>
      </Head>

      <Header/>

      <div>
        <div>
          <h1 className="text-5xl text-white front-semibold text-center">The Next Draw</h1>
        </div>
        <div>
          <div >
            <h2 className="text-sm">Total Pool</h2>
            <p>0.1 ETH</p>
          </div>
        </div>
      </div>

      
      <div></div>
    </div>
  );
};

export default Home
