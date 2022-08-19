import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { IconType } from "react-icons";

interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Integration",
    about:
      "I can integrate data with using any API tool such as <b>rest api</b>  & <b>axios</b> and etc. ",
  },
  {
    Icon: RiComputerLine,
    title: "CMS Maestro",
    about:
      "Sufficient knowledge and experience on <b>CMS</b> to control website content",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX design",
    about:
      "Stunning user interface design knowledge using <b>Figma</b>  and  <b>InVision</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b> ",
  },
  {
    Icon: FaServer,
    title: "Frontend Mentoring",
    about:
      "<b>Guiding</b> beginner web developers and <b>reviewing</b> their codes",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Html5/Css3",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Scss/Sass/Less",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "50",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Xd",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "MacOS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Git/Github",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "VsCode",
    level: "96",
  },
  {
    Icon: BsCircleFill,
    name: "Jira/Bitrix24",
    level: "99",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Employee Table",
    description:
      "This app demonstrates the table where employees' data is being held. You add/delete/edit.",
    image_path: "/images/table.png",
    deployed_url: "https://employee-table-nihadabbasov.vercel.app/",
    github_url: "https://github.com/nihad-abbasov/my-table",
    category: ["react"],
    key_techs: ["Next.js", "Chakra UI"],
  },
  {
    id: 2,
    name: "Affiliati - Company Website",
    image_path: "/images/company.png",
    deployed_url: "https://affiliati.az/",
    github_url: "#",
    category: ["html/css", "javascript"],
    description:
      "This landing website represents the company that I'm currently working on. It has been mostly built statically.",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    id: 3,
    name: "Spotify Clone(Web)",
    image_path: "/images/spotify.jpg",
    deployed_url: "https://spotify-clone-nihad-abbasov.herokuapp.com/",
    github_url: "https://github.com/nihad-abbasov/Spotify-Clone",
    category: ["react"],
    description:
      "The Prototype(Copy) of the real Spotify Web App. It's more of a UI based project, not too many functionalities however some API uses like fetching users playlists.",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 4,
    name: "Prnd Marketing App",
    image_path: "/images/company-2.png",
    deployed_url: "https://prndmarketing.com/",
    github_url: "#",
    category: ["node", "react"],
    description:
      "Well-designed static website that provides basic information for marketing and digital services",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 5,
    name: "Digital Services App",
    image_path: "/images/company-3.png",
    deployed_url: "https://rampaffiliates.com/",
    github_url: "#",
    category: ["django", "react"],
    description:
      "Modern UI/UX oriented digital service app that contains the offers that company suggest to their customers",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id: 6,
    name: "Money Transfer App",
    image_path: "/images/company-4.png",
    deployed_url: "https://moneytransfermate.com/",
    github_url: "#",
    category: ["express"],
    description: "The app for international money transactions",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },

  {
    id: 7,
    name: "Trading Brokers App",
    image_path: "/images/company-5.png",
    deployed_url: "http://findonlinebrokerforyou.com/",
    github_url: "#",
    category: ["express"],
    description:
      "The website that hold the details about a list of the best trading brokers in the market",
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  // {
  //   id: 8,
  //   name: "Football App",
  //   image_path: "/images/football.png",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/football-app",
  //   category: ["react"],
  //   description:
  //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  // },
];
