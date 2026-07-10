export const navItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'About', path: '/about', icon: 'person' },
  { label: 'Skills', path: '/skills', icon: 'terminal' },
  { label: 'Education', path: '/education', icon: 'school' },
  { label: 'Projects', path: '/projects', icon: 'code' },
  { label: 'Blog', path: '/blog', icon: 'school' },
  { label: 'Contact', path: '/contact', icon: 'mail' },
];

export const projects = [
  {
    category: 'Development',
    title: 'Portfolio Template',
    icon: 'architecture',
    description:
      'Event-driven microservices architecture for real-time supply chain tracking with sub-200ms latency across multi-region AWS clusters.',
    stack: ['Vue 3', 'Bootstrap', 'Typescript'],
    status: 'Open Sourced',
    statusTone: 'completed',
  },
  {
    category: 'System Architecture',
    title: 'Linops Tool-Kit',
    icon: 'Neurology',
    description:
      'A documentation intelligence agent that indexes product knowledge, generates implementation notes, and keeps engineering context searchable.',
    stack: ['Python', 'Flask', 'Docker'],
    status: 'Open Sourced',
    statusTone: 'completed',
  },
  {
    category: 'Machine Learning',
    title: 'Model Traning',
    icon: 'lan',
    description:
      'Internal deployment dashboard with environment health checks, rollback controls, observability links, and release audit trails.',
    stack: ['Google Collab', 'Pandas', 'Python 3'],
    status: 'Completed',
    statusTone: 'completed',
  },
  {
    category: 'Full Stack',
    title: 'Instiute Management System (IMS)',
    icon: 'architecture',
    description:
      'Team Project with friends, played a key role of "Project Management" and "Resource Manager."',
    stack: ['React', 'Javascript', 'PHP(Laravel)'],
    status: 'In Progress',
    statusTone: 'progress',
  },
  {
    category: 'Security',
    title: 'Cyber Operations Simulator',
    icon: 'shield_lock',
    description:
      'A Fake hacke simulator generating all the frontend based on real-time.',
    stack: ['TypeScript', 'Python', 'Html 5', 'Bootstrap'],
    status: 'Live',
    statusTone: 'completed',
  },
  {
    category: 'Automation',
    title: 'React App-Generator',
    icon: 'precision_manufacturing',
    description:
      'CLI based Defualt React app generator automation, generates react app based on user inputs and install nessesary packages.',
    stack: ['Python', 'Flask'],
    status: 'Open Sourced',
    statusTone: 'completed',
  },
];

export const skills = [
 {
  title: 'Frontend Skills',
  icon: 'desktop_windows',
  span: 'md:col-span-5',
  items: [
    ['JavaScript (ES6+)', '94%', '1+ Years'],
    ['React ', '95%', '1+ Years'],
    ['Tailwind CSS', '92%', '1+ Years'],
    ['Bootstrap 5', '96%', '1+ Years'],
    ['Responsive Design', '95%', '2+ Years'],
    ['Framer Motion', '86%', 'Learning'],
    ['Component Architecture', '91%', '6+ months'],
    ['State Management', '88%', 'Intermediate'],
    ['Git & GitHub', '90%', '1+ Years'],
    ['SEO Fundamentals', '86%', 'Intermediate'],
    ['Continuous Learning', '100%', 'Daily'],
  ],
},
 {
  title: 'Backend Systems',
  icon: 'dns',
  span: 'md:col-span-7',
  items: [
    ['Node.js', '88%', '1+ Years'],
    ['Express.js', '53%', 'Learning'],
    ['Python', '90%', 'Intermediate'],
    ['Flask', '78%', 'Intermediate'],
    ['MySQL', '45%', 'Learning'],
    ['Problem Solving', '96%', 'Strong'],
    ['REST API Development', '88%', 'Intermediate'],
    ['Problem Solving', '95%', 'Strong'],
    ['Debugging & Troubleshooting', '93%', 'Strong'],
  ],
},
  {
  title: 'Cloud & DevOps',
  icon: 'cloud_sync',
  span: 'md:col-span-7',
  items: [
    ['Linux Administration', '90%', '1+ Years'],
    ['Docker', '82%', 'Learning'],
    ['Git & GitHub', '91%', '1+ Years'],
    ['GitHub Actions', '80%', 'Learning'],
    ['Netlify & Vercel', '89%', 'Production'],
    ['CI/CD Fundamentals', '81%', 'Learning'],
    ['Problem Solving', '95%', 'Strong'],
  ],
},
  {
  title: 'Engineering Practice',
  icon: 'hub',
  span: 'md:col-span-5',
  items: [
    ['Component Architecture', '90%', 'Intermediate'],
    ['Performance Optimization', '87%', 'Intermediate'],
    ['Code Refactoring', '90%', 'Strong'],
    ['Clean Code Practices', '91%', 'Strong'],
    ['Technical Documentation', '85%', 'Good'],
    ['Testing & Debugging', '92%', 'Strong'],
    ['Time Management', '93%', 'Strong'],
    ['Analytical Thinking', '94%', 'Strong'],
    ['Adaptability', '98%', 'Excellent'],
  ],
},
];

export const credentials = [
  {
    period: '2026 - Present',
    title: 'Matriculation (High School)',
    place: 'Spirit School, Faisalabad',
    tags: ['Mathematics', 'Computer Science', 'Development & Leaarning'],
    active: true,
  },
  {
    period: 'Upcoming Pathway',
    title: 'Intermediate in Computer Sciences',
    place: 'Focusing on Physics, Statistics, and Advanced Computer Programming.',
    tags: ['Grooming', 'Core Programming', 'Fundamental Concepts'],
  },
  {
    period: 'Planned Track',
    title: 'ADP Data Engineering',
    place: 'A long-form academic path focused on Big Data Engineering and exploring Big Data Analysis.',
    tags: ['Big Data Engineering', 'Deep Research', 'Data Scraping'],
  },
];

export const certifications = [
  ['Front-End Developer (React)', 'Achieved by cracking the dedicated React developement Test by Hacker Rank'],
  ['Python (Basics)', 'Achieved by Resolving the Python Basic Automation Test by Hacker Rank'],
  ['Javascript (Intermediate)', 'Created a Progam to Add different numbers and prosess them using Math Object by Hacker Rank'],
];

export const blogPosts = [
  {
    slug: 'linops-toolkit',
    title: 'Building LinOps Toolkit: From Linux Learner to System Builder',
    date: '2025-01-20',
    eyebrow: 'Project Story',
    description:
      'A hands‑on journey into Linux, DevOps, and automation through a single practical project.',
    intro:
      "Learning Linux was one of the best decisions I made as a developer, but I quickly discovered that simply reading documentation wasn't enough. I wanted a way to practice commands, understand how the operating system works, and automate everyday tasks. That idea became <span class=\"text-primary font-mono font-bold\">LinOps Toolkit</span>.",
    whatIs:
      'LinOps Toolkit is a personal project that I built to improve my Linux, DevOps, and automation skills through hands‑on experience. Instead of creating another simple application, I wanted to build a toolkit that solves real problems while helping me learn new technologies along the way.',
    techStack: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'Bash Scripting',
      'Linux',
      'DevOps',
    ],
    modules: [
      {
        icon: 'monitoring',
        title: 'System Management',
        text: 'Monitor CPU, memory, disk, processes, files, and network details. Understanding how Linux manages hardware behind the scenes.',
      },
      {
        icon: 'rocket_launch',
        title: 'Automation & DevOps',
        text: 'Execute automation scripts, manage services, inspect logs. Reducing manual toil and learning practical DevOps.',
      },
      {
        icon: 'shield_lock',
        title: 'Cybersecurity & Learning',
        text: 'Safe experimentation environment for commands, permissions, and security concepts without risking production systems.',
      },
    ],
    lessons:
      'One of the biggest lessons I learned while building LinOps Toolkit was that software development is much more than writing code. I spent a lot of time debugging unexpected issues, improving performance, organizing the project structure, and making the user experience more intuitive. Every challenge became an opportunity to learn something new.',
    tips: [
      {
        icon: 'lightbulb',
        title: 'Learn by building, not by reading',
        text: 'Real understanding comes from hands‑on projects. LinOps Toolkit transformed abstract Linux concepts into practical skills I use daily.',
      },
      {
        icon: 'bug_report',
        title: 'Debugging is a superpower',
        text: 'Most of my learning happened while fixing unexpected errors. Embrace them – each bug teaches you something new about the system.',
      },
      {
        icon: 'autorenew',
        title: 'Automate early',
        text: 'Repetitive tasks are a signal to write a script. Even small automation can save hours and reduce mistakes over time.',
      },
      {
        icon: 'security',
        title: 'Experiment safely',
        text: 'Use isolated environments (VMs, containers) to test commands without fear. The Cybersecurity module was born from this mindset.',
      },
    ],
    future:
      'I plan to expand the toolkit with more advanced automation, stronger security utilities, and additional DevOps features. My goal is to make LinOps Toolkit not only a personal learning platform but also a useful resource for students and Linux enthusiasts who want to build their skills through real‑world practice.',
  },
];