import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Amey",
  lastName: "Khaire",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-stack & Platform Engineer",
  avatar: "/images/avatar.png",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/techminion",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/amey-khaire01/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:amey@khaire.dev",
  },
];

const home = {
  label: "Home",
  title: `${person.name} — Full-stack & Platform Engineer`,
  description:
    "Amey Khaire builds web products in TypeScript and keeps production observable. Hyderabad based.",
  headline: <>I build the product, then make sure it stays up.</>,
  subline: (
    <>
      I'm Amey, a Hyderabad based engineer. By day, platform and observability at DP World.
      <br /> The rest of the time, full-stack TypeScript and a few side projects that ship.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/amey-khaire",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hyderabad based engineer with two halves that get along. One half writes full-stack
        TypeScript: React, React Native and Next.js on the front, Node and NestJS behind it,
        Postgres, Supabase, MongoDB and Redis underneath. The other half runs platform and
        observability: OpenTelemetry, metrics, traces and logs, Kubernetes on Azure, and enough
        automation that nobody has to do the same thing twice. I like software that is boring in
        production and pleasant to use.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DP World",
        timeframe: "July 2025 - Present",
        role: "Platform & Observability Engineer",
        achievements: [
          <>
            Build and run the observability stack: OpenTelemetry instrumentation feeding
            VictoriaMetrics, Tempo, Loki and Grafana, so incidents start with evidence instead of
            guesses.
          </>,
          <>
            Operate workloads on Azure Kubernetes Service and automate the repetitive parts with
            Ansible and Python.
          </>,
          <>
            Do JVM forensics (heap, thread and GC analysis) when a service misbehaves, and automate
            Jira/JSM workflows so tickets route themselves.
          </>,
        ],
        images: [
          {
            src: "/images/work/dpworld.svg",
            alt: "DP World Logo",
            width: 25,
            height: 9,
          },
        ],
      },
      {
        company: "Amazon",
        timeframe: "2020 - 2024",
        role: "System Development Engineer",
        achievements: [
          <>
            Successfully migrated an existing Ruby on Rails application to modern technologies,
            including React and GraphQL, to enhance user experience, improve performance, and enable
            real-time data fetching.
          </>,
          <>
            Handled infrastructure migration for multiple Tier1 services in order to improve the
            performance of the service and reduce the cost of operation.
          </>,
          <>
            Developed a service which automates the migration of code base to JDK17. This service is
            developed in Python.
          </>,
          <>Contributed to system design of multiple internal tools.</>,
        ],
        images: [
          {
            src: "/images/work/amazon.png",
            alt: "Amazon Logo",
            width: 25,
            height: 9,
          },
        ],
      },
      {
        company: "Cybage",
        timeframe: "2019 - 2020",
        role: "Full-stack & Platform Engineer",
        achievements: [
          <>
            Streamlined the process of deployment for better ease of development and testing.
            Created shell scripts which helped in setting up scratch environments for
            development/testing purpose
          </>,
          <>
            Improved the payment flow for order paid using credit cards, which helped in saving
            around $50k per month.
          </>,
          <>
            Led an Agile team in developing an e-commerce web application, utilizing Laravel
            framework, React (JavaScript Library), HTML, CSS, and AWS Lambda for serverless backend
            processing, improving operational efficiency by 30%.
          </>,
        ],
        images: [
          {
            src: "/images/work/cybage.png",
            alt: "Cybage Logo",
            width: 25,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Government College of Engineering, Jalgaon",
        description: <>Studied Electronics and Telecommunication Engineering.</>,
      },
      {
        name: "IACSD",
        description: <>Studied Computer Science and Engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            React, React Native, Next.js, TypeScript. Interfaces that load fast and stay out of the
            way.
          </>
        ),
        images: [],
      },
      {
        title: "Backend & data",
        description: (
          <>Node.js, NestJS, PostgreSQL, Supabase, MongoDB, Redis. APIs with sensible boundaries.</>
        ),
        images: [],
      },
      {
        title: "Platform & observability",
        description: (
          <>OpenTelemetry, VictoriaMetrics, Grafana, Tempo, Loki, Azure AKS, Ansible, Python.</>
        ),
        images: [],
      },
      {
        title: "Linux & infra",
        description: (
          <>RHEL/Rocky Linux, Podman with Quadlet, Caddy. Self-hosting without the drama.</>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Notes on building and running software by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Projects",
  description: `Things ${person.name} has built`,
  // Create new project pages by adding a new .mdx file to app/work/projects
};

export { person, social, home, about, blog, work };
