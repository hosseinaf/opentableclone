import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen ">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className=" flex px-36 py-10">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  );
}
