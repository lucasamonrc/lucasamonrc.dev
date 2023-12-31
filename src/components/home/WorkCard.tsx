import work from "@/content/work";
import Image, { StaticImageData } from "next/image";
import { FiArrowDown, FiBriefcase } from "react-icons/fi";

interface WorkItemProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logo: StaticImageData;
}

function WorkItem({
  logo,
  company,
  position,
  startDate,
  endDate,
}: WorkItemProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      <Image src={logo} className="h-8 w-8 rounded-full shadow" alt="Trinsic" />
      <div className="flex flex-col gap-1 text-xs text-zinc-700/70 w-full">
        <p className="font-semibold text-zinc-800">{company}</p>
        <p className="flex justify-between">
          <span>{position}</span>
          <span>
            {startDate} — {endDate}
          </span>
        </p>
      </div>
    </div>
  );
}

export function WorkCard() {
  return (
    <div className="p-6 rounded-xl shadow border border-zinc-50 max-w-sm w-full">
      <h2 className="text-zinc-700 font-semibold text-sm flex items-center gap-2 mb-6">
        <FiBriefcase className="w-5 h-5 text-zinc-700/70" />
        Work
      </h2>

      <div className="w-full flex flex-col gap-4">
        {work.map((item) => (
          <WorkItem
            key={item.company}
            logo={item.logo}
            company={item.company}
            position={item.position}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>

      <a
        className="mt-6 flex items-center justify-center gap-1 bg-zinc-100 rounded-lg w-full px-3 py-2 text-sm text-zinc-800 font-medium hover:brightness-90 transition"
        href="https://standardresume.co/r/lucasamonrc"
        target="_blank"
      >
        Download Resume
        <FiArrowDown />
      </a>
    </div>
  );
}
