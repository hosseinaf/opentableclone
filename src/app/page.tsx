import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen '>
     <main className='max-w-screen-2xl m-auto bg-white'>
     {/* NAVBAR */}
      <nav className='bg-white p-2 flex justify-between'>
        <a href='' className='font-bold text-gray-700 text-2xl'>OpenTable</a>
        <div className='flex '>
          <button className='bg-blue-400 text-white rounded mr-3 p-1 px-4 '>Sign in</button>
          <button className='bg-blue-400 text-white rounded p-1 px=4'>Sign up</button>

        </div> 
      </nav>
         {/* NAVBAR */}
         {/* Header */}
         <div className='h-52  bg-gradient-to-r from-[#0f1f47] to-[#5f6984] text-center p-2'>
          <h2 className='text-white font-bold text-5xl mb-2' >Find your table for any occasion</h2>

         </div>
          {/* Header */}

      </main>
    </main>
  )
}
