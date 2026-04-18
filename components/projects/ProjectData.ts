import {
  SiPython,
  SiFlask,
  SiReact,
  SiPostgresql,
  SiNextdotjs,
  SiSupabase,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";


export const projects = [
  {
    title: "Class Record System",
    description:
      "The Class Records System is a school project for fulfilling one of the requirements of the course CSC181 - Software Engineering. This web application serves as a manager for the class records of the sections handled by a professor. Its features include basic CRUD operations for sections and the assessments of said sections. Other features include visualization of the data of each class record for better insights on the performance of each class.",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "React", icon: SiReact },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    github: "https://github.com/fransheeshco/class-records-system",
    photo: "/MCS-Final.png"
  },
  {
    title: "Student Information System",
    description:
      "Oracle is a simple student information management system developed as part of the course CCC181 – Application Development and Emerging Technologies. The system allows users to manage student records, including personal information, and program enrollments.",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flask", icon: SiFlask },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
    ],
    github: "https://github.com/fransheeshco/ccc181-ssis-web",
    photo: "/Oracle.png",
  },
  {
    title: "Quanta Finance Tracker",
    description:
      "Quanta is a simple tracking application designed to help users monitor their financial activities. From income to expenses, quanta manages it and uses graphs to visualize the data for better insights on the user's financial status.",
    tech: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
    ],
    github: "https://github.com/fransheeshco/quanta-finance-tracker",
    photo: "/Quanta-Landing-Page.png",
  },
];