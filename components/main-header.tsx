"use client";

import Image from "next/image";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";

export default function MainHeader() {
  const handleSearch = (query: string) => {
    console.log("searching for", query);
  };

  return (
    <>
      <header className="bg-white flex flex-row items-center justify-between gap-4 px-4 py-2">
        <div className="flex items-center gap-3">
          <NavLinks href="/">
            <Image
              src="/generated-image.png"
              alt="Home"
              width={56}
              height={56}
            />
          </NavLinks>
        </div>

        <div className="flex-1 flex items-center justify-center gap-6">
          <div className="hidden md:block max-w-md w-full">
            <SearchBar onSearch={handleSearch} />
          </div>
          <nav className="flex items-center gap-4">
            <NavLinks href="/about-us">About</NavLinks>
            <NavLinks href="/faq">FAQ</NavLinks>
            <NavLinks href="/contact">Contact</NavLinks>
            <NavLinks href="/companies">Companies</NavLinks>
          </nav>
        </div>

        <div className="hidden md:flex items-center">
          <NavLinks href="/add-review-page">
            <span className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-900 inline-block">
              Add Review
            </span>
          </NavLinks>
        </div>
      </header>
    </>
  );
}
