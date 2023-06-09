import Price from "@/app/components/Price";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";
import { CalculateReviewRatingAverage } from "../../../../utils/CalculateReviewRatingAverage";
import Stars from "@/app/components/Stars";
 

interface Restaurant{
  id: number,
  name: string,
  main_image: string,
  price: PRICE,
  cuisine: Cuisine,
  location: Location,
  slug: string,
  reviews:Review[]
}
export default function RestaurantCard({restaurant}:{restaurant:Restaurant}){
  const renderRatingText=()=>{
     const rating=CalculateReviewRatingAverage(restaurant.reviews)
     
    if(rating>4) return "Awesome"
    else if(rating<=4 && rating>3)return "Good"
    else if(rating<=3 && rating>0) return "Average"
    else ""
  }
    return(
        <>
        {/* <Link href="/restaurant/milestones-stones"> */}
          <div className=" w-4/5 border-b pb-5 ml-4 flex">
            
           
              <img 
                className="w-44 h-36 rounded"
                src={restaurant.main_image}
              />
              <div className="flex flex-col ml-3 mt-3">
                <h1>{restaurant.name}</h1>
                <div className="flex mt-2">
                   <div className="flex mb-2"><Stars reviews={restaurant.reviews}/></div>
                  <p className="ml-3">{renderRatingText()}</p>
                  
                </div>
                <div className="flex">
                  <Price price={restaurant.price}></Price>
                  <p className="ml-3 capitalize">{restaurant.cuisine.name}</p>
                  <p className="ml-3 capitalize">{restaurant.location.name}</p>
                </div>
                <Link href={`/restaurant/${restaurant.slug}`} className="text-red-500 mt-5">View more information</Link>
              </div>
            </div>
            
        </>
    )
}