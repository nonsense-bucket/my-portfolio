import web1 from '/public/web1.png';
import web2 from '/public/web2.png';
import web3 from '/public/web3.png';
import web4 from '/public/web4.png';
import web5 from '/public/web5.png';
import web6 from '/public/web6.png';

const projects = [
    {
        id: 1,
        image: web1,
        name: "Next ChatGPT (Coming soon...)",
        description: "A personal AI assistant chatbot using OpenAI api.",
        techStack: ["Typescript", "Next.js", "React", "Tailwind", "3S"],
        siteURL: "",
        codeURL: ""
    },
    {
        id: 2,
        image: web2,
        name: "E-Commerce Dashboard (Coming soon...)",
        description: "A feature-rich E-Commerce platform and Admin Dashboard using Next.js 13, ensuring seamless navigation and an exceptional user experience.",
        techStack: ["Typescript","React", "Tailwind", "MongoDB", "NextAuth"],
        siteURL: "",
        codeURL: ""
    },
   
    {
        id: 3,
        image: web3,
        name: "'Craving' - Recipe for Tonight",
        description: "A food recipe application utilizing a recipe API to fetch and display recipe data in an elegant card-based system. This project showcases my expertise as a frontend developer in creating interactive and visually appealing user interfaces for culinary enthusiasts.",
        techStack: ["React", "API"],
        siteURL: "https://teampickle-react-recipe-app.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/react-recipe-app"
    },
    {
        id: 4,
        image: web4,
        name: "My CV",
        description: "Simple web app that renders minimalist CV with print-friendly layout.",
        techStack: ["Next.js", "shadcn/ui"],
        siteURL: "https://peterchencv.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/clean_cv"
       

    }, 
    {
        id: 5,
        image: web5,
        name: "Calculator with React",
        description: "A web-based calculator utilizing React during the initial stages of my learning journey. This project represents my commitment to expanding my skills as a front-end developer and demonstrates my ability to apply React concepts in practical applications.",
        techStack: ["React"],
        siteURL: "https://team-pickle-calculator.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/calculator-app"
    },
    {
        id: 6,
        image: web6,
        name: "Advanced To-do List",
        description: "A robust todo list application with comprehensive features such as adding, deleting, and changing the status of items. It comes with a filtering mechanism to efficiently organize tasks based on their status.",
        techStack: ["React"],
        siteURL: "https://team-pickle-better-to-do.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/better_to_do"
    },
   
];



export default projects;