import MainFooter from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import FilterButtons from "@/components/filter-buttons";
import SearchBar from "@/components/search-bar";
import ReviewShowcase from "@/components/review-showcase";
import NavLinks from "@/components/nav-links";



export default function Home() {
  return (
    <>
     
      <MainHeader />

      <main className="flex-1 flex flex-col ">
        <section className="bg-black flex flex-col justify-evenly items-center flex-nowrap gap-4">
          <h2 className=" text-8xl font-bold">
            <span className="text-green-500 ">Real</span> clients, <br/> real reviews 
          </h2>
          <p>Read the reviews and add your own</p>
          <NavLinks href="/add-review-page">
            <span className="bg-green-600 text-white rounded-full px-4 py-2 hover:bg-gray-900 inline-block">
              Add Review
            </span>
          </NavLinks>
          <br/>
          <h1 className="text-white">Search:</h1>

          <div className="hidden md:block mb-4">
            <SearchBar />
          </div>
        </section>
        <section className="bg-white  flex flex-col justify-evenly items-center flex-nowrap gap-4">
         
          
          <h1 className="text-black font-bold">Search categories:</h1>

          <FilterButtons />
        </section>
        <section className="bg-black py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-2xl font-bold mb-6">
              Latest reviews
            </h2>
            <ReviewShowcase />
          </div>
        </section>
      </main>

      <MainFooter />
    </>
  );
}
