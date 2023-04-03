import Link from "next/link";

export default function RestaurantNavbar(){
    return(
        <main>
              <nav className="border-b text-reg pb-2 ">
            <Link href="/restaurant/milestone-grill" className="mr-3">
              Overview
            </Link>
            <Link href="/restaurant/milestone-grill/menu">Menu</Link>
          </nav>
        </main>
    )
}