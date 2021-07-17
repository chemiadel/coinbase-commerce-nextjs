// import { ShoppingCartIcon } from '@heroicons/react/solid'
import {AiFillFacebook, AiFillYoutube, AiOutlineInstagram} from 'react-icons/ai'
import {FaYoutubeSquare} from 'react-icons/fa'

export default function Footer(){

    return <div className="h-16 w-full p-4 border-t-2 bg-green-900 flex flex-row px-20">
                    <AiFillFacebook className="text-white rounded-full	 w-8 h-8 p-1" />
                    <AiOutlineInstagram className="text-white rounded-full	 w-8 h-8 p-1" />
                    <FaYoutubeSquare className="text-white rounded-full	 w-8 h-8 p-1" />
    </div>
}