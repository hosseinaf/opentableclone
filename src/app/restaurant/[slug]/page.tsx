import Link from "next/link";

export default function RestaurantDetails(){
    return(
        <main>
             <main className="bg-gray-100 min-h-screen w-screen ">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
      <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
              OpenTable
            </Link>

        <div className="flex ">
          <button className="bg-blue-400 text-white rounded mr-3 p-1 px-4 ">
            Sign in
          </button>
          <button className="border rounded p-1 px-4">Sign up</button>
        </div>
      </nav>
      {/* NAVBAR */}
      {/* HEADER */}
      <div className="flex justify-center items-center  align- h-80 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        <h1 className=" text-white text-7xl   ">Milestones Grill(Toronto)</h1>
      </div>

      {/* HEADER */}
      {/* DESCRIPTION PORTION */}
      <div className="flex w-2/3 m-auto -mt-10 rounded  ">
        <div className="w-[70%] border rounded p-2 bg-white   shadow ">
        <nav className="border-b text-reg pb-2 ">
            <Link href="/restaurant/milestone-grill" className="mr-3">
              Overview
            </Link>
            <Link href="/restaurant/milestone-grill/menu">Menu</Link>
          </nav>
          <h2 className="text-5xl font-bold border-b p-4 ">
            Milesstone Grill
          </h2>
          {/* RATING */}
          <div className="flex mb-3 p-1">
            <p>***** 4.9</p>
            <p>600 Reviews</p>
          </div>
          {/* RATING */}
          {/* DESCRIPTION */}
          <p className="p-1 text-lg">
            the classics you love prepared with a perfect twist, all served up
            in an atmosphere that feels just right. That’s the Milestones
            promise. So, whether you’re celebrating a milestone, making the
            most of Happy Hour or enjoying brunch with friends, you can be
            sure that every Milestones experience is a simple and perfectly
            memorable one.
          </p>
          {/* DESCRIPTION */}
          {/* IMAGES */}
          <div className="border-b pb-2 mb-2">
            <h2 className="font-bold text-3xl mt-5 ml-2 ">5 photos</h2>
          </div>

          <div className="flex flex-wrap p-2 ">
            <img
              className="w-56 h-44 mr-1 mb-1"
              src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
              alt=""
            />
            <img
              className="w-56 h-44 mr-1"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
              alt=""
            />
            <img
              className="w-56 h-44"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
              alt=""
            />
            <img
              className="w-56 h-44 mr-1"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
              alt=""
            />
            <img
              className="w-56 h-44"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
              alt=""
            />
          </div>

          {/* IMAGES */}

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
        {/* right card */}
        <div className="w-[27%]  ">
          <div className="w-[85%] bg-white mx-auto border rounded p-4">
            <p className="  border-b font-bold text-center pb-4  ">
              Make a Reservation
            </p>

            {/* party size */}
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold p-1">
                Party size
              </label>
              <select name="" id="" className="mt-3 border-b pb-2">
                <option value="">1 person</option>
                <option value="">2 people</option>
              </select>
            </div>
             {/* party size */}

            {/* DATA */}
            <div className="flex justify-between mt-3 ">
              <div className="border-b pb-2 w-[50%]" >
              <p >Date</p>
              </div>
             
              <div className="flex flex-col ">
                <label htmlFor="" className="font-bold ">
                  Time
                </label>
                <select name="" id="" className="mt-3 border-b pb-2">
                  <option value="">7:30 AM</option>
                  <option value="">9:30 AM</option>
                </select>
              </div>
            </div>
          
            {/* DATA */}
            {/* <div  className="bg-red-700 rounded p-5 w-[100%] mt-5 ">
              <p className="text-white  text-center"> Find a Time</p>
            </div> */}
            <div className="mt-5">
              <button className="bg-red-600  w-full h-16 text-white rounded">Find a Time</button>

            </div>
            
          </div>
        </div>
          {/* right card */}
      </div>
      {/* DESCRIPTION PORTION */}
    </main>
  </main>
        </main>
    )
}