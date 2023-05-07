 
import Header from "./components/Header";
export default function RestaurantLayout({
    children,
    params
}: {
  children: React.ReactNode;
  params:{slug:string}
}) {
  // console.log("params",params)
  return(
    <main>
  <Header name={params.slug}/>
    <div className="flex w-2/3 m-auto -mt-10 rounded  ">
      {children}
    </div>
    </main>
  
  ); 

}
