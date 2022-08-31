import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Collie Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Lotter app </h1>

      <Header/>
     
    </div>
  )
}

export default Home
