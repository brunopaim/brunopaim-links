export type Lang = "pt" | "en";

export const translations = {
  pt: {
    name: "Bruno Paim",
    subtitle: "Desenvolvedor Full-Stack | Frontend Engineer",
    hero: "Compartilho estudos, ferramentas, projetos e aprendizados sobre desenvolvimento, IA e criação de produtos digitais.",
    aboutTitle: "Sobre mim",
    about: "Sou desenvolvedor Full-Stack com experiência em Vue.js, React, Node.js, MySQL, TypeScript, automações, integrações com APIs e criação de sistemas personalizados. Tenho formação em Engenharia Mecatrônica e Técnico em Informática, unindo visão técnica, lógica de sistemas e foco em soluções práticas.",
    techTitle: "Tecnologias e interesses",
    linksTitle: "Me acompanhe",
    soonTitle: "Em breve",
    soonText: "Projetos, estudos práticos, experimentos com IA e conteúdos sobre desenvolvimento.",
  },
  en: {
    name: "Bruno Paim",
    subtitle: "Full-Stack Developer | Frontend Engineer",
    hero: "I share studies, tools, projects, and real learnings about software development, AI, and digital product creation.",
    aboutTitle: "About me",
    about: "I am a Full-Stack Developer with experience in Vue.js, React, Node.js, MySQL, TypeScript, automation, API integrations, and custom software solutions. I have a degree in Mechatronics Engineering and a technical background in Computer Science, combining technical vision, systems thinking, and a practical approach to problem-solving.",
    techTitle: "Technologies and interests",
    linksTitle: "Find me online",
    soonTitle: "Coming soon",
    soonText: "Projects, practical studies, AI experiments, and content about software development.",
  },
} as const;
