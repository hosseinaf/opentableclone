import Link from "next/link";

export default function RestaurantNavbar({slug}:{slug:string}){
    return(
        <main>
              <nav className="border-b text-reg pb-2 ">
            <Link href={`/restaurant/${slug}`} className="mr-3">
              Overview
            </Link>
            <Link href={`/restaurant/${slug }/menu`}>Menu</Link>
          </nav>
        </main>
    )
}