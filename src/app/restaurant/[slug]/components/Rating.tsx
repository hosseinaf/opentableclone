import { Review } from '@prisma/client'
import React from 'react'
import { CalculateReviewRatingAverage } from '../../../../../utils/CalculateReviewRatingAverage'
import Stars from '@/app/components/Stars'

export default function Rating({reviews}:{reviews:Review[]}) {
  return (
    <div>
        {/* RATING */}
        <div className="flex mb-3 p-1">
          <Stars reviews={reviews}/>
            <p>{CalculateReviewRatingAverage(reviews).toFixed(1 )}</p>
            <p className='ml-3'>{reviews.length }   Review{reviews.length ? "s":""}</p>
          </div>
          {/* RATING */}
    </div>
  )
}
