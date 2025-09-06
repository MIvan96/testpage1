import NavLinks from "./nav-links";
import data from "@/data/data.json";

export default function FilterButtons() {
  const rawTypes = ((data as any).businesses as any[])
    .map((b: any) => b.type as string)
    .filter(Boolean);
  const types: string[] = Array.from(new Set<string>(rawTypes));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <NavLinks href="./companies/review" className="font-bold text-gray-800">
          All
        </NavLinks>
        {types.map((type: string) => (
          <NavLinks
            key={type}
            href={`./companies/review?type=${encodeURIComponent(type)}`}
            className="font-bold text-gray-800"
          >
            {type}
          </NavLinks>
        ))}
      </div>
    </>
  );
}
