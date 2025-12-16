import { Clock, Heart } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
const Songslist = async () => {

  await new Promise((resolve)=>
  setTimeout(()=>{
    resolve("content is currently loading ...")
  },100))


  const songs = [
  {
    id: 1,
    artist: "Drake",
    title: "God's Plan",
    time: "3:18"
  },
  {
    id: 2,
    artist: "Fumez",
    title: "(Zone 2) Trizzac X Kwengface X Karma X LR – Plugged In",
    time: "4:11"
  },
  {
    id: 3,
    artist: "Travis Scott",
    title: "SICKO MODE",
    time: "5:12"
  },
  {
    id: 4,
    artist: "Eminem",
    title: "Lose Yourself",
    time: "5:26"
  },
  {
    id: 5,
    artist: "The Weeknd",
    title: "Blinding Lights",
    time: "3:20"
  },
  {
    id: 6,
    artist: "Kanye West",
    title: "Stronger",
    time: "5:07"
  },
  {
    id: 7,
    artist: "Post Malone",
    title: "Circles",
    time: "3:35"
  },
  {
    id: 8,
    artist: "Imagine Dragons",
    title: "Believer",
    time: "3:24"
  },
  {
    id: 9,
    artist: "Coldplay",
    title: "Viva La Vida",
    time: "4:02"
  },
  {
    id: 10,
    artist: "Linkin Park",
    title: "Numb",
    time: "3:07"
  }
];




  return (
    <div  className='w-[96%] mx-auto px-4'>
    
    <h2 className='text-3xl text-white mt-8 font-bold mb-6'>Songs Collection</h2>
    <ul className="space-y-4">

      {songs.map((song)=>(
        <Link key={song.id} href={`/music/${song.id}`}>
        <li  className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
>
          <div className="flex items-center gap-5">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Music img"
            className='h-16 w-16 bg-gray-700 rounded-md' />

            <div>
              <p className='text-gray-500 font-medium'>{song.artist}</p>
              <p className='text-sm text-gray-400'>{song.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-gray-400">
            <div className='flex items-center gap-1'>
              <Clock size={16}/>
              <span>{song.time}</span>
            </div>
            <Heart size={16} className='cursor-pointer hover:text-red-500 hover:fill-red-500'/>
            <button className="text-lg font-bold">⋮</button>

          </div>
        </li>
        </Link>
      ))}
    </ul>
    
    </div>
  )
}

export default Songslist