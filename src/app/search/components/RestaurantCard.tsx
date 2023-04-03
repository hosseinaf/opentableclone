import Link from "next/link";

export default function RestaurantCard(){
    return(
        <>
        {/* <Link href="/restaurant/milestones-stones"> */}
          <div className=" w-4/5 border-b pb-5 flex">
            
           
              <img
                className="w-44 rounded"
                src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
              />
              <div className="flex flex-col ml-3 mt-3">
                <h1>Aiāna Restaurant Collective</h1>
                <div className="flex mt-2">
                  <p>*****</p>
                  <p className="ml-3">Awesome</p>
                </div>
                <div className="flex">
                  <p>$$$</p>
                  <p className="ml-3">Mexician</p>
                  <p className="ml-3">Ottawa</p>
                </div>
                <Link href="/restaurant/milestones-stones" className="text-red-500 mt-5">View more information</Link>
              </div>
            </div>
            
        </>
    )
}