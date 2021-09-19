import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ProductCard from '../comps/product'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData]=useState([])

  useEffect(() =>{
    fetch('api/coinbase/checkouts')
      .then(res=> res.json())
      .then(json=> setData(json.data))
      .catch(err =>console.log(err))
    }
  ,[])
  return <div className="hero bg-gray-10 py-16">
            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    <div className="hero-text col-span-6">
                        <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">Don't listen to what they say, Go See</h1>
                        <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">Your ultimate travel companion. Carries all the information you need while travelling</p>
                    </div>
                    <div className="hero-image col-span-6 rounded-lg	">
                      <img className="rounded-lg	" src="https://www.bitdegree.org/crypto/storage/media/images/how-to-buy-cryptocurrency-1.jpg"/>
                    </div>
                </div>
            </div>
            <div className="py-16 px-8 grid grid-cols-3 gap-8">
              
              {data.map((item : any)=><ProductCard key={item.id} data={item} />)}
            </div>
        </div>
}
