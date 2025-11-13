
import { PortfolioData, Section } from './types';

export const portfolioData: PortfolioData = {
  fullName: 'Ishaan Goswami',
  tagline: 'Learning through curiosity and creation.',
  program: 'B.Tech Computer Science & Eng. / B.S. Data Science',
  institution: 'Pandit Deendayal Energy University / IIT Madras',
  contactEmail: 'Ishaan1263745@gmail.com',
  contact: {
    phone: { name: '+91 9265311083', url: 'tel:+919265311083', icon: 'fa-phone' },
    email: { name: 'Ishaan1263745@gmail.com', url: 'mailto:Ishaan1263745@gmail.com', icon: 'fa-envelope' },
    linkedin: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ishaan-goswami-796814282/', icon: 'fa-brands fa-linkedin' },
    github: { name: 'GitHub', url: 'https://github.com/Ishaan2510', icon: 'fa-brands fa-github' },
  },
  introduction: {
    summary: "I'm a Computer Science and Data Science student passionate about data analysis and competitive programming. I explore technology through curiosity-driven learning and hands-on projects, aiming to transition into a data scientist role where I can build intelligent, scalable, and impactful data-driven solutions.",
    philosophy: {
      title: 'Learning Philosophy',
      points: [
        'Self-driven learning through experimentation: The most profound knowledge comes from hands-on building.',
        'Curiosity as the foundation of understanding: Asking "why" and "how" is the first step toward mastery.',
        'Constructive failure as a growth mechanism: Every bug and error is a valuable lesson in disguise.',
        'Blending theory with practice: Theoretical knowledge provides the map, but practical application is the journey.',
        'Building with responsibility: Understanding the ethical implications of data is as crucial as technical proficiency.',
      ],
    },
  },
  education: [
    {
      institution: 'Pandit Deendayal Energy University',
      degree: 'B.Tech in Computer Science and Eng.',
      details: 'CGPA: 9.51',
      period: 'Aug 2023 – Present',
    },
    {
      institution: 'IIT Madras',
      degree: 'B.S. Degree in Data Science',
      details: 'CGPA: 7.56',
      period: 'Sep 2023 – Present',
    },
  ],
  experience: [
    {
      company: 'Elixir Techne',
      role: 'Full Stack Developer Intern',
      period: 'May 2025 – June 2025',
      location: 'Ahmedabad, Gujarat, India',
      description: [
        'Developed data visualization components using Vue.js and backend endpoints with Flask to serve analytical insights.',
        'Leveraged Redis for caching frequently accessed data, significantly improving dashboard loading times and response rates.',
        'Contributed to the design and implementation of data processing tasks using Celery for asynchronous handling of user data.',
        'Gained hands-on experience in building and maintaining systems that handle and process data in a professional environment.',
      ],
    },
  ],
  projects: [
    {
      name: 'HealthFlow App (Database & UI/UX Design)',
      technologies: 'Java, MySQL',
      description: [
        'Designed detailed wireframes and dataflow diagrams for a patient data management application.',
        'Architected a custom, user-centric MySQL database schema to support core application functionalities.',
      ],
    },
    {
      name: 'Instagram User Data Analytics (Trainity)',
      technologies: 'MySQL, SQL',
      description: [
        'Analyzed a large dataset of Instagram user data using SQL to identify key trends and engagement drivers.',
        'Extracted actionable insights on engagement metrics, user behavior patterns, and content performance.',
      ],
    },
  ],
  technicalSkills: [
    { title: 'Languages', skills: 'Python, Java, C++, SQL, JavaScript' },
    { title: 'Data Science & ML', skills: 'NumPy, Pandas, Matplotlib, Scikit-learn' },
    { title: 'Databases', skills: 'MySQL, PostgreSQL, Redis' },
    { title: 'Web Technologies', skills: 'HTML, CSS, Vue.js, Flask' },
    { title: 'Developer Tools', skills: 'Git, GitHub, VS Code, Jupyter Notebooks' },
    { title: 'Core Concepts', skills: 'Data Structures & Algorithms, OOP, DBMS, Statistical Analysis' },
  ],
  competitiveProgramming: [
    { platform: 'LeetCode', details: 'Solved 50+ problems', url: 'https://leetcode.com/u/ishaan_102/' },
    { platform: 'Codeforces', details: 'Participated in 7 contests | Peak Rating 1074 (Pupil)', url: 'https://codeforces.com/profile/ishaan_102' },
    { platform: 'HackerRank', details: '5-Star Badge in SQL | 4-Star Badge in Python', url: 'https://www.hackerrank.com/profile/ishaan1263745' },
  ],
  collaboration: {
    title: 'Collaboration & Leadership',
    hackathon: {
        title: 'Leadership in Competitive Programming',
        points: [
            'Engaged in rapid problem-solving under pressure, quickly turning complex challenges into functional code.',
            'Effectively managed time and resources based on problem difficulty, ensuring maximum scoring potential.',
            'Maintained focus and morale throughout long contests, navigating difficult algorithmic challenges.',
        ],
    },
    internship: {
        title: 'Teamwork in Internship',
        points: [
            'Worked closely with other developers in an agile environment, participating in daily stand-ups and sprint planning.',
            'Contributed to a shared codebase using Git, participating in code reviews to ensure quality and maintainability.',
            'Helped document system architecture and features, which was crucial for team alignment and future development.',
        ],
    },
    communication: {
        title: 'Conflict Resolution & Communication Style',
        text: 'My communication style is direct, clear, and empathetic. I believe in addressing conflicts proactively by fostering an environment where all team members feel comfortable voicing their opinions. When disagreements arise, I focus on finding a data-driven or objective resolution that aligns with the project\'s goals, ensuring that the final decision is a collective one.',
    },
  },
  ethics: {
      title: 'Global & Ethical Awareness',
      caseStudies: [
          {
              title: 'Case Study 1: Data Privacy in User Analytics',
              text: 'When developing the Instagram User Data Analytics project, ethical considerations were paramount. The system\'s insights are directly influenced by user data, which must be handled responsibly.',
              points: [
                  'Data Anonymization: Ensuring all personally identifiable information (PII) was removed or hashed during analysis to protect user privacy.',
                  'Insight Integrity: Focusing on aggregated trends rather than individual user behavior to prevent misuse of data.',
                  'Responsible Reporting: Clearly communicating the limitations of the analysis and avoiding generalizations that could perpetuate stereotypes.',
              ],
          },
          {
              title: 'Case Study 2: User-Centric Design in HealthFlow App',
              text: 'Building a system for patient data management, like the HealthFlow App, comes with significant ethical responsibilities. The trust of the user is the most valuable asset.',
              points: [
                  'Secure Architecture: Designing a database schema that prioritizes the security and confidentiality of sensitive patient information.',
                  'Accessibility: Creating wireframes and UI/UX flows that are intuitive and accessible to users with varying technical literacy.',
                  'Data Minimization: Adhering to the principle of collecting only the data that is absolutely necessary for the application to function.',
              ],
          },
      ],
      reflection: 'Working on these projects has profoundly shaped my thinking. It\'s not enough to build something that is technically functional; it must also be responsible, fair, and secure. Global issues like data privacy and algorithmic bias are no longer abstract concepts but direct considerations in my code and system design.',
  },
  futureAspirations: {
    title: 'Future Aspirations',
    shortTerm: {
      title: 'Short-Term Goals (1-2 Years)',
      points: [
        'Secure a role as a Data Analyst, building a strong foundation in statistical analysis, data visualization, and machine learning.',
        'Achieve a higher rating on Codeforces, sharpening my algorithmic problem-solving skills which are crucial for data science.',
        'Complete and deploy a comprehensive data science project, from data collection and cleaning to model building and interpretation.',
        'Deepen my expertise in key data science libraries such as Pandas, Scikit-learn, and TensorFlow/PyTorch.',
      ],
    },
    longTerm: {
      title: 'Long-Term Goals (3-5+ Years)',
      points: [
        'Transition into a Data Scientist role at a leading technology company, working on complex predictive models and data-driven products.',
        'Contribute meaningfully to popular open-source data science libraries and tools that I admire.',
        'Explore pursuing an MS in a specialized field like Machine Learning or Statistics to deepen my theoretical knowledge.',
        'Mentor aspiring data analysts and scientists, sharing knowledge and contributing to the tech community.',
      ],
    },
    learningStrategy: {
      title: 'Continuous Learning Strategy',
      points: [
        'Daily Practice: Dedicate regular time to solving challenging problems on competitive programming platforms.',
        'Project-Based Learning: The best way to learn a new technology is to build with it.',
        'Staying Current: Follow key research blogs, technical newsletters, and conference talks.',
        'Reading Code: Regularly read the source code of well-designed open-source projects to learn about best practices.',
      ],
    },
  },
  conclusion: {
    title: 'Conclusion & Self-Assessment',
    summary: 'My journey through computer and data science has been one of continuous exploration, driven by a deep-seated curiosity and a passion for finding patterns in complexity. From the logical rigors of competitive programming to the analytical challenges of data science, I have strived to build not just applications, but also a robust and versatile analytical skill set.',
    reflection: 'Through my projects and internship, I\'ve learned that the most valuable skill is the ability to ask the right questions and translate data into actionable insights. The Instagram analytics project sparked my interest in user behavior, while my internship honed my ability to build data-centric features in a professional team. Each experience has been a building block, shaping me into a more disciplined and data-driven problem solver.',
  },
  testimonials: [
    {
        quote: "Ishaan's curiosity is infectious. He consistently goes beyond the curriculum, asking insightful questions that challenge both himself and his peers. His ability to grasp complex theoretical concepts and immediately apply them to practical problems is exceptional.",
        author: 'Dr. Tanmay Bhowmik',
        role: 'Professor of Computer Science, PDEU',
    },
    {
        quote: "During his time with us, Ishaan demonstrated a level of ownership and technical maturity far beyond what is typical for an intern. He was reliable, proactive, and could be trusted with complex tasks. He quickly integrated into our workflow and made tangible contributions to our projects.",
        author: 'Vatsal Patel',
        role: 'Senior Developer & Mentor, Elixir Techne',
    },
  ],
};

export const sections: Section[] = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'resume', title: 'Resume / CV' },
    { id: 'leadership', title: 'Leadership' },
    { id: 'ethics', title: 'Ethics' },
    { id: 'future', title: 'Future Aspirations' },
    { id: 'conclusion', title: 'Conclusion' },
    { id: 'testimonials', title: 'Testimonials' },
    { id: 'contact', title: 'Contact' },
];
