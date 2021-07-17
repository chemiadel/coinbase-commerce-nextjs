import Link from 'next/link'


export default function ProductCard( {data} : any){

    return <div className="rounded-md border border-gray-200 w-86 place-content-center shadow-lg">
        <Link href={`/product/${data.id}`}>
            <img className="cursor-pointer" src={data.logo_url}/>
        </Link>
        <div className="flex flex-row p-3 items-center">
            <Link href={`/product/${data.id}`}>
            <a className="font-bold text-lg flex-grow"> {data.name}</a>
            </Link>
            <p className="font-semibold"> {data.local_price.amount+' '+data.local_price.currency}</p>
        </div>
    </div>
}