import Link from "next/link";

export default function RestaurantCard(){
    return(
        <main>
             {/* card */}
             <Link href="/restaurant/milestones-grill">
              <div className="w-64 h-72  overflow-hidden cursor-pointer border">
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                  className="w-full h-36"
                ></img>
                <h2 className="p-1 font-bold">Milestones Grill</h2>
                <div className="flex items-start">
                  <div className="mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <h2 className="mr-3">Mexican</h2>
                  <p className="mr-3">$$$$</p>
                  <p>Toronto</p>
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