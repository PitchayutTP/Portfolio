// ข้อมูลจาก Resume.pdf — แก้ไขเนื้อหาที่แสดงบนเว็บไซต์ได้จากไฟล์นี้
export const profile = {
  brand: "PITCHAYUT",
  name: "Pitchayut",
  fullName: "Pitchayut Petchyen",
  email: "pitchayuth29@gmail.com",
  phone: "099-187-5693",
  phoneHref: "tel:+66991875693",
  github: "https://github.com/PitchayutTP",
  location: "Bangkok, Thailand",
  portfolioLabel: "Projects, activities & learning",
  intro: "A collection of my projects and learning experiences in web development, cloud applications, and data visualization.",
  about: "Hi, I’m Tar — Pitchayut Petchyen, an Information Technology student in the Software Engineering Track at King Mongkut’s Institute of Technology Ladkrabang (KMITL).",
  interests: "My work spans full-stack web applications, location tracking, sports video management, and interactive analytics dashboards.",
  education: {
    institution: "King Mongkut’s Institute of Technology Ladkrabang (KMITL)",
    school: "School of Information Technology",
    track: "Software Engineering Track",
    status: "In progress",
  },
};

// ใส่ url / source เมื่อมีลิงก์จริง; image เป็น path รูปผลงานใน public เช่น /projects/pettracks.jpg
export const projects = [
  {
    id: "01",
    title: "PetTracks",
    subtitle: "Pet Management & Location Tracking",
    category: "Full-stack application",
    type: "fullstack",
    tags: ["Python", "Flask", "PostgreSQL", "GCP", "Docker", "Jenkins"],
    description: "A full-stack web application for managing pet profiles, uploading images, and tracking locations with configurable geofencing.",
    features: [
      "Pet profiles and image uploads with JWT authentication and bcrypt password hashing.",
      "Mobile GPS capture using the Geolocation API, with coordinates sent to a Flask backend exposed through ngrok and stored in PostgreSQL.",
      "Location updates every 5 seconds on Leaflet and OpenStreetMap, with configurable geofencing and on-page alerts outside the designated area.",
      "Deployment on Google Cloud Platform using Docker Compose, with a Jenkins pipeline for Docker image builds and container startup.",
    ],
    image: "", imageAlt: "", url: "", source: "",
  },
  {
    id: "02",
    title: "MyMatchHistory",
    subtitle: "Sports Match History & Video Management",
    category: "Cloud web application",
    type: "fullstack",
    tags: ["Vue Router", "JavaScript", "AWS Lambda", "Cognito", "S3", "DynamoDB"],
    description: "A responsive platform for recording sports results, managing match history, and searching and playing uploaded videos.",
    features: [
      "User registration, email verification, and sign-in through Amazon Cognito, with authentication guards in Vue Router.",
      "Direct video and thumbnail uploads to Amazon S3 using presigned URLs with a 5-minute expiration.",
      "JavaScript handlers for AWS Lambda to manage match records and user profiles in DynamoDB.",
      "A secondary index to retrieve each user’s match history.",
    ],
    image: "", imageAlt: "", url: "", source: "",
  },
  {
    id: "03",
    title: "LeagueScout",
    subtitle: "Football Scouting & Analytics Dashboard",
    category: "Frontend dashboard",
    type: "frontend",
    tags: ["React", "Tailwind CSS", "Recharts", "JSON"],
    description: "An interactive football scouting dashboard built with React and Tailwind CSS to explore a JSON dataset of 30 player profiles.",
    features: [
      "Player search and multi-criteria filtering by position, league, age, and market value, with sorting by overall rating and potential.",
      "Radar and stacked bar charts with Recharts for player attributes, seasonal goals, and assists.",
      "An interactive ability-versus-price matrix to compare player ratings against market valuations.",
      "Custom value-based rankings for comparing player profiles.",
    ],
    image: "", imageAlt: "", url: "", source: "",
  },
];

export const skillGroups = [
  { icon: "</>", title: "Languages", detail: "Programming and web fundamentals.", skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"] },
  { icon: "{ }", title: "Frameworks & libraries", detail: "Building interfaces and applications.", skills: ["React", "Tailwind CSS", "Node.js", "Express.js"] },
  { icon: "▤", title: "Databases", detail: "Storing and managing application data.", skills: ["PostgreSQL", "SQLite", "MongoDB"] },
  { icon: "⌘", title: "Cloud & tools", detail: "Deployment, automation, and version control.", skills: ["AWS", "GCP", "Docker", "Jenkins", "Git", "GitHub"] },
];

// วันที่ไม่ระบุในเรซูเม่จึงเว้นว่างไว้; เพิ่มรูปและลิงก์กิจกรรมได้ภายหลัง
export const activities = [
  {
    id: "et-robot-teaching-assistant",
    title: "Introduction to ET Robot Programming",
    category: "TEACHING ASSISTANT",
    date: "",
    dateLabel: "",
    cohort: "Cohorts 8 & 9",
    role: "Teaching Assistant",
    organizer: "School of Information Technology, KMITL",
    description: "Assisted instructors in delivering hands-on Python and introductory robotics workshops for secondary school students.",
    tags: ["Python", "Robotics", "Teaching", "Debugging"],
    highlights: [
      "Guided participants through programming exercises.",
      "Helped students debug code during hands-on workshops.",
      "Supported robot control activities.",
    ],
    images: [
      { src: "/activities/et-robot-1.jpg", alt: "", caption: "" },
      { src: "/activities/et-robot-2.jpg", alt: "", caption: "" },
    ],
    url: "",
  },
];
