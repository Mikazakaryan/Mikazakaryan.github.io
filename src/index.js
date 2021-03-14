import React from "react";
import { render } from "react-snapshot";

import Person from "./components/Person";
import Header from "./components/Header";
import Section from "./components/Section";

const skills = [
  "C++ (Qt, STL)",
  "JavaScript (Node JS, React JS, Typescript)",
  "Data structures, Algorithms",
  "GIT",
  "OOP, FP",
  "DB (ArangoDB, PostgreSQL, MongoDB, SQLite, Redis)",
  "Steganography, Cryptography",
  "Networking, System Operations (basics)",
];

const jobs = [
  {
    title: "Adobe Development ARM LLC - Software Engineer",
    startDate: "Feb, 2021",
    description: "",
  },
  {
    title: "Web Development Instructor",
    startDate: "july, 2018",
    description: `Conducted a number of workshops and courses teaching Web Development basic and advanced skills.
    Mainly teaching JavaScript/NodeJS and famous frameworks such as ReactJS.`,
  },
  {
    title: "Gruv LLC - Full Stack Developer",
    startDate: "April, 2019",
    endDate: "Jan, 2021",
    description: `Full Stack Development with Graph DBs and suggestion systems. Architecting Graph-backed databases
    to enable community detection, personalized suggestions/recommendations. Building NodeJS based API
    services using Express, JSON-API, and Micro-Serivice architecture. Building ReactJS based apps using
    Redux/Rematch and NextJS that rely on REST-ful APIs. Writing unit and integration tests.`,
  },
  {
    title: "Inomma LLC - Full Stack JS Developer",
    link: "https://coinstats.app/",
    linkName: "Coin Stats Web",
    startDate: "March, 2018",
    endDate: "April, 2019",
    description: `Developing and designing responsive UI with ReactJS, Next. JS and Redux.
    Creating back-end architecture with NodeJS/Express and PostgreSQL/MongoDB.`,
  },
  {
    title: "GGLabs - Internship",
    startDate: "November, 2017",
    endDate: "January, 2018",
    description: `Created UI templates using ReactJS.
    Implemented backend for internship projects with NodeJS/Express and PostgreSQL.
    Implemented Ride Destination suggestion algorithms with C++.
    Participated in React/NodeJS and C++ workshops.`,
  },
  {
    title: "Optym - Internship",
    startDate: "June, 2017",
    endDate: "August, 2017",
    description: `Developed a backend for internship project with C# and MsSQL,
    Participated in C#/MsSQL warkshops`,
  },
];

const education = [
  {
    title: "National Polytechnic University of Armenia",
    startDate: "2012",
    endDate: "2018",
    description: `Bachelor in Computer Systems and Informatics, (ISSD) information security and software development department, Yerevan, Armenia,`,
  },
];

const projects = [
  {
    title: "",
    link: "https://github.com/Mikazakaryan/MySteg",
    linkName: "Capstone Project (Diploma Work)",
    description: `Created a steganography software, using my own algorithm based on LSB, which encrypts and conceals
    any kind of message in a WAV audio format. The program also verifies consistency of the message after
    retrieving it using generated key. Technologies and standards used in the project are C++ (QT), AES, SHA, LSB`,
  },
  {
    title: "Member of",
    link: "https://www.facebook.com/groups/iterate/",
    linkName: "iteratehackerspace",
    description: `Organized and participated in public workshops/talks, trying a create an open tech community in Armenia`,
  },
];

const hackathons = [
  {
    title:
      "EVOCATHON, Innovation solutions and technology center (ISTC) and Evocca Bank",
    description: "One of the winners for innovative solution.",
  },
  {
    title: "ARMCTF, ArmSec armenia",
    description:
      "Third place of Armenian local CTF(Capture the flag) challenge",
  },
  {
    title:
      "Climate Tech Hackathon, Innovation solutions and technology center (ISTC) and United Nations Development Programme",
    description: "One of the winners for innovative solution.",
  },
  {
    title:
      "GEEKS Against GBV Hackathon, Innovation solutions and technology center (ISTC) And United Nations (UN)",
    description: "Winner for best solution.",
  },
  {
    title:
      "Telecommunication Hackathon, Microsoft Innovation Center Armenia (MIC Armenia) and Beeline Armenia",
    description: "One of the winners for innovative solution.",
  },
  {
    title:
      "Smarter Armenia Hackathon, Innovation solutions and technology center (ISTC)",
    description:
      "Winner of Special prize for most innovative solution using IBM Bluemix and Watson.",
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{ padding: "20px", width: "60%", backgroundColor: "#EEEEEE" }}
      >
        <Person
          fullName="Michael Zakaryan"
          email="mikazakaryan94@gmail.com"
          phone="+374 9111 9395"
          links={[
            { name: "Github", link: "https://github.com/Mikazakaryan" },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/michael-zakaryan/",
            },
          ]}
        />
        <Header text="experience" />
        {jobs.map((el) => (
          <Section {...el} key={el.title} />
        ))}
        <Header text="skills" />
        <ul>
          {skills.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <Header text="education" />
        {education.map((el) => (
          <Section {...el} key={el.title} />
        ))}
        <Header text="projects" />
        {projects.map((el) => (
          <Section {...el} key={el.title} />
        ))}
        <Header text="hackathons" />
        {hackathons.map((el) => (
          <Section {...el} key={el.title} />
        ))}
        <Header text="languages" />
        <Header
          text="Armenian (Native) Russian (Fluent) English (Advanced)"
          isStyled={false}
        />
        <Header text="MILITARY SERVICE" />
        <Section
          title="The Armed Forces of Armenia"
          startDate="2012"
          endDate="2014"
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
