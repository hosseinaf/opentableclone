import Link from "next/link";
import LoginModal from "./LoginModal";

export default function NavBar(){
    return(
        <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
              OpenTable
            </Link>

        <div className="flex ">
          
          <LoginModal isSignIn={true}  />
          <LoginModal isSignIn={false}  />
          <button className="border rounded p-1 px-4">Sign up</button>
        </div>
      </nav>
    )
}