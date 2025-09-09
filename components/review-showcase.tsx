import data from "@/data/data.json";
import NavLinks from "./nav-links";
import Ratings from "./ratings";

type Business = {
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

export default function ReviewShowcase() {
  const businesses: Business[] = data.businesses as unknown as Business[];
  const reviews: Review[] = data.reviews as unknown as Review[];

  const latest = reviews.slice(-4).reverse();

  const businessById = new Map<string, Business>(
    businesses.map((b) => [b.id, b])
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {latest.map((r) => {
        const biz = businessById.get(r.businessId);
        if (!biz) return null;
        return (
          <div key={r.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-lg font-semibold">
              <NavLinks href={`/companies/${biz.id}`}>{biz.name}</NavLinks>
            </h2>
            <div className="mt-1">
              <Ratings rating={r.rating} />
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Type:</span> {biz.type}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span> {biz.address}
            </p>
            <p className="mt-1 text-gray-800 italic">&ldquo;{biz.description}&rdquo;</p>
          </div>
        );
      })}
    </div>
  );
}
