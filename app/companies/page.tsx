import data from "@/data/data.json";
import NavLinks from "@/components/nav-links";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";

type Company = {
  id: string;
  name: string;
  type: string;
  address: string;
  description: string;
};

export default function CompaniesPage() {
  const companies: Company[] = data.businesses;

  return (
    <>
      <MainHeader />
      <div className="flex-1 flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold mb-6">Demo/All Companies</h1>
        <ul className="w-full max-w-3xl space-y-4">
          {companies.map((company) => (
            <li
              key={company.id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <h2 className="text-lg font-semibold">
                <NavLinks href={`/companies/${company.id}`}>
                  {company.name}
                </NavLinks>
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">Type:</span> {company.type}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span>{" "}
                {company.address}
              </p>
              <p className="mt-1 text-gray-800 italic">&ldquo;{company.description}&rdquo;</p>
            </li>
          ))}
        </ul>
      </div>
      <MainFooter />
    </>
  );
}
