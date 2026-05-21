export type Lang = "pt" | "en";

export const translations = {
  pt: {
    name: "Bruno Paim",
    subtitle: "Desenvolvedor Full-Stack | Frontend Engineer",
    hero: "Compartilho estudos, ferramentas, projetos e aprendizados sobre desenvolvimento, IA e criação de produtos digitais.",
    highlight: "+10 anos na área de tecnologia",
    aboutTitle: "Sobre mim",
    about: "Sou desenvolvedor Full-Stack com mais de 10 anos de contato com tecnologia e programação, desde minha formação técnica em Informática iniciada em 2015. Tenho experiência com Vue.js, React, Node.js, MySQL, TypeScript, automações, integrações com APIs e criação de sistemas personalizados. Minha trajetória combina formação técnica, Engenharia Mecatrônica e experiência prática na construção de soluções digitais.",
    journeyTitle: "Minha jornada",
    journey: [
      {
        title: "Técnico em Informática",
        institution: "IFNMG",
        period: "2015 — 2017",
        description: "Base em lógica de programação, desenvolvimento de sistemas, banco de dados e fundamentos da computação.",
      },
      {
        title: "Engenharia Mecatrônica",
        institution: "CEFET-MG",
        period: "2018 — 2024",
        description: "Formação multidisciplinar envolvendo tecnologia, automação, sistemas, eletrônica, controle e resolução de problemas complexos.",
      },
      {
        title: "Desenvolvimento de Software",
        institution: "",
        period: "2015 — atual",
        description: "Mais de 10 anos de evolução na área, passando por estudos, projetos, frontend, backend, automações, integrações e produtos digitais.",
      },
    ],
    techTitle: "Tecnologias e interesses",
    linksTitle: "Me acompanhe",
    soonTitle: "Em breve",
    soonText: "Projetos, estudos práticos, experimentos com IA e conteúdos sobre desenvolvimento.",
  },
  en: {
    name: "Bruno Paim",
    subtitle: "Full-Stack Developer | Frontend Engineer",
    hero: "I share studies, tools, projects, and real learnings about software development, AI, and digital product creation.",
    highlight: "+10 years in technology",
    aboutTitle: "About me",
    about: "I am a Full-Stack Developer with over 10 years of experience in technology and programming, starting with my technical education in Computer Science in 2015. I have experience with Vue.js, React, Node.js, MySQL, TypeScript, automation, API integrations, and custom software solutions. My background combines technical education, Mechatronics Engineering, and hands-on experience building digital solutions.",
    journeyTitle: "My journey",
    journey: [
      {
        title: "Technical Degree in Computer Science",
        institution: "IFNMG",
        period: "2015 — 2017",
        description: "Foundation in programming logic, software development, databases, and computer science fundamentals.",
      },
      {
        title: "Mechatronics Engineering",
        institution: "CEFET-MG",
        period: "2018 — 2024",
        description: "Multidisciplinary education involving technology, automation, systems, electronics, control, and complex problem-solving.",
      },
      {
        title: "Software Development",
        institution: "",
        period: "2015 — Present",
        description: "Over 10 years of growth in technology, including studies, projects, frontend, backend, automation, integrations, and digital products.",
      },
    ],
    techTitle: "Technologies and interests",
    linksTitle: "Find me online",
    soonTitle: "Coming soon",
    soonText: "Projects, practical studies, AI experiments, and content about software development.",
  },
} as const;
