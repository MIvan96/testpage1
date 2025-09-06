import Image from "next/image";
import NavLinks from "./nav-links";

export default function MainFooter() {
  return (
    <>
      <footer className=" bg-black flex flex-row justify-around items-start flex-nowrap gap-4 ">
        <NavLinks href="/">
          <Image src="/generated-image.png" alt="Home" width={40} height={40} />
        </NavLinks>
        <div className="flex gap-4 justify-evenly w-auto h-auto ">
          <NavLinks href="./about-us">About</NavLinks>
          <NavLinks href="./faq">FAQ</NavLinks>
          <NavLinks href="./contact">Contact</NavLinks>
          <NavLinks href="./companies">Companies</NavLinks>
        </div>
      </footer>
    </>
  );
}
