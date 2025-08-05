import {
  FaCss3,
  FaFacebook,
  FaGitAlt,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import projectImg1 from "../assets/images/project1.png";
import projectImg2 from "../assets/images/project1.png";
import projectImg3 from "../assets/images/project1.png";

import { SiExpress, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { MdSyncProblem } from "react-icons/md";

export const skills = [
  {
    id: 1,
    icon: FaReact,
    skill: "React jS",
    progress: 95,
    type: "frontend",
    description:
      "ReactJS is a JavaScript library used to build reusable components for the view layer in the MVC architecture. It is used to build the Single Page Application (SPA) due to its component-based architecture, efficient re-rendering with the Virtual DOM, and ability to manage dynamic content without needing full page reloads. It is written in JSX.",
  },
  {
    id: 2,
    icon: FaHtml5,
    skill: "HTML",
    progress: 99,
    type: "frontend",
    description:
      "HTML stands for HyperText Markup Language. It is the standard language used to create and design documents on the World Wide Web. HTML structures web content and allows the inclusion of text, images, links, and other elements.",
  },
  {
    id: 3,
    icon: FaCss3,
    skill: "CSS",
    progress: 66,
    type: "frontend",
    description:
      "CSS (Cascading Style Sheets) is the language that styles and organizes web pages. It makes websites visually appealing and user-friendly. Mastering CSS is crucial whether you're a beginner or a seasoned developer.",
  },
  {
    id: 4,
    icon: IoLogoJavascript,
    skill: "JavaScript",
    progress: 92,
    type: "frontend",
    description:
      "JavaScript is the most used programming language for developing websites, web servers, mobile applications, and many other platforms.In Both Front-end and Back-end Interviews, JavaScript was asked, and its difficulty depends upon the on your profile and company. Here, we compiled 70+ JS Interview questions on every difficulty level This was sufficient to ace any online assessment test or interview questions.",
  },
  {
    id: 5,
    icon: FaNodeJs,
    skill: "Node JS",
    progress: 90,
    type: "backend",
    description:
      "NodeJS is one of the most popular runtime environments, known for its efficiency, scalability, and ability to handle asynchronous operations. It is built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It is extensively used by top companies such as LinkedIn, Netflix, Walmart, Uber, PayPal, NASA, and many more because of its robust features and performance.",
  },
  {
    id: 6,
    icon: SiExpress,
    skill: "Express JS",
    progress: 93,
    type: "backend",
    description:
      "ExpressJS is a fast, unopinionated, and minimalist web framework for NodeJS, widely used for building scalable and efficient server-side applications. It simplifies the development of APIs and web applications by providing powerful features like middleware support, routing, and template engines.",
  },
  {
    id: 7,
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 90,
    type: "backend",
    description:
      "MongoDB is one of the most popular NoSQL databases, known for its flexibility, scalability, and ability to handle unstructured data. Many top companies rely on MongoDB, making it an essential skill for developers. Whether you’re starting your career or looking to level up, preparing well for your MongoDB interview is the key to success.",
  },
  {
    id: 8,
    icon: GrMysql,
    skill: "Mysql",
    progress: 80,
    type: "backend",
    description:
      "MySQL is an open-source Relational Database Management System(RDMS) that organizes data in tables using rows and columns. It uses Structured Query Language (SQL) for managing and manipulating databases. It was originally developed by MySQL AB, a Swedish company, and is now owned by Oracle Corporation. It's known for its high performance, reliability, and ease of use, making it one of the most widely used databases globally for web applications, data storage, and software development.",
  },
  {
    id: 9,
    icon: FaGitAlt,
    skill: "Git",
    progress: 92,
    type: "tools",
    description:
      "Git is a distributed version control system (DVCS) designed to track changes in source code during software development. In 2005, Linus Torvalds, who is also the creator of the Linux kernel, developed it. Today, more than 40 million people use Git universally. If you are a developer, DevOps engineer, or any professional in the tech industry, knowing Git is vital.",
  },
  {
    id: 10,
    icon: MdSyncProblem,
    skill: "Problem Solving",
    progress: 85,
    type: "skills",
    description:
      "Problem solving is a core skill for software developers, involving identifying, analyzing, and resolving issues in code and systems. It encompasses understanding the problem, researching potential solutions, designing and implementing those solutions, and then testing and refining them. Effective problem-solving in development leads to efficient development processes, high-quality software, and innovative solutions,Git is a distributed version control system (DVCS) designed to track changes in source code during software development. In 2005, Linus Torvalds, who is also the creator of the Linux kernel, developed it. Today, more than 40 million people use Git universally. If you are a developer, DevOps engineer, or any professional in the tech industry, knowing Git is vital.",
  },
  {
    id: 11,
    icon: FaGitAlt,
    skill: "Git",
    progress: 92,
    type: "tools",
    description:
      "Git is a distributed version control system (DVCS) designed to track changes in source code during software development. In 2005, Linus Torvalds, who is also the creator of the Linux kernel, developed it. Today, more than 40 million people use Git universally. If you are a developer, DevOps engineer, or any professional in the tech industry, knowing Git is vital.",
  },
];
export const skill_tabs = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Frontend", value: "frontend" },
  { id: 3, label: "Backend", value: "backend" },
  { id: 4, label: "Tools", value: "tools" },
  { id: 5, label: "Skills", value: "skills" },
];
export const menu_links = [
  { id: 1, label: "Home", offset: -100, to: "/home" },
  { id: 2, label: "Skills", offset: -80, to: "/skills" },
  { id: 3, label: "About Me", offset: -80, to: "/about" },
  { id: 4, label: "Projects", offset: -80, to: "/projects" },
  { id: 5, label: "Contact", offset: -80, to: "/contact" },
];
export const stats = [
  { id: 1, count: "2", label: "Years of \nExperience" },
  { id: 2, count: "3", label: "Certificate \nEarned" },
  { id: 3, count: "12", label: "Projects \nCompleted" },
  { id: 4, count: "3", label: "Happy \nClients" },
];
export const about_me = [
  {
    content:
      "Frontend development is an important part of web applications, and it is used to build dynamic and user-friendly web applications with an interactive user interface (UI). I skilled Frontend developers with expertise in HTML, CSS, JavaScript, and modern frameworks and libraries - React, Nodejs.",
    socialIcons: [
      { id: 1, label: "Facebook", icon: FaFacebook, link: "#" },
      { id: 2, label: "Instagram", icon: FaInstagram, link: "#" },
      { id: 3, label: "XTwitter", icon: FaXTwitter, link: "#" },
      { id: 4, label: "Linkedin", icon: FaLinkedin, link: "#" },
    ],
    email: "sohelshahid09@gmail.com",
    phone: "+8801823-012335",
    website: "https://sohels-portfolio.vercel.app/",
  },
];
export const projects = [
  {
    id: 1,
    title: "Full Stack notes App . Using MERN-MongoDB,Express JS,React,Node JS",
    image: projectImg1,
    tags: ["MongoDB", "Express JS", "React", "Node JS"],
    url: "https://js-engineering-and-consultancy.vercel.app/",
  },
  {
    id: 2,
    title: "Responsive Portfolio Using React,Tailwind",
    image: projectImg2,
    tags: ["React", "Tailwind CSS"],
    url: "https://project-doctor-care-with-tailwind-j.vercel.app/",
  },
  {
    id: 3,
    title:
      "Full Stack Travel Story App . Using MERN-MongoDB,Express JS,React,Node JS",
    image: projectImg3,
    tags: ["MongoDB", "Express JS", "React", "Node JS"],
    url: "https://js-engineering-and-consultancy.vercel.app/",
  },
];
