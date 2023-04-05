import React from 'react'

export default function Title({name}:{name:string}) {
  return (
    <div>
         <h2 className="text-5xl font-bold border-b p-4 ">
           {name}
          </h2>
    </div>
  )
}
