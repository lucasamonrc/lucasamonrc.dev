import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-200 md:px-12 px-4 lg:px-24 pt-10 pb-16 flex flex-col md:flex-row justify-between items-center">
      <nav>
        <ul className="flex">
          {/* <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <a href="https://blog.lucasamonrc.dev">Articles</a>
          </li> */}
          <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <Link href="/talks">Articles</Link>
          </li>
          <li className="pl-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <a href="https://github.com/lucasamonrc?tab=repositories">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <p className="text-sm font-light text-zinc-900/50">
        Design Inspired by{" "}
        <a
          href="https://tailwindui.com/templates/spotlight"
          className="text-sky-600/50 hover:text-sky-600 transition-colors"
        >
          Spotlight from Tailwind UI
        </a>
      </p>
    </footer>
  );
}
