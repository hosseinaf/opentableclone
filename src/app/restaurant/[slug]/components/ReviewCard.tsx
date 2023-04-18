import Stars from '@/app/components/Stars'
import { Review } from '@prisma/client'
import React from 'react'

export default function ReviewCard({review}:{review:Review}) {
  return (
    <div>
           <div className="border-b pb-7 mb-7 mt-7">
            <div className="flex">
              <div className="w-1/6 flex flex-col items-center ">
                <div className="rounded-full bg-blue-400 w-16 h-16 flex justify-center items-center">
                  <h2 className="text-white text-2xl">{review.first_name[0]}{review.last_name[0]}</h2>
                </div>
                <p className="text-center">{review.first_name}{review.last_name}</p>
              </div>

              <div className="flex  flex-col ml-16">
                <p className="font-bold"><Stars rating={review.rating} reviews={[]}/></p>
                <p className="text-lg font-light mt-5">
                  {review.text}
                  
                </p>
              </div>
            </div>
          </div>
    </div>
  )
}
