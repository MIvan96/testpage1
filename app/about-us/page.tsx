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
            This is a placeholder &quot;About us&quot; page. <br />
            It is created for demonstration purposes.
          </p>
        </section>
      </main>
      <MainFooter />
    </>
  );
}
