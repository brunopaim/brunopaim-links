import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, Github, ArrowUpRight, Sparkles } from "lucide-react";
import { translations, type Lang } from "@/lib/i18n";
import avatar from "@/assets/bruno-paim.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bruno Paim — Full-Stack Developer" },
      { name: "description", content: "Links, projetos e conteúdos de Bruno Paim — desenvolvimento, IA e produtos digitais." },
      { property: "og:title", content: "Bruno Paim — Full-Stack Developer" },
      { property: "og:description", content: "Links, projetos e conteúdos sobre desenvolvimento, IA e produtos digitais." },
    ],
  }),
});

const techs = ["Vue.js", "React", "Node.js", "TypeScript", "MySQL", "Tailwind CSS", "AI", "Automation", "Vibe Coding", "Digital Products"];

const links = [
  { name: "Instagram", href: "https://www.instagram.com/brunopaim.dev", icon: Instagram, handle: "@brunopaim.dev" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bruno-william-paim-342b171b0/", icon: Linkedin, handle: "Bruno William Paim" },
  { name: "GitHub", href: "https://github.com/brunopaim/", icon: Github, handle: "@brunopaim" },
];

function Index() {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "pt" || saved === "en") setLang(saved);
  }, []);

  const change = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = translations[lang];

  return (
    <main className="min-h-screen px-5 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-xl">
        {/* Language switcher */}
        <div className="mb-8 flex justify-end">
          <div className="glass inline-flex items-center gap-1 rounded-full p-1 text-xs font-medium">
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => change(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1.5 uppercase tracking-wider transition-all ${
                  lang === l
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <div className="ring-glow relative rounded-full p-[3px]" style={{ background: "linear-gradient(135deg, var(--brand), var(--brand-2))" }}>
            <img
              src={avatar}
              alt="Bruno Paim"
              className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{t.name}</h1>
          <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
            <span className="gradient-text">{t.subtitle}</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t.hero}
          </p>
        </section>

        {/* About */}
        <section className="mt-10 glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold sm:text-xl">{t.aboutTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.about}</p>
        </section>

        {/* Tech */}
        <section className="mt-8">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">{t.techTitle}</h2>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">{t.linksTitle}</h2>
          <div className="flex flex-col gap-3">
            {links.map(({ name, href, icon: Icon, handle }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-xl px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-[oklch(0.72_0.16_155_/_40%)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-[oklch(0.72_0.16_155_/_20%)]">
                  <Icon size={20} />
                </span>
                <span className="flex-1 text-left">
                  <span className="block text-sm font-semibold">{name}</span>
                  <span className="block text-xs text-muted-foreground">{handle}</span>
                </span>
                <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <section className="mt-10 glass rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[oklch(0.72_0.16_155)]" />
            <h2 className="text-lg font-semibold sm:text-xl">{t.soonTitle}</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.soonText}</p>
        </section>

        {/* Footer */}
        <footer className="mt-12 pb-4 text-center">
          <p className="font-display text-sm font-medium tracking-tight gradient-text">brunopaim.dev</p>
        </footer>
      </div>
    </main>
  );
}
