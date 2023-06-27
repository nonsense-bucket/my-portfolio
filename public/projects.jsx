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
        name: "Pokemon Wiki",
        description: "I developed a comprehensive Pokemon encyclopedia utilizing the Pokemon API and React.js framework.",
        techStack: ["React", "API"],
        siteURL: "https://team-pickle-pokemonwiki.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/pokemonAPI"
    },
    {
        id: 2,
        image: web2,
        name: "Advanced To-do List",
        description: "This is a robust todo list application with comprehensive features such as adding, deleting, and changing the status of items. It comes with a filtering mechanism to efficiently organize tasks based on their status.",
        techStack: ["React"],
        siteURL: "https://team-pickle-better-to-do.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/better_to_do"
    },
    {
        id: 3,
        image: web3,
        name: "'Craving' - Recipe for Tonight",
        description: "I developed a food recipe application utilizing a recipe API to fetch and display recipe data in an elegant card-based system. This project showcases my expertise as a frontend developer in creating interactive and visually appealing user interfaces for culinary enthusiasts.",
        techStack: ["React", "API"],
        siteURL: "https://teampickle-react-recipe-app.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/react-recipe-app"
    },
    {
        id: 4,
        image: web4,
        name: "Calculator with React",
        description: "I developed a web-based calculator utilizing React during the initial stages of my learning journey. This project represents my commitment to expanding my skills as a front-end developer and demonstrates my ability to apply React concepts in practical applications.",
        techStack: ["React"],
        siteURL: "https://team-pickle-calculator.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/calculator-app"
    },
    {
        id: 5,
        image: web5,
        name: "A Cocktail Database",
        description: "This is another project that I worked with APIs. It is an advanced cocktail database with integrated routing capabilities for seamless navigation between pages. Each cocktail variety is elegantly showcased on a comprehensive individual card.",
        techStack: ["React", "API"],
        siteURL: "https://team-pickle-cocktail-pedia.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/cocktail-pedia"
    },
    {
        id: 6,
        image: web6,
        name: "The Simon Game",
        description: "A reacreation of the classic Simon Game using vanilla javascript, jQuery and DOM manipulation.",
        techStack: ["Javascript", "jQuery"],
        siteURL: "https://team-pickle-simon-game.netlify.app/",
        codeURL: "https://github.com/nonsense-bucket/simon-game"
    },
];



export default projects;