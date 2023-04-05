import Link from "next/link";
import { RestaurantCardType } from "../page";

interface Props{
  restaurant: RestaurantCardType
}

export default function RestaurantCard({restaurant}:Props){
    return(
        <main>
             {/* card */}
             <Link href="/restaurant/milestones-grill">
              <div className="w-64 h-72  overflow-hidden cursor-pointer border   m-3">
                <img
                  src={restaurant.main_image}
                  className="w-full h-36"
                ></img>
                <h2 className="p-1 font-bold">{restaurant.name}</h2>
                <div className="flex items-start">
                  <div className="mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <h2 className="mr-3">{restaurant.cuisine.name}</h2>
                  <p className="mr-3">$$$$</p>
                  <p>{restaurant.location.name}</p>
                </div>
                <p className="text-small mt-1 font-bold  ">
                  Book 3 times today
                </p>
              </div>
            </Link>
            {/* card */}
        </main>
    )
}