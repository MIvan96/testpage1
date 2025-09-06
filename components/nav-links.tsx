"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function NavLinks({ href, children, className }: NavLinksProps) {
  const path = usePathname();
  const isActive = path.startsWith(href);
  const baseClass = isActive ? "text-red-400 font-bold" : "text-gray-600";
  return (
    <Link
      href={href}
      className={`${baseClass}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Link>
  );
}
