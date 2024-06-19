import foodapp1 from "../ProjectImage/foodapp1.png";
import foodapp2 from "../ProjectImage/foodapp2.png";
import foodapp3 from "../ProjectImage/foodapp3.png";
import foodapp4 from "../ProjectImage/foodapp4.png";
import portfolio1 from '../ProjectImage/portfolio1.png';
import portfolio2 from '../ProjectImage/portfolio2.png';
import portfolio3 from '../ProjectImage/portfolio3.png';
import portfolio4 from '../ProjectImage/portfolio4.png';
import weather1 from "../ProjectImage/weather1.png";
import weather2 from "../ProjectImage/weather2.png";
import Drum1 from "../ProjectImage/Drum1.png"
export const projects = [
  {
    id: "1",
    title: "Food Express",
    date: "Dec 2023 - April 2024",
    description:
    "Food Express is a web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It serves a platform for alumni to connect, share updates, and engage with the admin seamlessly. The application is divided into user and admin interfaces, each equipped with distinct features and functionalities.",
    images: [foodapp1,foodapp2,foodapp3,foodapp4],
    tags: [
      "React Js",
      "Redux-ToolKit",
      "Tailwind Css",
      "MongoDb",
      "NodeJs",
      "Express",
      "PostMan",
      "JWT",
      "Netlify",
    ],
    github: "https://github.com/ANKIT-10066/food-Express",
    webapp: "https://sweet-torte-d5153f.netlify.app/",
  },
  {
    id: "2",
    title: "Portfolio",
    date: "Feb 2024 - May 2024",
    description:
      "I built a personal portfolio website using React and styled it with Tailwind CSS. I made it interactive by adding cool animations using React tools like Lottie. The website is designed to look good and work well on all devices, from big screens to smartphones. It's a showcase of my work and skills in a user-friendly way.",
    images: [portfolio1,portfolio2,portfolio3,portfolio4],
    tags: [
      "React Js",
      "Redux",
      "Tailwind Css",
      "Css",
      "EmailJs",
      "React-libraries",
      "Vercel",
    ],
    github: "https://github.com/ANKIT-10066/PortFolio",
    webapp: "https://my-portfolio-ankit-10066.vercel.app/",
  },
  {
    id: "3",
    title: "Weather-Forecast-Web-app",
    date: "Dec 2023 - Dec 2023",
    description:"This project is a hands-on exploration of JavaScript and API integration, designed to provide real-time weather information based on user input. With a user-friendly interface, the application fetches data from a weather API, allowing users to stay informed about current and forecasted weather conditions.",
    images: [weather1,weather2],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "API" 
    ],
    category: "web app",
    github: "https://github.com/ANKIT-10066/Weather_app",
    webapp: "https://ankit-10066.github.io/Weather_app/",
  },
  {
    id: "4",
    title: "Drum-Kit-Web-app",
    date: "Oct 2023 - Oct 2023",
    description:"The Drum Kit app allows users to play different drum sounds by clicking on buttons labeled with various letters or by pressing the corresponding keys on their keyboard. Each key triggers a specific drum sound and a brief button animation, enhancing the interactive musical experience.",
    images: [Drum1,Drum1],
    tags: [
      "HTML",
      "CSS",
      "JavaScript", 
      "DOM",
      "EventListeners"
    ],
    category: "web app",
    github: "https://github.com/ANKIT-10066/Drum_Kit",
    webapp: "https://ankit-10066.github.io/Drum_Kit/",
  },
  
];
