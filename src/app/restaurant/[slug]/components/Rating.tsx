import { Review } from '@prisma/client'
import React from 'react'
import { CalculateReviewRatingAverage } from '../../../../../utils/CalculateReviewRatingAverage'

export default function Rating({reviews}:{reviews:Review[]}) {
  return (
    <div>
        {/* RATING */}
        <div className="flex mb-3 p-1">
            <p>*****{CalculateReviewRatingAverage(reviews).toFixed(1 )}</p>
            <p className='ml-3'>{reviews.length }   Review{reviews.length ? "s":""}</p>
          </div>
          {/* RATING */}
    </div>
  )
}
