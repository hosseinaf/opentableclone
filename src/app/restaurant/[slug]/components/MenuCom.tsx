import React from 'react'
import MenuCard from './MenuCard'
import { Item } from '@prisma/client'

export default function MenuCom({menu}:{menu:Item[]}) {
  return (
    <div >
        {/* MENU */}
        <div className="  p-4 ">
            <h2 className="font-bold text-2xl">Menu</h2>
          </div>

          
         
      


      {
        menu.length ? (  <div className='flex flex-wrap justify-between  '>
        {
           menu.map(item=>(
             <MenuCard key={item.id} item={item}/>
           ))
          }
        </div>):(
           <div className='flex flex-wrap justify-between  '>
           <p>This restaurant does not have a menu</p>
           </div>
        )
      }
       
      

          {/* MENU */}
    </div>
  )
}
