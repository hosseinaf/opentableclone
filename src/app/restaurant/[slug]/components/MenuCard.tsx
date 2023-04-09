import { Item } from '@prisma/client'
import React from 'react'

export default function MenuCard({item}:{item:Item}) {
  return (
 
         <div className="border w-[49%] p-2 mb-2 ">
            <h2 className="font-bold">{item.name}</h2>
            <p className='font_light mt-1 text-sm'>{item.description}</p>
            <p className="mt-7 font-bold">{item.price}</p>
          </div>
    
  )
}
