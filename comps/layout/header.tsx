import {AiOutlineShoppingCart} from 'react-icons/ai'
import Link from 'next/link'

export default function Header(){

    return <div className="flex flex-row items-center h-16 w-full border-b-0 px-20">
        <div className="flex-grow">
            <Link href="/">
            <a className="text-3xl font-bold">Store</a>
            </Link>
        </div>
        <div className="space-x-2 hidden">
            <button className="border border-gray-900 bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center" >
            <AiOutlineShoppingCart className="w-5 h-5 mr-2" />
            <span>Cart (0)</span>
            </button>
        </div>

    </div>
}