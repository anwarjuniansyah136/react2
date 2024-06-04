/* eslint-disable react/prop-types */
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Heart } from "lucide-react";
import { Info } from "lucide-react";

export default function Content({userProps}){
    const handleInfo = ()=>{
        alert(`Nama  : ${userProps.name}\nHarga : ${userProps.price}`)
    }
    const handleLike = ()=>{
        alert(`aku ingin beli ${userProps.name}`)
    }
    const handleComment = ()=>{
        prompt("Silahkan Berikan Pendapat anda")
    }
    const handleShare = ()=>{
        alert("apakah kamu akan mengirimnya ke orang lain?")
    }
    return (
        <div className="m-2 w-[23%] h-[20%] flex flex-col items-center justify-center rounded-lg shadow-lg bg-white">
            <img className="pt-5 w-[70%] h-[37vh]" src={`${userProps.imgUrl}`} alt="" />
            <h2>{userProps.name}</h2>
            <p className="text-sm">{userProps.description}</p>
            <div className="flex pb-5 space-x-3 mt-2">
                <Info className='w-5 h-5 hover:opacity-50 cursor-pointer' onClick={handleInfo}/>
                <Heart className='w-5 h-5 hover:opacity-50 cursor-pointer' onClick={handleLike}/>
                <MessageCircle className='w-5 h-5 hover:opacity-50 cursor-pointer'onClick={handleComment}/>
                <Send className='w-5 h-5 hover:opacity-50 cursor-pointer' onClick={handleShare  }/>
            </div>
        </div>
    )
}