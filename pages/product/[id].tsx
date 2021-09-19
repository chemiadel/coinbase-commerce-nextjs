import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

export default function Home() {
  const [data, setData]=useState<any>()
    const {id}= useRouter().query

  useEffect(() =>{
    if(!id) return 
    fetch('/api/coinbase/checkout?id='+id)
      .then(res=> res.json())
      .then(json=> setData(json.data))
      .catch(err =>console.log(err))
    }
  ,[id])
  return <div className="hero bg-gray-10 pt-16">
            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 ">
                    <div className="justify-center col-span-7 rounded-lg	">
                      <img  className="object-contain	w-full	 rounded-lg" src={data?.logo_url}/>
                    </div>
                    <div className="hero-text col-span-5 space-y-8 py-6">
                        <h1 className="font-bold text-4xl text-gray-900 leading-tight">{data?.name}</h1>
                        <h2 className="font-semibold text-2xl max-w-lg text-gray-900 leading-tight"> {data?.local_price?.amount+' '+data?.local_price?.currency}</h2>
                        <p className="text-lg max-w-lg text-gray-900 leading-tight"> {data?.description}</p>
                        <a className="mr-2 border bg-green-300 hover:bg-green text-green-darkest font-bold py-2 px-4 rounded inline-flex items-center"
                        href={`https://commerce.coinbase.com/checkout/${id}`}
                        target="_blank"
                        >BUY</a>
                        {/* <button className="m-2 border border-gray-900 bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">ADD TO CART</button> */}
                    </div>

                </div>
            </div>
        </div>
}
