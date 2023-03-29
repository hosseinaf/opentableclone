import Link from "next/link"
import NavBar from "../components/NavBar"
export default function Search(){
    return(
        <main className="bg-gray-100 min-h-screen w-screen ">
        <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar/>
          {/* HEADER */}
          <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <div className="text-left text-lg py-3 m-auto flex justify-center ">
              <input
                className="rounded  mr-3 p-2 w-[450px]"
                type="text"
                placeholder="State, city or town"
              />
              <button className="rounded bg-red-600 px-9 py-2 text-white">
                Let's go
              </button>
            </div>
          </div>
          {/* HEADER */}
          <div className="flex py-4 m-auto w-2/3 justify-between items-start  ">
            {/* SEARCH SIDE BAR */}
            <div className="w-1/5 ">
              <div className="border-b pb-4">
                <h1 className="mb-2">Region</h1>
                <p className="font-light text-reg">Toronto</p>
                <p className="font-light text-reg">Ottawa</p>
                <p className="font-light text-reg">Montreal</p>
                <p className="font-light text-reg">Hamilton</p>
                <p className="font-light text-reg">Kingston</p>
                <p className="font-light text-reg">Niagara</p>
              </div>
              <div className="border-b pb-4 mt-3">
                <h1 className="mb-2">Cuisine</h1>
                <p className="font-light text-reg">Mexican</p>
                <p className="font-light text-reg">Italian</p>
                <p className="font-light text-reg">Chinese</p>
              </div>
              <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                  <button className="border w-full text-reg font-light rounded-l p-2">
                    $
                  </button>
                  <button className="border-r border-t border-b w-full text-reg font-light p-2">
                    $$
                  </button>
                  <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
                    $$$
                  </button>
                </div>
              </div>
            </div>
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
                <a href="" className="text-red-500 mt-5">View more information</a>
              </div>
            </div>
          </div>
        </main>
      </main>
    )
}