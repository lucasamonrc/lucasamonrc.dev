import Link from "next/link";
import Image from "next/image";
import profileImg from "@/assets/profile.jpg";

export function Header() {
  return (
    <header className="w-full flex md:px-12 px-4 mb-16">
      <Image
        src={profileImg}
        alt=""
        className="w-9 h-9 rounded-full border-2 border-white shadow"
      />
      <nav className="rounded-full shadow border border-zinc-50 px-3 mx-auto w-fit">
        <ul className="flex">
          <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <Link href="/about">About</Link>
          </li>
          <li className="px-3 py-2 font-medium text-zinc-900 cursor-pointer hover:text-sky-600 transition-colors text-sm">
            <a href="https://blog.lucasamonrc.dev">Articles</a>
          </li>
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
