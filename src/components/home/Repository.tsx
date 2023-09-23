import { Repo } from "@/app/page";

import { FiChevronRight } from "react-icons/fi";

interface RepositoryProps {
  repo: Repo;
}

export function Repository({ repo }: RepositoryProps) {
  return (
    <article>
      <a
        href={repo.html_url}
        className="group hover:bg-zinc-50 transition-colors rounded-xl p-5 flex flex-col gap-4 cursor"
      >
        <small className="pl-4 border-l-2 border-zinc-400/70 text-zinc-700/70">
          {new Date(repo.pushed_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
        <strong className="text-lg font-semibold text-zinc-700">
          {repo.name}
        </strong>
        {!!repo.description && (
          <p className="text-sm text-zinc-700/80 leading-relaxed">
            {repo.description}
          </p>
        )}
        {!!repo.language && (
          <p className="text-sm font-semibold text-zinc-700/80 leading-relaxed">
            {repo.language}
          </p>
        )}
        <p className="text-sm flex items-center gap-2 text-sky-600">
          Visit repo <FiChevronRight />
        </p>
      </a>
    </article>
  );
}
