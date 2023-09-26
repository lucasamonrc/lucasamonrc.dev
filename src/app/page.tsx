import { Metadata } from "next";
import { FiGitCommit } from "react-icons/fi";
import { IntroSection } from "@/components/home/IntroSection";
import { Repository } from "@/components/home/Repository";
import { WorkCard } from "@/components/home/WorkCard";
import { SkillCard } from "@/components/home/SkillsCard";

export const metadata: Metadata = {
  title: "Lucas Castro | Home",
};

export interface Repo {
  name: string;
  id: number;
  html_url: string;
  description: string;
  pushed_at: string;
  language: string | null;
}

async function getData() {
  const response = await fetch(
    "https://api.github.com/users/lucasamonrc/repos?direction=desc&sort=pushed&page=1&per_page=3",
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to retrieve data from GitHub API");
  }

  const data: Repo[] = await response.json();

  return data;
}

export default async function Home() {
  const repos = await getData();

  return (
    <main className="md:px-12 px-4 lg:px-24 flex flex-col gap-16">
      <IntroSection />

      <section className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-zinc-700 font-semibold text-lg flex items-center gap-2 mb-6">
            <FiGitCommit className="w-6 h-6 text-zinc-700/70" />
            Recent GitHub Pushes
          </h2>

          <div className="flex flex-col gap-5">
            {repos.map((repo) => (
              <Repository repo={repo} key={repo.id} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <WorkCard />

          <SkillCard />
        </div>
      </section>
    </main>
  );
}
