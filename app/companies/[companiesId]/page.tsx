import data from "@/data/data.json";
import Link from "next/link";
import Ratings from "@/components/ratings";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import { notFound } from "next/navigation";

type Company = {
  id: string;
  name: string;
  type: string;
  address: string;
  description: string;
};

type Review = {
  id: string;
  businessId: string;
  username: string;
  rating: number;
  comment: string;
};



export default async function CompanyPage({ params }: { params: Promise<{ companiesId: string }> }) {
  const { companiesId } = await params;

  const businesses: Company[] = data.businesses;
  const reviewsData: Review[] = data.reviews;

  const business = businesses.find((b) => b.id === companiesId);
  const reviews = reviewsData.filter((r) => r.businessId === companiesId);

  if (!business) {
    return notFound();
  }

  return (
    <>
      <MainHeader />
      <main className="flex-1 flex flex-col">
      <section className="flex flex-col items-center p-8 gap-6">
        <div className="w-full max-w-3xl">
          <Link
            href="/companies"
            className="inline-flex items-center text-green-600 hover:underline mb-4"
          >
            ← Back to Companies
          </Link>
        </div>
        <div className="w-full max-w-3xl border rounded-lg p-6 shadow-sm bg-white">
          <h1 className="text-2xl text-gray-700 font-bold mb-2">{business.name}</h1>
          <p className="text-gray-700">
            <span className="font-semibold">Type:</span> {business.type}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span> {business.address}
          </p>
          <p className="mt-3 text-gray-800">{business.description}</p>
          <div className="mt-4">
            <Link href={`/add-review-page?companyId=${companiesId}`} className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
              Add review
            </Link>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-3">Reviews</h2>
          {reviews.length === 0 ? (
            <p className="text-gray-600">No reviews yet.</p>
          ) : (
            <ul className="space-y-3">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="border rounded-lg p-4 shadow-sm bg-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <strong className="text-sm text-gray-700">
                      {review.username}
                    </strong>
                    <Ratings rating={review.rating} />
                  </div>
                  <p className="mt-1 text-gray-800">{review.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      </main>
      <MainFooter />
    </>
  );
}
