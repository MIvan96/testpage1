import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
export default function Contact() {
  return (
    <>
      <MainHeader />
      <main className="flex-1 flex flex-col">
        <section className="flex flex-col items-center p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Demo/Contact Us</h2>
          <p className="mb-4">
            Have any questions or feedback? Please feel free to contact us.
          </p>
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border p-2 rounded h-32"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </section>
      </main>
      <MainFooter />
    </>
  );
}
