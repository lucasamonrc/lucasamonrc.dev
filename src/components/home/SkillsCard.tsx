import { FiStar } from "react-icons/fi";
import React from "react";
import skills from "@/content/skills";

interface SkillItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function SkillItem({ title, description, icon }: SkillItemProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="h-8 w-8 rounded-full shadow shrink-0 flex items-center justify-center text-sky-600">
        {icon}
      </div>
      <div className="flex flex-col gap-1 text-xs text-zinc-700/70 w-full">
        <p className="font-semibold text-zinc-800">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function SkillCard() {
  return (
    <div className="p-6 rounded-xl shadow border border-zinc-50 max-w-sm w-full">
      <h2 className="text-zinc-700 font-semibold text-sm flex items-center gap-2 mb-6">
        <FiStar className="w-5 h-5 text-zinc-700/70" />
        Skills
      </h2>

      <div className="w-full flex flex-col gap-4">
        {skills.map((item) => (
          <SkillItem
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
