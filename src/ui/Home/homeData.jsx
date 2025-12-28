import { assetPath } from '../../utils/assetPath';

const img = (path) => assetPath(`assets/img/${path}`);

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me', isButton: true },
];

export const services = [
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile App',
    description:
      'I build fast, stable, and scalable mobile apps with clean architecture, smooth UX, and secure data flows—ready for offline use and long-term growth.',
  },
    {
    icon: 'ri-flow-chart',
    title: 'Systems Analysis',
    description:
      'I convert business needs into precise, testable system requirements—mapping data, processes, and interactions to ensure a reliable, scalable solution.',
  },
  {
    icon: 'ri-code-box-line',
    title: 'Web Development',
    description:
      'I develop modern, high-performance web apps with clean code, secure foundations, and APIs designed for easy integration and future expansion.',
  },
  {
    icon: 'ri-layout-4-line',
    title: 'UI / UX Design',
    description:
      'I design intuitive, accessible interfaces that simplify tasks, improve usability, and help users reach their goals with less friction.',
  },

  // New services

  {
    icon: 'ri-briefcase-4-line',
    title: 'Project Management',
    description:
      'I deliver projects with clear planning, predictable execution, and transparent communication—keeping scope, timelines, and risks under control.',
  },
  {
    icon: 'ri-palette-line',
    title: 'Brand Identity & Personal Branding',
    description:
      'I craft cohesive brand systems—visuals, tone, and guidelines—that strengthen recognition, consistency, and trust across all platforms.',
  },
];



export const skillRows = [
  [
    { name: 'React', img: img('skills/react.svg'), alt: 'React' },
    { name: 'Dart', img: img('skills/dart.png'), alt: 'Dart' },
    { name: 'Flutter', img: img('skills/flutter.png'), alt: 'Flutter' },
    { name: 'Firebase', img: img('skills/firebase.png'), alt: 'Firebase' },
    { name: 'java', img: img('skills/java.png'), alt: 'Java' },
    { name: 'JavaScript', img: img('skills/js.png'), alt: 'JavaScript' },
    { name: 'Python', img: img('skills/python.png'), alt: 'Python' },
    { name: '<HTML/>', img: img('skills/html.png'), alt: 'HTML' },
    { name: '.CSS{ }', img: img('skills/css.png'), alt: 'CSS' },
  ],
  [
    { name: 'Postman', img: img('skills/postman.svg'), alt: 'Postman' },
    { name: 'Linux', img: img('skills/linux.png'), alt: 'Linux' },
    { name: 'C#', img: img('skills/cc.png'), alt: 'C#' },
    { name: 'C', img: img('skills/c.png'), alt: 'C' },
    { name: 'C++', img: img('skills/c++.png'), alt: 'C++' },
    { name: 'GitHub', img: img('skills/github.png'), alt: 'GitHub' },
    { name: 'Git', img: img('skills/git.png'), alt: 'Git' },
    { name: 'Figma', img: img('skills/figma.png'), alt: 'Figma' },
    { name: 'Adobe XD', img: img('skills/xd.png'), alt: 'Adobe XD' },
    { name: 'Photoshop', img: img('skills/ps.png'), alt: 'Photoshop' },
  ],
];

export const otherSkills = [
  'Gather requirements',
  'MVC - MVVM - MVP',
  'UML',
  'Design patterns',
  'Architectural Patterns',
  'SOLID principles',
  'APIs handling',
  'Clean Code',
];

export const projects = [
  {
    image: img('kyc.png'),
    subtitle: 'National Islamic Bank',
    title: 'Online Account Opening Platform',
    description:
      'This platform allows customers to easily open traditional or digital accounts at the National Islamic Bank. The traditional account offers SMS notifications and QR functionality, while the digital account provides advanced online transaction features. Built using React and JavaScript, the platform ensures security, performance, and a seamless user experience.',
    gallery: [img('kyc.png'), img('platform.jpg'), img('weather.jpg'), img('awa.png')],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    links: [
      { href: 'https://account.nib.com.sy', label: 'Visit', icon: 'ri-globe-line' },
      { href: 'https://nib.com.sy', label: 'Bank Website', icon: 'ri-bank-line' },
    ],
    tags: ['#React', '#JavaScript', '#Banking'],
    note:
      'Key Libraries Used: React, useState, useEffect, useNavigate, useParams, Modal, js-file-download, lodash (debounce)',
  },
  {
    image: img('awa.png'),
    subtitle: 'AWA Real Estate',
    title: 'AWA',
    description:
      'Bringing convenience to the Damascus countryside, Wasena ensures swift and reliable delivery services. Seamlessly order, track, and receive your packages with ease, catering to both residents and businesses alike. Experience prompt delivery solutions tailored to your needs, all at your fingertips.',
    links: [
      { href: 'https://github.com/AbdullahAljojo/Wasena-App', label: 'View', icon: 'ri-github-line' },
      {
        href: 'https://www.instagram.com/wasena.hon?igsh=OXl3NXk1cmtrMHlu',
        label: 'Visit',
        icon: 'ri-instagram-line',
      },
      { href: 'https://play.google.com/store/apps/details?id=com.wasena.app', label: 'Google Play', icon: 'ri-google-play-line' },
      { href: 'https://apps.apple.com/us/app/wasena/id6504331081', label: 'App Store', icon: 'ri-apple-fill' },
    ],
    tags: ['#Flutter', '#Bloc', '#Cubit', '#Firebase'],
    secondaryTags: ['#PHP', '#curl', '#Mysql'],
    buttonOverlay: { href: 'https://play.google.com/store/apps/details?id=com.wasena.app', icon: 'ri-google-play-line' },
  },
  {
    image: img('quizon.jpg'),
    subtitle: 'project at (PionneNetwork Company)',
    title: 'QuizOn App',
    description:
      'Quizon is a high-quality quiz app template that allows users to test and improve their knowledge while earning coins for each correct answer. The app boasts a modern design with a clean and user-friendly interface.',
    links: [
      { href: 'https://drive.google.com/drive/u/0/folders/1oEOvF58MoWa7X1IeeC3kZUmNAYNX90O4', label: 'View', icon: 'ri-github-line' },
      { href: 'https://sa.pioneers.network', label: 'Visit', icon: 'ri-code-box-line' },
      { href: 'https://play.google.com/store/apps/details?id=com.flutter.quizon', label: 'Google Play', icon: 'ri-google-play-line' },
    ],
    tags: ['#Flutter', '#Firebase'],
    secondaryTags: ['#GetX', '#MVC'],
    buttonOverlay: { href: 'https://play.google.com/store/apps/details?id=com.flutter.quizon', icon: 'ri-google-play-line' },
  },
  {
    image: img('clinic.jpg'),
    subtitle: 'Pioneer clinic reservation',
    title: 'PioneerClinic App',
    description:
      'Revolutionizing healthcare in Damascus, our app facilitates seamless reservation and booking of appointments with doctors at Pioneer Clinic in Al3fef. Utilizing Firebase for real-time chat functionality and state management with Cubit in Flutter, users can easily schedule appointments, engage in consultations, and receive notifications powered by FCM Firebase.',
    links: [
      { href: 'https://github.com/AbdullahAljojo/PioneerClinic-App', label: 'View', icon: 'ri-github-line' },
      {
        href: 'https://m.facebook.com/people/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D9%8A%D8%A9/100057079344884/?locale=es_LA',
        label: 'Visit',
        icon: 'ri-facebook-line',
      },
    ],
    tags: ['#Flutter', '#Bloc', '#Cubit', '#Firebase'],
    secondaryTags: ['#Laravel', '#mongoDB'],
    buttonOverlay: { href: '#', icon: 'ri-google-play-line' },
  },
  {
    image: img('weather.jpg'),
    subtitle: 'Weather app task (Saudi Arabia)',
    title: 'Weather App',
    description:
      "Experience real-time weather updates with WeatherApp. This innovative online application provides comprehensive forecasts for five days, ensuring you're always prepared for any conditions. With two user-friendly interfaces, you can easily access detailed weather information and stay informed about upcoming forecasts.",
    links: [
      { href: 'https://github.com/AbdullahAljojo/Weather-App', label: 'View', icon: 'ri-github-line' },
      { href: 'https://sa.pioneers.network/', label: 'Visit', icon: 'ri-globe-line' },
    ],
    tags: ['#Flutter', '#bloc', '#cloudData'],
  },
  {
    image: img('platform.jpg'),
    subtitle: 'project at (Damascus University)',
    title: 'Colsuntaint Platform App',
    description:
      'Colsuntaint is an innovative consulting application that caters to both administrators and users. As a user, you have the flexibility to choose the expertise you require. Upon logging in, you can browse through a curated list of experts and engage with them for specific services. The administrator interface provides real-time message and notification management, ensuring seamless communication with users.',
    links: [
      { href: 'https://drive.google.com/drive/u/0/folders/1sG6KlC6tjhSCkjqaJjql2zhs-XKUYLb8', label: 'View', icon: 'ri-github-line' },
      { href: 'https://damascusuniversity.edu.sy/ite/', label: 'Visit', icon: 'ri-globe-line' },
    ],
    tags: ['#Flutter', '#GetX', '#cloudMessaging'],
    secondaryTags: ['#Laravel', '#Mysql'],
  },
  {
    image: img('devo.jpg'),
    subtitle: 'Workshop UI app',
    title: 'FlutterDevo',
    description: 'Converse effortlessly with FlutterDevo, enjoying natural interactions, smart responses, and instant engagement.',
    links: [{ href: 'https://github.com/mdshwin555/ChatGPT', label: 'View', icon: 'ri-github-line' }],
    tags: ['#Flutter', '#GetX'],
    secondaryTags: ['#Json', '#fetchdata'],
  },
  // {
  //   image: '/assets/img/langpro.png',
  //   subtitle: 'Intelligent Language Assistant (Python)',
  //   title: 'Language Assistant',
  //   description: (
  //     <>
  //       <p>
  //         Our project is a Desktop Application that helps children learn the English language through several methods:
  //       </p>
  //       <p>
  //         1. <strong>Generation Question</strong>: The application generates questions based on stories designed for children to
  //         read, after which the child can answer the questions they choose.
  //       </p>
  //       <ul>
  //         <li>
  //           <strong>Wh Question:</strong> Generates questions based on answers extracted after processing a PDF file. The
  //           child&apos;s answer is compared to the correct answer using a similarity algorithm that transforms both answers into
  //           vectors using Beart Vector and embedding Vector, calculating the cosine angle to determine similarity.
  //         </li>
  //         <li>
  //           <strong>Multiple Choice:</strong> Processes text and selects key words for the question&apos;s subject. Generates
  //           synonymous answers using the nltk library and the WordNet database, along with a transformer T5 model trained on the
  //           Stanford Question Answer Dataset (SQAD).
  //         </li>
  //         <li>
  //           <strong>Yes/No Question:</strong> Selects sentences from the text and modifies certain elements by providing synonyms
  //           or antonyms for words using WordNet and TextBlob.
  //         </li>
  //       </ul>
  //       <p>
  //         2. <strong>Pronunciation Test</strong>: A system that allows children to test their pronunciation by either selecting a
  //         sentence from a story or adding a custom sentence. The user records a voice clip, and the system converts it to text
  //         using Google API, then compares the phonemes with the original sentence&apos;s phonemes to evaluate pronunciation
  //         accuracy.
  //       </p>
  //       <p>
  //         The application supports adding stories in PDF format and processing them in various ways. Future developments will
  //         include grammar tests and conversation features, as well as a mobile application version.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       href: 'https://github.com/AbdullahAljojo/Python--Language-Assistant.git',
  //       label: 'View Source',
  //       icon: 'ri-github-line',
  //     },
  //     {
  //       href: 'https://www.facebook.com/share/v/k1QKu5XHtE4EySdP/?mibextid=oFDknk',
  //       label: 'Demo',
  //       icon: 'ri-facebook-line',
  //     },
  //   ],
  //   tags: ['#Python', '#NLP', '#scikit-learn', '#nltk', '#spacy', '#transformers'],
  //   buttonOverlay: {
  //     href: 'https://www.facebook.com/share/v/k1QKu5XHtE4EySdP/?mibextid=oFDknk',
  //     icon: 'ri-facebook-line',
  //   },
  // },
  {
    image: img('start.png'),
    subtitle: 'Parachute simulation (JavaScript)',
    title: 'Parachute-Adventure-simulation',
    description:
      'Experience immersive adventures in the world of parachuting with Parachut in Three.js. Dive into thrilling simulations, explore breathtaking landscapes, and feel the rush of adrenaline as you soar through the skies.',
    links: [{ href: 'https://github.com/AbdullahAljojo/Parachute-Adventure-simulation', label: 'View', icon: 'ri-github-line' }],
    tags: ['#JavaScript', '#THREE.Js', '#WebGL', '#GSAP', '#OrbitControls'],
  },
];

export const experiences = [
  {
    company: 'Lumi.AI · FreeZoon',
    role: 'Flutter Developer',
    period: '03/2025 - Present',
    location: 'Damascus',
    href: 'https://lumiai-agency.com/',
    logo: img('lumi.png'),
    summary:
      'Building production Flutter apps with Clean Architecture (MVVM), native-feel motion, Cashing and local data sourcing ,Map APIs integration and notifications',
    highlights: [
      '•	SAVI MALL App: applied Clean Architecture (MVC), created advanced filtering with custom widgets and a seamless search flow, added FCM push alerts, a wishlist feature, and real-time order tracking.',
      '•	PatternStock App: architected the app with Clean Architecture (MVVM), built dynamic custom UIs, integrated Stripe for payments, enabled Firebase Cloud Messaging push notifications, and implemented offline caching for peak performance.',

    ],
    stack: ['Flutter', 'Dart', 'MVVM', 'Bloc', 'Firebase', 'Stripe','E-pay','Local data Source','UML','SRS','Requirements gathering'],
    impact: 'Market-ready offline-first builds',
    accent: 'linear-gradient(135deg, hsla(212, 98%, 50%, 0.95), hsla(171, 69%, 53%, 0.85))',
  },
  {
    company: 'AWA Real Estate',
    role: 'Flutter Developer & System Analyst',
    period: '12/2024 - 07/2025',
    location: 'Remote',
    href: 'https://awa-aqar.com/',
    logo: img('awa.jpg'),
    summary:
      'Delivered AWA real-estate app end-to-end with payments, notifications, and rigorous requirements modeling.',
    highlights: [
      'Shipped offline caching/local data sourcing, OTP authentication, and push notifications for buyer/seller flows.',
      'Integrated multiple e-payment rails (Fatora, Syriatel Cash, MTN Cash) with protected checkout UX.',
      'Authored SRS and UML (activity, sequence, class, entity) to align delivery with business goals.',
    ],
    stack: ['Flutter', 'MVC','Clean Architecture','GetX', 'Firebase', 'Payments', 'UML', 'SRS','E-pay','Local data Source',],
    accent: 'linear-gradient(135deg, hsla(27, 95%, 61%, 0.95), hsla(12, 78%, 55%, 0.9))',
  },
  {
    company: 'K&K Group',
    role: 'Flutter Developer',
    period: '07/2023 - 03/2025',
    location: 'Damascus',
    href: 'https://kk-group.example.com',
    logo: img('kk.jpg'),
    summary:
      'Built internal and customer-facing apps and dashboards to digitize fabric orders, warehouse ops, and sales.',
    highlights: [
      'KK Orders: solo-built order management app on Flutter + Firebase for fabric processing.',
      'KK Group Warehouse: delivered responsive Flutter web dashboard linking warehouses, HQ, and outlets.',
      'ZIKZAK: shipped clothing order app in 6 weeks; kicked off K&K e-commerce app for product catalog and sales.',
    ],
    stack: ['Flutter', 'Firebase', 'Responsive Web', 'Offline Caching', 'Real-time Data'],
    accent: 'linear-gradient(135deg, hsla(249, 78%, 68%, 0.95), hsla(204, 77%, 61%, 0.9))',
  },
  {
    company: 'K&K Group',
    role: 'Systems Analyst',
    period: '12/2023 - 03/2025',
    location: 'Damascus',
    href: 'https://kk-group.example.com',
    logo: img('kk.jpg'),
    summary:
      'Translated stakeholder needs into executable blueprints with SRS deliverables and UML-driven designs.',
    highlights: [
      'Captured and modeled requirements with activity, sequence, class, and entity diagrams for multi-module systems.',
      'Designed system architectures and data flows to keep integrations clean across warehouse, sales, and ops.',
      'Guided dev teams from requirements to implementation with clear design artifacts and reviews.',
    ],
    stack: ['SRS', 'UML', 'Architecture', 'Process Modeling','Requirements gathering'],
    accent: 'linear-gradient(135deg, hsla(140, 68%, 50%, 0.95), hsla(173, 80%, 58%, 0.9))',
  },
];

export const typingTexts = [
  "I'm Mobile apps developer",
  "I'm Software engineer",
  "I'm System analyst",
  "I'm Project manager",
];
