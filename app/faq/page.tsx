import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
export default function Faq() {
  return (
    <>
      <MainHeader />
      <main className="flex-1 flex flex-col">
        <section className="flex flex-col items-center p-8  ">
          <h2 className="text-2xl font-bold mb-4">
            Demo/Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">What is this website about?</h3>
              <p>
                This is a demo project showcasing Next.js functionality and
                modern web design practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can I use this project for my own work?
              </h3>
              <p>
                Yes, feel free to take inspiration or reuse parts of it for your
                own learning projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Is this a real business?</h3>
              <p>
                Nope, this is just a test page used for experimenting with
                Next.js.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </>
  );
}
