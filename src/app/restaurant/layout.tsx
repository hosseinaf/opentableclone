 
import Header from "./[slug]/components/Header";
export default function RestaurantLayout({
    children,
}: {
  children: React.ReactNode;
}) {
  return(
    <main>
  <Header/>
    <div className="flex w-2/3 m-auto -mt-10 rounded  ">
      {children}
    </div>
    </main>
  
  ); 

}
