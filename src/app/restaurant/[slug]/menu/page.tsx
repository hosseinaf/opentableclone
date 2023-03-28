export default function Menu(){
    return(
        <main className="bg-gray-100 min-h-screen w-screen ">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
      <nav className="bg-white p-2 flex justify-between">
        <a href="" className="font-bold text-gray-700 text-2xl">
          OpenTable
        </a>

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

      <div className="flex w-2/3 m-auto -mt-10 rounded  ">
        <div className="w-[100%] border rounded p-2 bg-white   shadow ">
          {/* RESAURANT NAVBAR */}
          <nav className="border-b text-reg pb-2 ">
            <a href="" className="mr-3">
              Overview
            </a>
            <a href="">Menu</a>
          </nav>
          {/* RESAURANT NAVBAR */}
          {/* MENU */}
          <div className="  p-4 ">
            <h2 className="font-bold text-2xl">Menu</h2>
          </div>
          <div className="border w-[40%] p-2 ">
            <h2 className="font-bold">Surf and Turf</h2>
            <p>A well done steak with lobster and rice</p>
            <p className="mt-4 font-bold">$80.00</p>
          </div>

          {/* MENU */}
        </div>
      </div>
    </main>
  </main>
    )
}