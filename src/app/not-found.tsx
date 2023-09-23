import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lucas Castro | Not Found",
};

interface Repo {
  name: string;
  id: number;
  html_url: string;
  description: string;
  pushed_at: string;
  language: string | null;
}

export default function Custom404() {
  return (
    <main className="md:px-12 px-4 lg:px-24 flex flex-col gap-16">
      <section className="flex items-center justify-center gap-16">
        <div className="max-w-2xl w-full flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-tight text-zinc-700">
            Page Not Found
          </h1>
          <p className="text-zinc-700/70 leading-relaxed tracking-tight">
            Sorry, this is embarrassing. It seems the page you were looking for
            does not exist.
          </p>
          <Link href="/" className="text-sky-600 font-bold">
            Go back to the homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
