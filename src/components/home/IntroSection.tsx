import profileImg from "@/assets/profile.jpg";
import socialLinks from "@/content/social-links";
import Image from "next/image";
import content from "@/content/intro.json";

export function IntroSection() {
  return (
    <section className="flex items-center justify-center gap-16">
      <Image
        src={profileImg}
        alt=""
        className="hidden md:block w-60 h-60 rounded-full shadow border-4 border-white"
      />
      <div className="max-w-2xl w-full flex flex-col gap-6">
        <h1 className="text-4xl font-semibold leading-tight text-zinc-700">
          {content.title}
        </h1>
        <p className="text-zinc-700/70 leading-relaxed tracking-tight">
          {content.description}
        </p>
        <ul className="flex gap-6 text-zinc-700/70">
          {socialLinks.map((item) => (
            <li key={item.url}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
