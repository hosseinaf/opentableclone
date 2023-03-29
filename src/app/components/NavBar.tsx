import Link from "next/link";

export default function NavBar(){
    return(
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
    )
}