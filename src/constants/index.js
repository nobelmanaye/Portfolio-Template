import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
  
    {
        "id": "project-1",
        "name": "AI Voice Assistant",
        "description": "Developed an AI voice assistant chatbot leveraging IBM's Watson AI, which provides natural language understanding and speech capabilities. Implemented the chatbot using Flask for the backend, and created a responsive interface with HTML and CSS for seamless user interaction.",
        "tags": [
            {
                "name": "AI",
                "color": "blue-text-gradient"
            },
            {
                "name": "Watson",
                "color": "green-text-gradient"
            },
            {
                "name": "Flask",
                "color": "pink-text-gradient"
            }
        ],
        "image": "ai_voice_assistant",
        "repo": "https://github.com/user/ai_voice_assistant",
        "demo": "https://user.github.io/ai_voice_assistant/"
    },
    {
        "id": "project-2",
        "name": "Laptops Unleashed",
        "description": "Developed a laptop search engine website using JavaScript, which featured an intuitive and user-friendly interface. Implemented Natural Language Processing (NLP) techniques to analyze user input and generate precise laptop recommendations, significantly enhancing the relevance and accuracy of search results.",
        "tags": [
            {
                "name": "JavaScript",
                "color": "blue-text-gradient"
            },
            {
                "name": "NLP",
                "color": "green-text-gradient"
            },
            {
                "name": "Search Engine",
                "color": "pink-text-gradient"
            }
        ],
        "image": "laptops_unleashed",
        "repo": "https://github.com/user/laptops_unleashed",
        "demo": "https://user.github.io/laptops_unleashed/"
    },
    {
        "id": "project-3",
        "name": "Scratch Translation into Amharic",
        "description": "One of the original translators of Scratch into Amharic, picking syntax and semantically appropriate words from Ge'ez (ancestral Amharic) to substitute lacking terms for Object Oriented terms. Contributed to the translation of 20% of the syntax.",
        "tags": [
            {
                "name": "Translation",
                "color": "blue-text-gradient"
            },
            {
                "name": "Amharic",
                "color": "green-text-gradient"
            },
            {
                "name": "Scratch",
                "color": "pink-text-gradient"
            }
        ],
        "image": "scratch_translation_amharic",
        "repo": "https://github.com/user/scratch_translation_amharic",
        "demo": "https://user.github.io/scratch_translation_amharic/"
    },
    {
        "id": "project-4",
        "name": "Highland Defense",
        "description": "Created an interactive, real-time strategy game set in 19th century Abyssinia, featuring a human versus AI gameplay with 20 unique characters. The game, developed using Unity and C#, centers around tower defense mechanics in a historic setting. Leveraged pathfinding algorithms (A*) for AI movement and decision-making, and implemented multiplayer functionality using Photon Unity Networking (PUN). The game also features a complex HP - attack bonus system that favored historic military strategies, enhancing the overall player historical experience.",
        "tags": [
            {
                "name": "Unity",
                "color": "blue-text-gradient"
            },
            {
                "name": "C#",
                "color": "green-text-gradient"
            },
            {
                "name": "PUN",
                "color": "pink-text-gradient"
            }
        ],
        "image": "highland_defense",
        "repo": "https://github.com/user/highland_defense",
        "demo": "https://user.github.io/highland_defense/"
    }

];

export { services, technologies, experiences, projects };
