"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import data from "@/data/data.json";

type Props = {
  onSearch?: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  type Business = {
    id: string;
    name: string;
    type: string;
    address: string;
    description: string;
  };

  const businesses: Business[] = data.businesses as Business[];

  const results = useMemo(() => {
    const query = text.trim().toLowerCase();
    if (!query) return [] as Business[];
    return businesses.filter((b) =>
      [b.name, b.type, b.address, b.description]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(query))
    );
  }, [text, businesses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(text);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className="flex items-center"
      >
        <input
          type="search"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search businesses..."
          className="text-gray-900 bg-white border border-gray-300 rounded-2xl px-3 py-1.5"
        />
      </form>

      {isOpen && results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full max-h-64 overflow-auto rounded-md border border-gray-200 bg-white shadow">
          {results.map((b) => (
            <li key={b.id} className="hover:bg-gray-50">
              <Link
                href={`/companies/${b.id}`}
                className="flex flex-col gap-0.5 px-3 py-2 text-sm text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{b.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isOpen && text.trim() !== "" && results.length === 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 shadow">
          No matches
        </div>
      )}
    </div>
  );
}
