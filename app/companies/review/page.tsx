import data from "@/data/data.json";
import Link from "next/link";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import Ratings from "@/components/ratings";

type Review = {
  id: string;
  businessId: string;
  username: string;
  rating: number;
  comment: string;
};

type Company = {
  id: string;
  name: string;
};

export default function ReviewsPage({
  searchParams,
}: {
  searchParams?: { type?: string };
}) {
  const reviews: Review[] = data.reviews;
  const companies: Company[] = data.businesses;

  const selectedType = searchParams?.type || "";

  const businessIdToType = new Map<string, string>(
    companies.map((c: any) => [c.id, (c as any).type])
  );

  const filteredReviews = selectedType
    ? reviews.filter((r) => businessIdToType.get(r.businessId) === selectedType)
    : reviews;

  const getCompanyName = (id: string) =>
    companies.find((c) => c.id === id)?.name || "Unknown Company";

  return (
    <>
      <MainHeader />
      <main className="flex-1 flex flex-col">
        <section className="flex flex-col items-center p-8 gap-6">
          <div className="w-full max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:underline mb-4"
            >
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-2xl font-bold">
            Reviews {selectedType ? `(Type: ${selectedType})` : ""}
          </h1>
          {filteredReviews.length === 0 ? (
            <p className="text-gray-600">
              No reviews found for this selection.
            </p>
          ) : (
            <ul className="w-full max-w-3xl space-y-4">
              {filteredReviews.map((review) => (
                <li
                  key={review.id}
                  className="border rounded-lg p-4 shadow-sm bg-white"
                >
                  <h2 className="text-lg font-semibold mb-1">
                    {getCompanyName(review.businessId)}
                  </h2>
                  <div className="flex items-center gap-2 mb-2">
                    <strong className="text-sm text-gray-700">
                      {review.username}
                    </strong>
                    <Ratings rating={review.rating} />
                  </div>
                  <p className="mt-2 text-gray-800">{review.comment}</p>
                  <Link
                    href={`/companies/${review.businessId}`}
                    className="mt-3 inline-block text-blue-600 hover:underline"
                  >
                    View Company
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <MainFooter />
    </>
  );
}
