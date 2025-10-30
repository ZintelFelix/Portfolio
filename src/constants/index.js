// src/constants/index.js

export const myProjects = [
  {
    id: 1,
    title: "MeisterWare Webshop (WIP)",
    description:
      "Modularer Webshop-Prototyp zur Produktverwaltung mit React + TypeScript Frontend und ASP.NET Core Web API Backend.",
    subDescription: [
      "Produkt-CRUD (anzeigen, anlegen, löschen) mit persistenter Speicherung in SQLite.",
      "Backend in .NET 9 mit Entity Framework Core und Migrations.",
      "Frontend mit Vite-Dev-Server; klare Trennung in frontend/ und backend/.",
      "CORS-Konfiguration für lokale Entwicklung; einfache Admin-Seite.",
    ],
    href: "https://github.com/ZintelFelix/MeisterWare-Webshop",
    logo: "",
    image: "/assets/projects/MeisterWare.png", 
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".NET", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 2,
    title: "Vinylify (WIP)",
    description:
      "Full-Stack Spielwiese: Vue 3 + TypeScript im Frontend, C# Backend. Enthält Unit- und E2E-Testing-Setup (Vitest/Playwright).",
    subDescription: [
      "Projektstruktur mit frontend/ (Vue 3 + Vite) und backend/ (C#).",
      "Linting via ESLint/Prettier; Typsicherheit mit vue-tsc.",
      "E2E-Tests mit Playwright; Unit-Tests mit Vitest.",
      "Basis für spätere API-/Daten-Features (WIP).",
    ],
    href: "https://github.com/ZintelFelix/Vinylify",
    logo: "",
    image: "/assets/projects/Vinylify.png",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" }, 
      { id: 3, name: "Vue", path: "/assets/logos/vue.svg" }, 
      { id: 4, name: "Vite", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 3,
    title: "Spotify Top Tracks (WIP)",
    description:
      "Blazor-App, die die meistgestreamten Songs (z. B. wöchentlich global) aus Spotify-Daten darstellt und lokal speichert.",
    subDescription: [
      "Parsing von Spotify-CSV/-API-Daten (Repo-Beschreibung/README).",
      "Persistenz in einer leichten lokalen Datenbank (SQLite, playlist.db).",
      "Blazor-UI zum Visualisieren/Listen der Top-Titel.",
      "Konfiguration und Migrations im Projekt enthalten.",
    ],
    href: "https://github.com/ZintelFelix/SpotifyAPITopTracks",
    logo: "",
    image: "/assets/projects/spotify-top-tracks.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".NET", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 4, name: "SQLite", path: "/assets/logos/sqlite.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/ZintelFelix",
    icon: "/assets/socials/github-mark-white.svg",
  },
];

export const experiences = [
  {
    title: "Full-Stack Entwickler (Private Projekte)",
    job: "Self-Hosted / GitHub",
    date: "2024 – heute",
    contents: [
      "Portfolio-Stack aufbauen mit React und TypeScript, .NET und SQLite",
      "Prototypen umsetzen: MeisterWare Webshop und Blazor-App Spotify Top Tracks",
      "Clean Code anwenden, CI/CD etablieren, Tests mit Vitest und Playwright",
    ],
  },
  {
    title: "Fachinformatiker in AE (Ausbildung)",
    job: "Digital David AG",
    date: "Aug. 2021 – Jan. 2025",
    contents: [
      "Webkomponenten entwickeln und erweitern in Frontend und Backend",
      "DevOps-Pipelines und Infrastructure as Code aufsetzen",
      "Anforderungen analysieren, Fehler diagnostizieren und beheben",
      "Tests und Qualitätssicherung durchführen sowie Kundensupport leisten",
    ],
  },
  {
    title: "Fachhochschulreife / Informationstechnik",
    job: "August-Bebel-Schule",
    date: "Aug. 2019 – Jul. 2021",
    contents: [
      "Programmierung und objektorientierte Softwareentwicklung",
      "Relationale Datenbanken modellieren und mit SQL abfragen",
      "Grundlagen zu Netzwerken und Betriebssystemen",
    ],
  },
  {
    title: "IT-Assistent (Informationsverarb.)",
    job: "Werner-von-Siemens-Schule",
    date: "Aug. 2016 – Jun. 2019",
    contents: [
      "Client-Server-Systeme planen, aufbauen und administrieren",
      "Betriebssysteme installieren, konfigurieren und dokumentieren",
      "Webentwicklung mit Datenbankanbindung umsetzen",
      "Datenschutz und IT-Sicherheit anwenden, Projektarbeit und Schulungen",
    ],
  },
];

export const reviews = [
  // Keine echten Testimonials vorhanden. TODO: Später Referenzen/Kurzstatements eintragen.
];
