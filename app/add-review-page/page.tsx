import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import AddReviewForm from "@/components/add-review-form";


export default async function Page({ searchParams }: { searchParams?: Promise<{ companyId?: string }> }) {
  const { companyId = "" } = (await searchParams) ?? {};
  return (
    <>
      <MainHeader />
      <main className="flex-1 flex flex-col">
        <section className="flex flex-col items-center p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Demo/Add a Review</h2>
          <AddReviewForm companyId={companyId} />
        </section>
      </main>
      <MainFooter />
    </>
  );
}
