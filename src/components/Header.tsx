import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex md:px-12 px-4 lg:px-24 mb-16">
      <nav className="rounded-full shadow border border-zinc-50 px-3 mx-auto w-fit">
        <ul className="flex">
          <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <Link href="/">Home</Link>
          </li>
          {/* <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <a href="https://blog.lucasamonrc.dev">Articles</a>
          </li> */}
          <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <Link href="/talks">Talks</Link>
          </li>
          <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <a href="https://github.com/lucasamonrc?tab=repositories">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
