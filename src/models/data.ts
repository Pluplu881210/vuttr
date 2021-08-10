import { Tool } from './tool';


export let data:Tool [] = [];
data.push(
    {
        id: 1,
        title: "notion",
        important: true,
        link: "https://notion.so",
        description: "Todo en una herramienta para organizar equipos e ideas. Escriba, planifique, colabore y organícese",
        tags: ["organización","planificación","colaboración"]
    },
    {
        id: 2,
        title: "json-server",
        important: false,
        link: "https://github.com/typicode/json-server",
        description: "API REST falsa basada en un esquema json. Útil para burlarse y crear API para que los desarrolladores de front-end las consuman en los desafíos de codificación",
        tags: ["api", "json", "schema", "node", "github", "rest"]
    },
    {
        id: 3,
        title: "fastify",
        important: true,
        link: "https://www.fastify.io/",
        description: "Marco web extremadamente rápido, simple y de bajo costo para NodeJS. Soporte HTTP2",
        tags: ["web", "framework", "node", "http2", "https"]
    },
    {
        id: 4,
        title: "lorem1",
        important: true,
        link: "https://es.lipsum.com/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos deleniti ...",
        tags: ["web", "framework", "node", "http2", "https"]
    },
    {
        id: 5,
        title: "lorem2",
        important: true,
        link: "https://es.lipsum.com/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos deleniti ...",
        tags: ["web", "framework", "node", "http2", "https"]
    },
    {
        id: 6,
        title: "lorem3",
        important: false,
        link: "https://es.lipsum.com/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos deleniti ...",
        tags: ["web", "framework", "node", "http2", "https"]
    },
    {
        id: 7,
        title: "lorem4",
        important: true,
        link: "https://es.lipsum.com/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos deleniti ...",
        tags: ["web", "framework", "node", "http2", "https"]
    },
    {
        id: 8,
        title: "lorem5",
        important: false,
        link: "https://es.lipsum.com/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos deleniti ...",
        tags: ["web", "framework", "node", "http2", "https"]
    }
);