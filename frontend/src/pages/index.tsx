import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Categories from '../components/Categories'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Header />
        <div className="container h-full">
          <Categories />
          <span className="text-xs text-gray-300 m-2"> you have <strong>21,000</strong> foods to explore</span>
        </div>
      </main>

      <footer >

      </footer>
    </div>
  )
}

export default Home