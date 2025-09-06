import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
export default function AboutUs() {
  return (
    <>
      <MainHeader />
      <main className="flex-1 flex flex-col">
        <section className="flex flex-col items-center p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Demo/About Us</h2>
          <p>
            This is a demo website built with <strong>Next.js</strong>.<br />
            The goal of this project is to practice building modern web
            applications with reusable components, routing, and server-side
            rendering.
            <br /> We focus on clean code, simple design, and scalability.
          </p>
        </section>
      </main>
      <MainFooter />
    </>
  );
}
