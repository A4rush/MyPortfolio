import qaroraImg from "../../public/images/qarora.png";
import bookieImg from "../../public/images/bookie.png";
import myImage from "../../public/images/aarush.png";
import mutahItImg from "../../public/images/mutah-it.png";
import randQuoteImg from "../../public/images/randquote.png";
import redditCloneImg from "../../public/images/reddit-clone.png";
import theDojoImg from "../../public/images/the-dojo.png";
import shawerrImg from "../../public/images/shawerr.png";
import arabicPoetryImg from "../../public/images/arabic-poetry.png";

export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Aarush Mishra",
  expertise: ["Software Engineer", "UI/UX Designer"],
  about:
    "I’m a passionate Full Stack Web Developer based in Mumbai, India. I have a strong interest in UI/UX design and am committed to creating visually stunning and user-friendly websites. I’m looking forward to exploring new opportunities to enhance my skills and contribute to innovative projects.",
  btnText: "Get my resume",
};

export const aboutData = {
  title: "About My",
  cards: [
    {
      title: "Past",
      text: "I discovered my passion for programming at 16, inspired by my friend Saurabh’s love for web development. What started as a fun hobby quickly became a serious interest. Since then, I’ve been hooked on the creative freedom coding offers, constantly learning, building, and leveling up my skills.",
    },
    {
      title: "Present",
      text: "I’m a final-year software engineering student at Sandip University, passionate about building impactful web applications and full-stack solutions. I’m actively working on projects and freelancing to refine my skills in modern web technologies. As a developer, I aim to create seamless user experiences and scalable solutions while staying ahead of industry trends.",
    },
    {
      title: "Future",
      text: "Looking ahead, I'm excited about the future of programming and the endless opportunities it presents. I'm confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.",
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Front End",
      skills: [
        "HTML",
        "JavaScript",
        "TypeScript",
        "React",
        "Next",
        "Express",
        "Firebase",
      ],
    },
    {
      title: "Styling & Design",
      skills: [
        "CSS",
        "SASS",
        "BootStrap",
        "Tailwind CSS",
        "CSS Module",
        "Figma",
        "Styled-Components",
      ],
    },
    {
      title: "Miscellaneous",
      skills: [
        "Git",
        "GitHub",
        "react-testing-library",
        "Webpack",
        "UI/UX design processes",
        "REST APIs",
      ],
    },
  ],
};

export const contactData = {
  title: "Want To",
  cards: [
    {
      title: "offer job opportunity?",
      text: "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
    },
    {
      title: "Connect?",
      text: "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
    },
    {
      title: "Build something?",
      text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  ],
 links: [
  {
    label: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=aarushmishrashitalaprasad@gmail.com&su=Hello%20Aarush&body=I%20wanted%20to%20connect%20with%20you!",
  },

    {
      label: "GitHub",
      url: "https://github.com/A4rush",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/aarush-mishra-29a28927a/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "Linkshortner",
        image: "/images/arabic-poetry.png",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "MongoDB",
        "PostgreSQL",
        "TailwindCss",
      ],
      description:
        "A sleek, fast URL shortener that converts long links into simple, shareable URLs. Designed with modern web tech for smooth performance and ease of use, it helps users share cleaner links effortlessly while tracking basic analytics. Perfect for anyone looking to streamline link sharing.",
      demoUrl: "https://github.com/A4rush/Linkshort",
      codeUrl: "",
    },
    {
      name: "Dear Logistics",
      image: "/images/shawerr.png",
      technologies: [
        "React.js",
        "MongoDB",
        "TailwindCss",
        "Node.js",
        "Express.js",
        
      ],
      description:
        "Dear Logistics is a modern logistics management platform built to streamline operations for delivery and transport businesses. It simplifies driver management, order assignments, and workflows, helping companies manage their logistics efficiently and boost overall productivity.",
      demoUrl: "#",
      codeUrl: "",
    },
   /* {
      name: "Qarora",
      image: qaroraImg,
      technologies: [
        "TypeScript",
        "Next",
        "React",
        "TailwindCss",
        "Firebase",
        "React Hook Form",
        "Zod",
      ],
      description:
        "Qarora is a groundbreaking platform redefining water bottle orders in Jordan. With categorized stations, detailed pages, and an admin panel for easy management, Qarora ensures a seamless experience.",
      demoUrl: "https://qwater-jo.com",
      codeUrl: "",
    },
    {
      name: "Bookie",
      image: bookieImg,
      technologies: [
        "TypeScript",
        "React",
        "Next",
        "Redux",
        "Module SCSS",
        "Firebase",
        "Sanity",
      ],
      description:
        "Bookie is a modern e-commerce platform designed exclusively for book lovers. It offers a diverse collection of books across various genres, creating an immersive online bookstore experience. With its sleek and contemporary design, Bookie provides a visually appealing platform for browsing and discovering captivating titles.",
      demoUrl: "https://bookie-store.vercel.app/",
      codeUrl: "https://github.com/MuhammadJaafer/bookie",
    },
    {
      name: "Reddit Clone",
      image: redditCloneImg,
      technologies: [
        "TypeScript",
        "React",
        "Next",
        "Recoil",
        "Styled-Components",
        "Firebase",
      ],
      description:
        "A fully functional Reddit clone built with the latest technology in the web development field, allowing users to create communities, as well as create, post, and upvote content, comment on and vote on other users' content.",
      demoUrl: "https://m7-reddit-clone.vercel.app/",
      codeUrl: "https://github.com/MuhammadJaafer/reddit-clone",
    },
    {
      name: "Mutah IT",
      technologies: ["JavaScript", "React", "Styled-Components", "Firebase"],
      image: mutahItImg,
      description:
        "A one-stop destination for IT students at Mutah University, the platform provides a wealth of resources, including course explanations, study plans, and trial exams specifically designed for all IT majors at Mutah University.",

      demoUrl: "https://mutah-it.com/",
      codeUrl: "",
    },
    {
      name: "The Dojo",
      image: theDojoImg,
      technologies: ["React", "CSS Module", "Firebase"],
      description:
        "The Dojo is a project management website that offers a plethora of useful features, including tools for assigning tasks and real-time communication with team members. It also incorporates a custom-made authentication system to ensure secure access and user management.",
      demoUrl: "https://the-dojo-app.netlify.app/",
      codeUrl: "https://github.com/MuhammadJaafer/the-dojo",
    },
    {
      name: "RandQuote",
      image: randQuoteImg,
      technologies: ["Javascript", "REST APIs", "OOP"],
      description:
        "RandQuote is a website that showcases random quotes, offering features such as copying the quote or saving it as an image. It also provides translation between Arabic and English. All of these features have been implemented using vanilla JavaScript and an object-oriented programming (OOP) architecture.",
      demoUrl: "https://randquotee.netlify.app/",
      codeUrl: "https://github.com/MuhammadJaafer/randQuote",
    },*/
  ],
};
