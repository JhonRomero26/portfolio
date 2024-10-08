import { DEVTOOLS_NAMES } from "~/lib/constants";
import type { Project } from "~/schemas/Project";

export const projects: Project[] = [
  {
    id: "1",
    title: "I2TEC Website",
    devtools: [
      DEVTOOLS_NAMES.astro,
      DEVTOOLS_NAMES.typescript,
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.tailwind,
      DEVTOOLS_NAMES.css3,
      DEVTOOLS_NAMES.preact,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://i2tec.ec",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/i2tec-frontend",
      },
    ],
    images: {
      thumbnail: "/projects/i2tec-ec.thumbnail.webp",
      small: "/projects/i2tec-ec.1x.webp",
      medium: "/projects/i2tec-ec.2x.webp",
      large: "/projects/i2tec-ec.4x.webp",
    },
  },
  {
    id: "2",
    title: "Torrent Movies Website",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.html5,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://jhonromero26.github.io/PlatziVideo",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/PlatziVideo",
      },
    ],
    images: {
      thumbnail: "/projects/torrent-movies.thumbnail.webp",
      small: "/projects/torrent-movies.1x.webp",
      medium: "/projects/torrent-movies.2x.webp",
      large: "/projects/torrent-movies.4x.webp",
    },
  },
  {
    id: "8",
    title: "Cryptors",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.html5,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://cryptors.vercel.app",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/cryptors",
      },
    ],
    images: {
      thumbnail: "/projects/cryptors.thumbnail.webp",
      small: "/projects/cryptors.1x.webp",
      medium: "/projects/cryptors.2x.webp",
      large: "/projects/cryptors.4x.webp",
    },
  },
  {
    id: "7",
    title: "Trello Clone",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.html5,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://trello-clone-dx7rw0h28-jhon-romeros-projects.vercel.app",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/trello-clone",
      },
    ],
    images: {
      thumbnail: "/projects/trello-clone.thumbnail.webp",
      small: "/projects/trello-clone.1x.webp",
      medium: "/projects/trello-clone.2x.webp",
      large: "/projects/trello-clone.4x.webp",
    },
  },
  {
    id: "9",
    title: "Wrouter",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.html5,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://www.npmjs.com/package/@jhonromero26/wrouter",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/wrouter",
      },
    ],
    images: {
      thumbnail: "/projects/wrouter.thumbnail.webp",
      small: "/projects/wrouter.1x.webp",
      medium: "/projects/wrouter.2x.webp",
      large: "/projects/wrouter.4x.webp",
    },
  },
  {
    id: "3",
    title: "Carrion Loja Tourism",
    devtools: [
      DEVTOOLS_NAMES.css3,
      DEVTOOLS_NAMES.astro,
      DEVTOOLS_NAMES.typescript,
      DEVTOOLS_NAMES.tailwind
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://carrion-tours.vercel.app/",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/carrion-tours",
      },
    ],
    images: {
      thumbnail: "/projects/carrion-tours.thumbnail.webp",
      small: "/projects/carrion-tours.1x.webp",
      medium: "/projects/carrion-tours.2x.webp",
      large: "/projects/carrion-tours.4x.webp",
    },
  },
  {
    id: "4",
    title: "Erlangb Calculator Website (WebAssembly)",
    devtools: [DEVTOOLS_NAMES.wasm, DEVTOOLS_NAMES.react, DEVTOOLS_NAMES.css3],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://jhonromero26.github.io/erlangb",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/erlangb",
      },
    ],
    images: {
      thumbnail: "/projects/erlangb.thumbnail.webp",
      small: "/projects/erlangb.1x.webp",
      medium: "/projects/erlangb.2x.webp",
      large: "/projects/erlangb.4x.webp",
    },
  },
  {
    id: "5",
    title: "Fiestas Patronales Colegio La Inmaculada",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.react,
      DEVTOOLS_NAMES.tailwind,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://uefli-ciencias-sociales.github.io/fiestas-patronales",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/UEFLI-Ciencias-Sociales/fiestas-patronales",
      },
    ],
    images: {
      thumbnail: "/projects/uefli-fiestas-patronales.thumbnail.webp",
      small: "/projects/uefli-fiestas-patronales.1x.webp",
      medium: "/projects/uefli-fiestas-patronales.2x.webp",
      large: "/projects/uefli-fiestas-patronales.4x.webp",
    },
  },
  {
    id: "6",
    title: "Rick and Morty API Website",
    devtools: [
      DEVTOOLS_NAMES.javascript,
      DEVTOOLS_NAMES.html5,
      DEVTOOLS_NAMES.css3,
    ],
    links: [
      {
        name: "Website",
        default: true,
        url: "https://jhonromero26.github.io/rick-and-morty",
      },
      {
        name: "GitHub",
        default: false,
        url: "https://github.com/JhonRomero26/rick-and-morty",
      },
    ],
    images: {
      thumbnail: "/projects/rick-and-morty.thumbnail.webp",
      small: "/projects/rick-and-morty.1x.webp",
      medium: "/projects/rick-and-morty.2x.webp",
      large: "/projects/rick-and-morty.4x.webp",
    },
  },
];
