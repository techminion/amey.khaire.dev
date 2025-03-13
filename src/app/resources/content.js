import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Amey",
  lastName: "Khaire",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developer and Tinkerer</>,
  subline: (
    <>
      I'm Amey, a freelance software engineer
      <br /> I build products for the web. After hours, I build my own projects.
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
        Amey is a Hyderabad-based software engineer with a passion for
        transforming complex challenges into simple, elegant software solutions.
        His work spans web applications, mobile apps, and the convergence of
        software and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Amazon",
        timeframe: "2020 - 2024",
        role: "System Development Engineer",
        achievements: [
          <>
            Successfully migrated an existing Ruby on Rails application to
            modern technologies, including React and GraphQL, to enhance user
            experience, improve performance, and enable real-time data fetching.
          </>,
          <>
            Handled infrastructure migration for multiple Tier1 services in
            order to improve the performance of the service and reduce the cost
            of operation.
          </>,
          <>
            Developed a service which automates the migration of code base to
            JDK17. This service is developed in Python.
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
        role: "Software Engineer",
        achievements: [
          <>
            Streamlined the process of deployment for better ease of development
            and testing. Created shell scripts which helped in setting up
            scratch environments for development/testing purpose
          </>,
          <>
            Improved the payment flow for order paid using credit cards, which
            helped in saving around $50k per month.
          </>,
          <>
            Led an Agile team in developing an e-commerce web application,
            utilizing Laravel framework, React (JavaScript Library), HTML, CSS,
            and AWS Lambda for serverless backend processing, improving
            operational efficiency by 30%.
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
        description: (
          <>Studied Electronics and Telecommunication Engineering.</>
        ),
      },
      {
        name: "IACSD",
        description: <>Studied Computer Science and Engineering.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
