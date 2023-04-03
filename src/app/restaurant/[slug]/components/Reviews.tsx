
export default function Reviews() {
  return (
    <div>
          {/* REVIES */}
          <h1 className="font-bold text-2xl mt-5">
            What 100 people are saying
          </h1>

          {/* REVIEW CARD */}
          <div className="border-b pb-7 mb-7 mt-7">
            <div className="flex">
              <div className="w-1/6 flex flex-col items-center ">
                <div className="rounded-full bg-blue-400 w-16 h-16 flex justify-center items-center">
                  <h2 className="text-white text-2xl">MJ</h2>
                </div>
                <p className="text-center">Micheal Jordan</p>
              </div>

              <div className="flex  flex-col ml-16">
                <p className="font-bold">*****</p>
                <p className="text-lg font-light mt-5">
                  {" "}
                  Laurie was on top of everything! Slow night due to the snow
                  storm so it worked in our favor to have more one on one with
                  the staff. Delicious and well worth the money.
                </p>
              </div>
            </div>
          </div>
          {/* REVIEW CARD */}
          {/* REVIES */}
    </div>
  )
}
