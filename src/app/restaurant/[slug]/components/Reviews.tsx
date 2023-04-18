import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export default function Reviews({reviews}:{reviews:Review[]}) {
  return (
    <div>
          {/* REVIES */}
          <h1 className="font-bold text-2xl mt-5">
            What{reviews.length}{reviews.length===1 ? "person":"people"}  are saying
          </h1>

          {/* REVIEW CARD */}
       
       {
        reviews.map(review=>(
          <ReviewCard review={review} key={review.id} />
        ))
       }
           
          {/* REVIEW CARD */}
          {/* REVIES */}
    </div>
  )
}
