import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sivaprakash",
  lastName: "Raman",
  name: `SivaprakashRaman`,
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "sivaprakashraman@outlook.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    //link: "https://github.com/once-ui-system",
    link: "https://github.com/sherksiva"
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    //link: "https://www.linkedin.com/company/once-ui/",
    link: "https://www.linkedin.com/in/sivaprakash-raman-71ba4911a/"
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Sivaprakash Raman</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm a senior software engineer{" "}
      , totally 8 . 5 years experienced.
      <br /> 5 years experienced as a fullstack developer...
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        IT Professional with over 8+ years of experience in Full-Stack development, specializing in dynamic web projects and Cloud-based E-Commerce Point of Sale (POS) systems. Proficient in React, Angular, Node JS, and JavaScript , demonstrating strong technical skills across multiple programming languages. Proven track record in managing projects effectively while maintaining excellent customer relations. Expertise in all stages of the development cycle ensures timely and successful project delivery.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "US Technology International Private Limited",
        timeframe: "07/2024 - 05/2025",
        role: "SENIOR SOFTWARE ENGINEER",
        achievements: [
	   <>
            Had a chance to work in client place "Applied Materials".
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        company: "Photon Pvt, Ltd",
        timeframe: "10/2020 - 05/2023",
        role: "SENIOR SOFTWARE DEVELOPER",
        achievements: [
	  <>
           Had a chance to work in client place "samsung".
          </>,
	  <>
            While work on client "Samsung", had a chance to perform a associate team lead for internal members.
          </>,
          <>
            Got "60%" hike while work for client samsung"
          </>
        ],
        images: [],
      },
      {
        company: "Tech Mango Pvt, Ltd. (SMI Group of Companies)",
        timeframe: "04/2020 - 10/2020",
        role: "SENIOR SOFTWARE DEVELOPER",
        achievements: [
        ],
        images: [],
      },
      {
        company: "Sri Mookambika info Solutions Private Limited (SMI Group of Companies)",
        timeframe: "03/2019 - 04/2020",
        role: "SENIOR SOFTWARE DEVELOPER",
        achievements: [
           <>
           Had a chance to work with client name called "GHX", USA.
          </>
        ],
        images: [],
      },
      {
        company: "Great Innovus Solutions Pvt, Ltd",
        timeframe: "09/2015 - 02/2019",
        role: "FULL STACK DEVELOPER",
        achievements: [
          <>
           Had a chance to work with client name called "ONEVIEW COMMERCE", USA.
          </>,
          <>
          Got a BEST PERFORMER OF THE YEAR @ 2018.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
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
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
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

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
