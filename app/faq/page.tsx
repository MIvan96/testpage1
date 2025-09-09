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
              <h3 className="font-semibold">What is this page about?</h3>
              <p>
                This is a placeholder &ldquo;Frequently Asked Questions&rdquo; page.
                
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                what is this page for?
              </h3>
              <p>
               
                It is created for demonstration purposes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Is this a real website?</h3>
              <p>
                No, this is just a test website used for practicing and demonstrating
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
