import { Metadata } from "next";
import content from "@/content/talks.json";

export const metadata: Metadata = {
  title: "Lucas Castro | Talks",
};

export default function Talks() {
  return (
    <main className="md:px-12 px-4 lg:px-24 flex flex-col gap-16">
      <section className="flex items-center justify-center gap-16">
        <div className="max-w-2xl w-full flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-tight text-zinc-700">
            My Talks
          </h1>
          <p className="text-zinc-700/70 leading-relaxed tracking-tight">
            I try to be active in the developer community. Here are some of the
            talks I&apos;ve given at conferences and meetups.
          </p>

          <ul className="list-disc list-inside">
            {content.map((talk) => (
              <li className="text-sm" key={talk.id}>
                <a
                  href={talk.video ?? talk.notes}
                  className="text-sky-600 font-medium mr-3 text-base transition-colors hover:text-sky-800"
                  target="_blank"
                >
                  {talk.title}
                </a>
                {!!talk.video && (
                  <>
                    <span>|</span>
                    <a
                      href={talk.notes}
                      className="ml-3 text-sm underline text-sky-600"
                      target="_blank"
                    >
                      Talk notes
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
