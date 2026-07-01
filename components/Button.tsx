import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#23864f] text-white shadow-sm hover:bg-[#1b6f42]"
      : "border border-slate-200 bg-white text-slate-800 hover:border-[#23864f]/40 hover:bg-emerald-50";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
