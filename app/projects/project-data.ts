export interface Project {
  title: string;
  from: string;
  to: string;
  description: string;
  url?: string;
  tech: string[];
  responsible?: string;
}

export const projects: Project[] = [
  {
    title: "SDAX",
    from: "Dec 2023",
    to: "March 2025",
    description:
      "SDAX is a blockchain-powered investment platform that enables users to seamlessly interact with tokenized asset listings. Users can deposit and withdraw fiat funds securely. The platform allows users to view active listings, subscribe to investment opportunities, and receive tokens that represent their stake in the subscribed assets. Built on blockchain technology, SDAX ensures transparency, security, and real-time transaction tracking for all users.",
    tech: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "RabbitMQ",
      "Redis",
    ],
    responsible:
      "I was the Backend Lead for this project, working closely with the CTO and Project Manager to align on technical direction and project goals. I designed the database architecture following our company’s technology guidelines and led the REST API design. I’m responsible assigning Jira tickets to team members, explaining the requirements clearly, and reviewing their pull requests, offering guidance and technical advice when needed. I also conduct research on new technologies implemented in the project, such as microservices architecture, RabbitMQ, and other relevant tools to ensure we adopt the best solutions.",
    url: "https://www.sdax.co/insights/",
  },
  {
    title: "PruIdea",
    from: "Aug 2023",
    to: "Nov 2023",
    description: `Pruidea is a collaborative innovation and learning platform with three portals: Group, Organization (Org), and User. Groups can manage both organizations and users, while organizations manage their own users. The platform centers around Idea Projects created by Groups and Orgs, which users can view, like, comment on, share, and join to contribute toward completion. Upon successful participation, users earn points, which can be redeemed for rewards. 
    Pruidea also features courses that users can apply to attend, and upon completion, they receive certificates, similar to Udemy. A discussion board, inspired by Reddit, allows users to start discussions, comment, and vote up or down. A leaderboard showcases top-performing users and organizations based on level and score, encouraging healthy competition and engagement.`,
    tech: ["NextJS", "TypeScript", "NodeJS", "MySQL", "ExpressJS"],
    url: "https://www.prudential.com.sg/",
    responsible: `I was the Project Lead for this project, managing a team of four developers — two frontend and two backend engineers. I coordinate closely with the client, CTO, and UI/UX designer to gather and clarify project requirements. Based on these discussions, I assign tasks to my team members and ensure that development progress aligns with the expected outcomes.
    I actively review implementations to ensure they meet project standards and support the team in resolving technical challenges, suggesting better approaches where applicable. I also provide guidance during blockers, encourage collaboration, and help maintain efficient development workflows throughout the project lifecycle.`,
  },
  {
    title: "DeeMarket & BirdieBucks",
    from: "Jan 2023",
    to: "Jun 2023",
    description: `DeeMarket and BirdieBucks are decentralized marketplace platforms inspired by the Lazada shopping app, with enhanced features powered by blockchain technology. Both projects share the same core functionality but have different UI/UX designs.
    Users can log in and register using either a blockchain wallet or traditional methods. Users can view, create, update, and delete listings on their own. If interested in a listing, users can initiate chats to negotiate or finalize the buying/selling process.
    These platforms blend the familiar convenience of traditional e-commerce with the transparency and security of blockchain, creating a modern and trustworthy shopping experience.`,
    url: "https://start.dee.market/",
    tech: ["Next.js", "NodeJS", "ExpressJS", "MongoDB", "Socket.IO"],
    responsible: `I worked as a Backend Developer on the DeeMarket and BirdieBuck projects, responsible for building and maintaining RESTful APIs for both web and mobile platforms. The backend stack included Node.js, Express.js, MongoDB, and Socket.IO for real-time chat functionality. I also integrated OneSignal for push notifications and email services via AWS SES.
    For infrastructure, I used AWS Elastic Beanstalk (EBS) for server deployment, AWS S3 for file storage, and ensured secure and scalable performance across the platform. Additionally, I developed the Admin Portal using React.js, enabling management of users, listings, and system data.
    My role also involved close collaboration with frontend and mobile teams to ensure seamless feature delivery, along with ongoing maintenance, bug fixes, and the implementation of new features.`,
  },
  {
    title: "TallShip",
    from: "Jan 2023",
    to: "Jun 2023",
    description:
      "Tallship is an online auction system that allows users to bid on tickets in real time. Once the auction is won, users can add tickets to their cart and proceed with secure payment processing through the platform. The system ensures smooth bidding, transparent results, and a streamlined checkout experience.",
    url: "https://www.tallship.com.sg/",
    tech: ["VueJS"],
    responsible: `I am responsible for the frontend integration of the Tallship project using Vue.js. I took over the project from a previous developer, focusing on binding APIs, fixing bugs, maintaining existing features, and implementing new functionalities as required. My role involves ensuring smooth user interactions, resolving UI/API-related issues, and contributing to the overall stability and usability of the auction platform.`,
  },
  {
    title: "CPay",
    from: "Jan 2023",
    to: "Jun 2023",
    description: `ContainerPay is a secure and digitalized e-wallet payment system tailoured to suit the needs of the container shipping industry. It acts as a simple E-wallet system that depots can integrate into their container management systems (CMS) to send payment requests to the drivers on their mobile applications.`,
    url: "https://www.sp.edu.sg/soc/soc-projects-showcase/2021/dism-project-listing/containerpay",
    tech: ["NodeJS", "TypeScript", "Firebase"],
    responsible: `I took over the project from a previous developer, focusing on fixing bugs, maintaining existing features, and implementing new functionalities as required.`,
  },

  {
    title: "PruShoppe",
    from: "Oct 2022",
    to: "Dec 2022",
    description: `PruShoppe is a complex e-commerce platform designed specifically for selling life insurance packages. The system supports a full e-commerce workflow, including product browsing, detailed package information, user onboarding, and secure checkout. It combines the functionality of a traditional online store with the complexity of insurance policy customization, user eligibility checks, and compliance requirements.`,
    url: "https://www.prudential.la/prudential-la/en/",
    tech: ["Next.js", "Laravel", "MySQL"],
    responsible: `I worked as a Frontend Developer on the PruShoppe project, using NextJS to build and integrate frontend components for a complex e-commerce platform focused on selling life insurance packages. My responsibilities included developing user-facing features, integrating with backend APIs, and ensuring seamless user interactions across the platform. I collaborated with backend and UI/UX teams to implement responsive and dynamic insurance purchase flows, ensuring a smooth and secure customer experience.`,
  },
  {
    title: "PayBolt",
    from: "Jan 2022",
    to: "Sep 2022",
    description: `PayBolt Payment Gateway is a seamless integration that gives online or offline, eCommerce or brick & mortar merchants the power to accept digital currencies – and get all the benefits you can’t with just traditional payment methods.`,
    url: "https://www.linkedin.com/company/payboltofficial/",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MySQL", "Serverless"],
    responsible: `I worked as a Backend Developer on the Paybolt project, taking over the existing backend codebase from a previous developer. The backend was built using Node.js, Express.js, and deployed using the Serverless Framework, allowing efficient management of cloud functions and infrastructure.
    I was responsible for maintaining, enhancing, and expanding the backend features to support new business requirements. Additionally, I developed the Admin Portal using React.js, providing administrators with tools to manage and monitor platform operations. My role focused on ensuring backend reliability, scalability, and smooth integration with frontend systems.`,
  },
  {
    title: "The Myanmar Times News App",
    from: "Aug 2020",
    to: "Jan 2021",
    description: `The Myanmar Times News App is a bilingual news and article platform offering content in both Myanmar and English. It features a wide range of categories, allowing users to explore local and international news. Users can read articles for free or choose to subscribe for premium content. The app also provides access to a PDF version of the newspaper, which users can download and read offline, offering a traditional reading experience in a modern digital format.`,
    url: "https://www.facebook.com/themyanmartimesenglish/",
    tech: ["NodeJS", "ExpressJS", "MongoDB", "MySQL", "Flutter"],
    responsible: `I worked as a Backend Developer on the Myanmar Times News App project. I was responsible for implementing the RESTful APIs that power the mobile application, enabling access to bilingual news and articles across various categories. I also developed the Admin Dashboard, allowing content managers to upload, organize, and manage articles, subscriptions, and PDF versions of the newspaper.
    I collaborated closely with the CTO and UI/UX designer to ensure the backend aligned with both technical requirements and user experience goals. My role focused on building scalable, secure, and efficient backend services to support both free and subscription-based content delivery.`,
  },
  {
    title: "J-Mahar E-commerce App",
    from: "Mar 2020",
    to: "Jul 2020",
    description:
      "The J Mahar Application is an app where users can conveniently browse and purchase a wide range of Chinese dump truck parts and Chinese truck spare parts.",
    url: "https://play.google.com/store/apps/details?id=com.nwt.j_mahar",
    tech: ["NodeJS", "ExpressJS", "MySQL", "Flutter"],
    responsible: `I worked as a Backend Developer on the J Mahar project. I was responsible for implementing RESTful APIs to support the mobile application and developing the Admin Dashboard for managing product listings, categories, and user interactions. My role focused on building a robust and scalable backend to ensure smooth communication between the mobile app and the server.
`,
  },
];
