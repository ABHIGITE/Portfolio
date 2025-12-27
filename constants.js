//Skills Section Logo

import htmlLogo from './src/assets/TechLogo/html.png';
import angularLogo from './src/assets/TechLogo/angular.png';
import cppLogo from './src/assets/TechLogo/cpp.png';
import cssLogo from './src/assets/TechLogo/css.png';
import expreeLogo from './src/assets/TechLogo/express.png';
import gitLogo from './src/assets/TechLogo/git.png';
import githubLogo from './src/assets/TechLogo/github.png';
import javaLogo from './src/assets/TechLogo/java.png';
import javascriptLogo from './src/assets/TechLogo/javascript.png';
import mongodbLogo from './src/assets/TechLogo/mongodb.png';
import mysqlLogo from './src/assets/TechLogo/mysql.png';
import nodejsLogo from './src/assets/TechLogo/nodejs.png';
import reactjsLogo from './src/assets/TechLogo/reactjs.png';
import tailwindcssLogo from './src/assets/TechLogo/tailwindcss.png';
import vscodeLogo from './src/assets/TechLogo/vscode.png';
import pythonLogo from './src/assets/TechLogo/python.png';
import project1Logo from './src/assets/Projects/Project1.png';
import project2Logo from './src/assets/Projects/Project2.png';

//Education Section Logo

import BELogo from './src/assets/Education/BE_logo.png';
import hscLogo from './src/assets/Education/hsc_logo.png';
import sscLogo from './src/assets/Education/ssc_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ]
  }
];

  export const projects = [
    {
      id: 0,
      title: "AI ML Driven Solution for Pest Detection in Precision Agriculture",
      description:
        "Developed a CNN-based model for field pest classification and collected, annotated, and pre-processed pest images to enhance model training. Achieved high accuracy in pest identification, contributing to improved crop health and yield.",
      image: project1Logo,
      tags: ["Python","Machine Learning","Deep Learning","SQL"],
      github: "https://github.com/ABHIGITE/AI-ML-Driven-Solution-for-Pest-Detection-in-Precision-Agriculture",
    },

    {
      id: 1,
      title: "Employee Management System",
      description:
        "Built a responsive task management app using React.js, Tailwind CSS, and JavaScript, Enabled role-based login with dynamic dashboards for Admin and Employee. Implemented task updates and data storage using LocalStorage.",
      image: project2Logo,
      tags: ["React.js","JavaScript","TailwindCSS"],
      github: "https://github.com/ABHIGITE/Employee_Management_System",
    }
  ];  

   export const education = [
    {
      id: 0,
      img: BELogo,
      school: "Sinhgad Institute of Technology, Lonavala",
      date: "2021 - 2025",
      grade: "7.66 CGPA",
      desc: "I have completed my Bachlors of Engineering (BE) in Information Technology from Savitribai Phule Pune University, Pune. During academic, I gained a strong foundation in programming, software development. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience during academics has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachlors of Engineering - BE(Information Technology)",
    },
    {
      id: 1,
      img: hscLogo,
      school: "Rajiv Gandhi Arts & Science College, Buldhana",
      date: "2019 - 2021",
      grade: "88%",
      desc: "I completed my 12th Science education with a strong focus on Physics, Chemistry, and Mathematics, which helped me build a solid analytical and problem-solving foundation. During this phase, I developed a keen interest in logical thinking and numerical reasoning, while gaining exposure to core scientific principles. My academic journey at this level strengthened my discipline, curiosity, and ability to approach complex problems methodically, laying the groundwork for my future studies in Computer Science.",
      degree: "Higher Secondary Certificate (12th)",
    },
    {
      id: 2,
      img: sscLogo,
      school: "C T M K Gujrati High School, Jalna",
      date: "2018 - 2019",
      grade: "82%",
      desc: "I completed my Class 10 education from C T M K High School, Jalna, under Maharashtra State Board. During this stage, I built a strong academic foundation across core subjects, developing essential skills in logical thinking, problem-solving, and discipline. This phase of my education helped shape my learning approach and prepared me for higher studies in science and technology.",
      degree: "Secondary School Certificate (10th)",
    }
  
  ];