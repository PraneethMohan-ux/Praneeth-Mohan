export type Palette = { from: string; via: string; to: string; accent: string };

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

export const profile = {
  fullName: 'Amalapurapu Praneeth Mohan',
  displayName: 'Amalapurapu Praneeth Mohan',
  firstName: 'AMALAPURAPU PRANEETH MOHAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN AMALAPURAPU ORIGINAL',
  role: 'B. Pharm Student | Clinical Informatics & HealthTech Developer | Quality Assurance & Regulatory Specialist',
  tagline: ['Pharmaceutical Sciences', 'Clinical Informatics', 'HealthTech'],
  intro:
    'Pharmacy student at Avanthi Institute of Pharmaceutical Sciences bridging pharmaceutical sciences, clinical informatics, regulatory compliance, and cloud/AI software development.',
  location: 'Andhra Pradesh, India',
  email: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/praneeth-mohan',
    github: 'https://github.com/praneeth-mohan',
    website: 'https://mediguardai.dpdns.org',
    publishing: 'https://www.uptodown.com/',
  },
  resumePdf: asset('Amalapurapu_Praneeth_Mohan_Resume.pdf'),
  portrait: {
    src: asset('portrait-720.webp'),
    srcSet: `${asset('portrait-420.webp')} 420w, ${asset('portrait-720.webp')} 720w, ${asset('portrait-1100.webp')} 1100w`,
    alt: 'Portrait of Amalapurapu Praneeth Mohan',
  },
  interests: ['Clinical Informatics', 'Pharmacovigilance', 'Healthcare AI', 'Regulatory Affairs'],
};

const pharmacyCompleted = new Date() >= new Date(2027, 5, 1);

export const education = [
  {
    school: 'Avanthi Institute of Pharmaceutical Sciences',
    place: 'Cherukupally, Vizianagaram district',
    degree: 'Bachelor of Pharmacy (B. Pharm)',
    period: pharmacyCompleted ? '2023 – May 2027' : '2023 – Present',
    score: `Affiliated to JNTUGV · Status: ${pharmacyCompleted ? 'Completed' : '4th Year Candidate'}`,
  },
  {
    school: 'Sri Chaitanya Medical Academy',
    place: 'Dwaraka Nagar, Visakhapatnam',
    degree: 'Higher Secondary Education (Class XII)',
    period: '2021 – 2023',
    score: 'Stream: Biology, Physics, Chemistry (BiPC)',
  },
  {
    school: 'St. Francis School',
    place: 'Madhurawada, Visakhapatnam',
    degree: 'Secondary Education (Class VI to X - ICSE)',
    period: '2017 – 2021',
    score: '',
  },
];

export const experience = [
  {
    company: 'Apitoria Pharma Private Limited',
    role: 'Industrial Intern — Quality Control & Quality Assurance',
    place: 'Pharmaceutical manufacturing',
    period: 'May 05, 2026 – Jun 05, 2026',
    points: [
      'Hands-on exposure to Quality Control analytical methods and Quality Assurance protocols.',
      'Worked with batch documentation, cGMP compliance, and pharmaceutical manufacturing line operations.',
    ],
  },
  {
    company: 'SkillDzire',
    role: 'Virtual Intern, Pharmacovigilance',
    place: 'Remote',
    period: 'May 2026 – Jul 2026',
    points: [
      'Processed Individual Case Safety Reports (ICSRs), tracked adverse events, and evaluated post-marketing surveillance metrics.',
      'Studied ICH-GCP, signal detection, and risk management.',
    ],
  },
  {
    company: 'Henry Harvin Education (YuvaIntern)',
    role: 'Medical Writing Intern',
    place: 'Remote',
    period: 'Jul 2026 – Sep 2026',
    points: ['Completed professional medical writing internship training.'],
  },
  {
    company: 'Researium Labs',
    role: 'Advanced Research & Medical Writing Intern',
    place: '15-day intensive hands-on training',
    period: 'Jun 03, 2026 – Jun 17, 2026',
    points: [
      'Practiced scientific manuscript writing and systematic literature review techniques.',
      'Studied peer-review submission standards and biomedical journal publishing ethics.',
    ],
  },
  {
    company: 'Forage',
    role: 'Molecule to Market Job Simulation',
    place: 'Virtual job simulation',
    period: 'May 23, 2026',
    points: [
      'Explored Health Economics and Outcomes Research (HEOR), market access modeling, pharmaceutical marketing, and go-to-market strategies.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type TeamMember = { name: string; role: string; impact: string; linkedin?: string };

const bharatiyaAntarikshLogo = asset('BAH.jfif');

export const teamMembers: TeamMember[] = [
  { name: 'Amalapurapu Praneeth Mohan', role: 'Chief Systems Architect', impact: 'High-level technical strategy, core logic, and system integrity.', linkedin: 'https://www.linkedin.com/in/praneeth-mohan/' },
  { name: 'Karri Rohit', role: 'Quality & Integration Specialist', impact: 'Ensuring seamless deployment and rigorous system reliability.', linkedin: 'https://www.linkedin.com/in/karri-rohit/' },
  { name: 'Mandadi Sindhu', role: 'Principal Experience Architect', impact: 'Leading user-centric design systems and interface aesthetics.', linkedin: 'https://www.linkedin.com/in/mandadi-sindhu/' },
  { name: 'Kodi Nandini', role: 'Product Solutions Specialist', impact: 'Driving feature implementation and functional optimization.', linkedin: 'https://www.linkedin.com/in/nandini-cutie-02641a288/' },
  { name: 'Dundangi Noya Priskil', role: 'Strategic Operations Orchestrator', impact: 'Facilitating cross-functional workflows and delivery milestones.', linkedin: 'https://www.linkedin.com/in/dundangi-noya-priskil-647363355/' },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  logo?: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  team: TeamMember[];
  downloads?: { label: string; url: string }[];
  detailSections?: { title: string; items: string[] }[];
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'mediguard-ai',
    title: 'MediGuard AI',
    year: '2026',
    genre: 'HealthTech • Clinical Informatics • AI',
    logline: 'An AI-driven desktop and mobile clinical health application focused on medication safety and pharmacovigilance.',
   logo: asset('mediguard.png'),
    stack: ['Python', 'Electron', 'JavaScript', 'TypeScript', 'Cloudflare', 'Firebase', 'AI APIs', 'HTML', 'CSS'],
    build: [
      'Developed MediGuard AI to bring real-time patient health assistance and medication-safety workflows to desktop and mobile users.',
      'Integrated drug–drug interaction screening, side-effect monitoring, and automated dosage alerts to support medication safety and pharmacovigilance.',
      'Hosted the live application at mediguardai.dpdns.org with SSL and custom DNS integration through Cloudflare and Firebase.',
      'Published MediGuard AI on Uptodown.',
    ],
    features: [
      'Real-time patient health assistance',
      'Drug–drug interaction screening',
      'Side-effect monitoring',
      'Automated dosage alerts',
      'Desktop and mobile application experience',
      'Cloudflare DNS and SSL with Firebase hosting integration',
      'Published on Uptodown',
    ],
    detailSections: [
      {
        title: 'Core Technology & System Components',
        items: [
          'Frontend interface — Web and mobile UI using Python / Streamlit, React Native, and Electron.',
          'Backend and cloud — Firebase Firestore, Authentication, Cloud Functions, and Cloudflare DNS / SSL.',
          'AI engines — OCR, natural-language processing, a Random Forest classifier, and Google Gemini.',
          'Data security — AES-256-GCM encryption and consent-based token sharing, as specified in the project design.',
          'Hardware extension — MediGuard Clip concept with an OLED screen, smart bottle ring, and Bluetooth Low Energy.',
        ],
      },
      {
        title: 'Uses & Key Modules',
        items: [
          'Medi-Scanner — scans prescription labels and extracts medication details for review.',
          'Drug Interaction & Safety Engine — checks listed medicines for possible contraindications, duplicate therapies, and interactions.',
          'Lab Lens — extracts lab-report values and presents plain-language summaries.',
          'Health Risk Predictor — evaluates entered blood pressure, glucose, and heart-rate data to categorize risk for review.',
          'Guardian & Care Team — planned adherence updates and missed-dose notifications for selected contacts.',
        ],
      },
      {
        title: 'Advantages in the Project Design',
        items: [
          'Software with an optional hardware companion concept.',
          'Privacy-focused design with encryption and local-first processing; personal health data is not intended for monetization.',
          'Combines prescription scanning, interaction checks, and lab-report summaries in one workflow.',
          'Designed to send reminders to chosen care contacts when a dose is missed.',
        ],
      },
      {
        title: 'Expected Impact',
        items: [
          'Designed to support medication adherence with reminders and optional care-team notifications.',
          'Designed to help users review medication labels and identify potential interaction concerns.',
          'Lab Lens is intended to make selected lab-report values easier to understand.',
        ],
      },
    ],
    metrics: [],
    github: 'https://github.com/praneeth-mohan/MediGuard-AI',
    team: teamMembers,
    downloads: [
      { label: 'Android — GitHub Releases', url: 'https://github.com/praneeth-mohan/MediGuard-AI/releases' },
      { label: 'Android — Uptodown', url: 'https://mediguard-ai.en.uptodown.com/android' },
      { label: 'Windows — GitHub Releases', url: 'https://github.com/praneeth-mohan/MediGuard-AI/releases' },
      { label: 'Windows — Uptodown', url: 'https://mediguard-ai.en.uptodown.com/windows' },
      { label: 'Obtainium — GitHub Releases', url: 'https://github.com/praneeth-mohan/MediGuard-AI/releases' },
    ],
    palette: jade,
    motif: 'shield',
  },
  {
    id: 'driveshield',
    title: 'DriveShield',
    year: '2026',
    genre: 'Vehicular Safety • Edge AI • Mobile Safety Systems',
    logline: 'A driver-safety application concept combining phone sensors, camera-based fatigue checks, and context-aware alerts.',
    logo: asset('driveshield.png'),
    stack: ['Android Native (Java/Kotlin)', 'Accelerometer & Gyroscope', 'GPS Geofencing', 'Driver-Facing Camera', 'Real-Time Alerts'],
    build: [
      'Designed a mobile driver-safety concept using device sensors, location, and driver-facing camera signals.',
      'Planned context-aware call and notification handling with in-cabin alerts.',
    ],
    features: [
      'Driving mode with context-aware notification handling',
      'Fatigue and drowsiness checks using driver-facing camera signals',
      'Driver scorecards for braking, acceleration, and lane-change patterns',
      'GPS geofencing and speed-threshold alerts',
      'Incident logging with location and emergency-contact notifications',
    ],
    metrics: [],
    detailSections: [
      {
        title: 'Core Technology & System Components',
        items: [
          'Mobile architecture — Android-native application using Java / Kotlin.',
          'Sensor and telematics inputs — accelerometer, gyroscope, GPS geofencing, and vehicle profiles.',
          'Driver monitoring — camera-based fatigue and distraction checks processed on the device.',
          'Communication — real-time audio / visual alerts with planned call and message management.',
        ],
      },
      {
        title: 'Uses & Key Modules',
        items: [
          'Intelligent Driving Mode — manages calls, notifications, and audio alerts based on vehicle motion.',
          'Fatigue & Drowsiness Detection — checks driver-facing camera signals and blinking patterns to trigger audio prompts.',
          'Driver Self-Coaching & Analytics — summarizes hard braking, acceleration, and lane-change events in daily scorecards.',
          'Geofencing & Speed Compliance — compares vehicle location and speed with configured road thresholds.',
          'Emergency Incident Logger — records possible sudden deceleration or impact events and can notify selected contacts.',
        ],
      },
      {
        title: 'Advantages in the Project Design',
        items: [
          'Designed for common Android phones without requiring dedicated fleet telematics hardware.',
          'Processes camera and motion signals on-device to avoid continuous video uploads.',
          'Uses motion context to reduce nonessential notifications while the vehicle is moving.',
        ],
      },
      {
        title: 'Expected Impact',
        items: [
          'Designed to reduce mobile distractions through context-aware notification handling.',
          'Driver prompts and trip summaries are intended to encourage safer driving habits.',
          'Smoother driving is intended to support lower vehicle wear and fuel use.',
        ],
      },
    ],
    github: 'https://github.com/praneeth-mohan/DriveShield',
    team: teamMembers,
    downloads: [{ label: 'Android APK — GitHub Releases', url: 'https://github.com/praneeth-mohan/DriveShield/releases' }],
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'msme-healthtech',
    title: 'MSME Hackathon 6.0 HealthTech Prototype',
    year: '2026',
    genre: 'HealthTech • Innovation Challenge • Medical Workflows',
    logline: 'A functional healthtech software prototype submitted to the national-level MSME Innovation Challenge 6.0.',
    stack: ['HealthTech', 'Digital Health', 'Workflow Automation'],
    build: [
      'Engineered and submitted a functional software prototype for the national-level MSME Innovation Challenge 6.0.',
      'Focused the concept on scalable digital health solutions and automated medical workflows.',
    ],
    features: [
      'Functional HealthTech software prototype',
      'Scalable digital health solution focus',
      'Automated medical workflow focus',
      'Submitted to MSME Innovation Challenge 6.0',
    ],
    metrics: [],
    github: 'https://github.com/praneeth-mohan',
    team: teamMembers,
    palette: ocean,
    motif: 'tenants',
  },
  {
    id: 'bharatiya-antariksh-hackathon',
    title: 'Bharatiya Antariksh Hackathon 2026',
    year: '2026',
    genre: 'SpaceTech • Analytics • National Hackathon',
    logline: 'A space-tech and analytical software proposal submitted to the ISRO and Hack2skill national hackathon initiative.',
    logo: bharatiyaAntarikshLogo,
    stack: ['SpaceTech', 'Analytics', 'Software Proposal'],
    build: [
      'Created and submitted a space-tech and analytical software proposal for the Bharatiya Antariksh Hackathon 2026 by ISRO and Hack2skill.',
      'Received an official Certificate of Participation and Idea Submission acknowledgment.',
    ],
    features: [
      'Space-tech proposal',
      'Analytical software concept',
      'ISRO and Hack2skill hackathon initiative',
      'Certificate of Participation',
      'Idea Submission acknowledgment',
    ],
    metrics: [],
    team: teamMembers,
    palette: violet,
    motif: 'flow',
  },
  {
    id: 'raktavridhi-herbal-syrup',
    title: 'Raktavridhi Herbal Syrup',
    year: '2025',
    genre: 'Pharmacy • Herbal Product',
    logline: 'A first-prize-winning herbal syrup formulation project presented in February 2025.',
    logo: asset('raktavridhi.jpg'),
    stack: ['Pharmacy', 'Herbal Formulation', 'Herbal Syrup'],
    build: [
      'Product: Raktavridhi Herbal Syrup.',
      'Institution: Avanthi Institute of Pharmaceutical Sciences, Cherukupally, Vizianagaram — 531162.',
      'Awarded first prize in February 2025.',
    ],
    features: [
      'Nutrient-focused blend of beetroot, moringa, hibiscus, tulsi, and honey.',
      'Formulated without added preservatives, as described in the project presentation.',
      'Designed as a ready-to-use syrup or for mixing with warm water.',
      'The stated wellness rationale is not clinical evidence or medical advice.',
    ],
    metrics: [{ value: '1st', label: 'prize' }],
    team: teamMembers.filter((member) =>
      ['Mandadi Sindhu', 'Dundangi Noya Priskil', 'Amalapurapu Praneeth Mohan', 'Karri Rohit'].includes(member.name),
    ),
    detailSections: [
      {
        title: 'Composition',
        items: [
          'Beetroot Powder — 8 g',
          'Moringa Powder — 8 g',
          'Hibiscus Flowers — 12 g',
          'Tulsi Leaves — 12 g',
          'Citric Acid — 3 g',
          'Honey — 40 ml',
          'Distilled Water — 320 ml',
        ],
      },
      {
        title: 'Ingredient Rationale',
        items: [
          'Beetroot powder — included for its nutrient profile and as part of the formulation’s wellness rationale.',
          'Moringa powder — included as a plant ingredient with a range of nutrients.',
          'Hibiscus flowers — included as a botanical ingredient; this project does not establish a blood-pressure effect.',
          'Tulsi leaves — included as a traditional botanical ingredient; no infection-treatment claim is established.',
          'Citric acid — used as an acidity regulator in the formulation.',
          'Honey — used as a sweetener and syrup base.',
          'Distilled water — used as the liquid base for extraction and preparation.',
        ],
      },
      {
        title: 'Project Advantages',
        items: [
          'Combines beetroot, moringa, hibiscus, tulsi, and honey in one formulation.',
          'Presented as an all-natural formulation without listed additives or preservatives.',
          'Honey provides sweetness and supports the syrup format; enhanced nutrient absorption has not been established.',
          'Can be taken directly or mixed with warm water, according to the project presentation.',
        ],
      },
      {
        title: 'Results & Impact',
        items: [
          'Won first prize at the February 2025 presentation.',
          'Presented a herbal syrup formulation with a defined ingredient list and preparation quantities.',
        ],
      },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export const originals = projects;

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  date?: string;
  sortDate?: string;
};
export const achievements: Achievement[] = [
  {
    id: 'antibiotic-after-life-poster-presentation',
    title: 'Poster Presentation — “The Antibiotic After-Life”',
    org: 'Pharmacy Council of India • AP State Level WPD & NPW 2026',
    detail:
      'Presented a narrative review poster on the environmental journey of antibiotic residues, antimicrobial selection pressure and the One Health approach to combating AMR, highlighting the pharmacist’s role in rational drug use and safe medicine disposal.',
    laurel: 'Poster Presentation',
    date: 'Nov 6th 2026',
    sortDate: '2026-11-06',
  },
  {
    id: 'mediguard-msme-idea-hackathon-finalist',
    title: 'Selected for the MSME Idea Hackathon Final Round',
    org: 'IDEATHON • Incubation & Innovation Centre (IIC), Vijaya Institute of Pharmaceutical Sciences for Women (VIPW), Vijayawada',
    detail:
      'Presented MediGuard AI at IDEATHON, a screening platform for the MSME Idea Hackathon 4.0 focused on nurturing innovative healthcare solutions and fostering entrepreneurship. Following the screening, MediGuard AI was officially selected for the final round.',
    laurel: 'Final Round',
    date: 'Jul 20, 2026',
    sortDate: '2026-07-20',
  },
  {
    id: 'raktavridhi-herbal-syrup-first-prize',
    title: 'First Prize',
    org: 'Raktavridhi Herbal Syrup • Avanthi Institute of Pharmaceutical Sciences',
    detail: 'Awarded first prize for the Raktavridhi Herbal Syrup project in February 2025.',
    laurel: '1st Prize',
    date: 'February 2025',
    sortDate: '2025-02',
  },
  {
    id: 'apotheke-mediguard-first-prize',
    title: 'First Prize — MediGuard AI',
    org: 'APOTHEKE 2K26 Hackathon',
    detail: 'Won first prize at the hackathon with MediGuard AI.',
    laurel: '1st Prize',
    date: '2026',
    sortDate: '2026',
  },
  {
    id: 'apotheke-eposter-second-prize',
    title: 'Second Prize — E-Poster',
    org: 'APOTHEKE 2K26',
    detail: 'Won second prize for the e-poster “From Palm-Leaf Manuscripts to Digital Drug Databases”.',
    laurel: '2nd Prize',
    date: '2026',
    sortDate: '2026',
  },
  {
    id: 'world-pharmacists-day-poster-first-prize',
    title: 'First Prize — Poster Presentation',
    org: 'World Pharmacists Day 2026',
    detail: 'Won first prize for “THE ANTIBIOTIC AFTERLIFE: When the treatment ends, the journey continues.”',
    laurel: '1st Prize',
    date: '25 September 2026',
    sortDate: '2026-09-25',
  },
  {
    id: 'pharma-rx-prompt-looping-first-prize',
    title: 'First Prize — Pharma Rx 2K26',
    org: 'Vignan Institute of Pharmaceutical Technology, Duvvada',
    detail: 'Won first prize for “Prompt Looping in Pharmaceutical Research”.',
    laurel: '1st Prize',
    date: 'September 2026',
    sortDate: '2026-09',
  },
  {
    id: 'bts-global-pharma-flair-awards-2026',
    title: '15th Rank & Publication Selection',
    org: 'BTS Global Pharma Flair Awards 2026 • Review Articles',
    detail:
      'Ranked 15th out of 129 participants and selected for publication: “Transplacental Cancer Transmission: Mechanisms, Clinical Evidence, and Maternal-Fetal Outcomes — A Review of the Literature”. Co-authored with Karri Rohit.',
    laurel: 'Rank 15 / 129',
    date: 'October 2026',
    sortDate: '2026-10',
  },
  {
    id: 'bharatiya-antariksh',
    title: 'Certificate of Participation & Idea Submission',
    org: 'Bharatiya Antariksh Hackathon 2026 • ISRO & Hack2skill',
    detail: 'Official acknowledgment for participation and idea submission in the national space-tech hackathon.',
    laurel: 'SpaceTech',
    date: '15 August 2026',
    sortDate: '2026-08-15',
  },
  {
    id: 'niecer-103',
    title: 'Scientific Writing in Health Research',
    org: 'ICMR — National Institute of Epidemiology',
    detail: 'NIeCer 103 • Completed Jul 2026 • Score: 96%.',
    laurel: '96%',
    date: 'Jul 2026',
    sortDate: '2026-07',
  },
  {
    id: 'niecer-102',
    title: 'Ethics Review of Health Research',
    org: 'ICMR — National Institute of Epidemiology',
    detail: 'NIeCer 102 • Completed May 2026 • Score: 85%.',
    laurel: '85%',
    date: 'May 2026',
    sortDate: '2026-05',
  },
].sort((a, b) => (b.sortDate ?? '').localeCompare(a.sortDate ?? ''));

export type Certification = { issuer: string; name: string; link: string; completedAt?: string };
// Individual credential URLs were not supplied; links remain empty rather than fabricated.
const certificationEntries: Certification[] = [
  { issuer: 'NIDA Clinical Trials Network', name: 'Good Clinical Practice (Version 6)', link: '' },
  { issuer: 'Global Health Training Center / TCPDF', name: 'ICH-GCP: Good Clinical Practice (Abridged)', link: '' },
  { issuer: 'ICMR — National Institute of Epidemiology', name: 'NIeCer 103: Scientific Writing in Health Research', link: '' },
  { issuer: 'ICMR — National Institute of Epidemiology', name: 'NIeCer 102: Ethics Review of Health Research', link: '' },
  { issuer: 'University of Pennsylvania / Coursera', name: 'What is Compliance?', link: '' },
  { issuer: 'CDSCO / WHO / THSTI', name: 'Good Regulatory Practices in the Regulation of Medical Products', link: '' },
  { issuer: 'Good Manufacturing Practice Training', name: 'Introduction to Good Manufacturing Practice', link: '' },
  { issuer: 'Food Industry GMP Awareness', name: 'Food Industry GMP Awareness', link: '' },
  { issuer: 'Pharma Lesson Masterclasses', name: 'Quality Control', link: '' },
  { issuer: 'Pharma Lesson Masterclasses', name: 'Quality Assurance', link: '' },
  { issuer: 'Pharma Lesson Masterclasses', name: 'Pharmacogenomics', link: '' },
  { issuer: 'Pharmacovigilance & Drug Safety', name: 'Pharmacovigilance and Drug Safety Certification (Jul 07, 2026)', link: '' },
  { issuer: 'Pharmacovigilance & Drug Safety', name: 'Pharmacovigilance and Drug Safety Certification (May 16, 2026)', link: '' },
  { issuer: 'AI CERTs / Coursera', name: 'AI in Healthcare & Drug Discovery', link: '' },
  { issuer: 'LSSSDC', name: 'AI in Pharma: Transforming Life Sciences Through Technology', link: '' },
  { issuer: 'AI Regulatory Compliance Management', name: 'The Expert-in-the-Loop (EIL) Framework', link: '' },
  { issuer: 'AWS', name: 'AWS HealthOmics: Getting Started', link: '' },
  { issuer: 'AWS', name: 'Amazon HealthLake: Getting Started', link: '' },
  { issuer: 'AWS', name: 'Amazon Comprehend Medical & Amazon Comprehend: Getting Started', link: '' },
  { issuer: 'AWS', name: 'Cloud Essentials for Business Leaders: Healthcare and Life Sciences', link: '' },
  { issuer: 'AWS', name: 'AWS Health: Adoption and Maturity Acceleration', link: '' },
  { issuer: 'AWS', name: 'Introduction to Generative AI — Art of the Possible', link: '' },
  { issuer: 'AWS', name: 'Building a Generative AI-Ready Organization', link: '' },
  { issuer: 'AWS', name: 'Planning a Generative AI Project', link: '' },
  { issuer: 'Anthropic / Skilljar', name: 'Claude 101', link: '' },
  { issuer: 'Anthropic / Skilljar', name: 'Anthropic Claude Code in Action', link: '' },
  { issuer: 'IndiaAI / MeitY / Coursera', name: 'YUVA AI for ALL — Certificate ID: GDKDL39MDHK3', link: '' },
  { issuer: 'AI Fluency', name: 'Framework Foundations', link: '' },
  { issuer: 'AI Fluency', name: 'Capabilities and Limitations', link: '' },
  { issuer: 'Power BI', name: 'Power BI for Beginners', link: '' },
  { issuer: 'Data Analytics', name: 'Introduction to Data Analytics', link: '' },
  { issuer: 'Coursera', name: 'Build a Free Website with WordPress', link: '' },
];

const certificationDates: Record<string, string> = {
  'Good Clinical Practice (Version 6)': '2026-06-30',
  'ICH-GCP: Good Clinical Practice (Abridged)': '2026-05-15',
  'NIeCer 103: Scientific Writing in Health Research': '2026-07',
  'NIeCer 102: Ethics Review of Health Research': '2026-05',
  'What is Compliance?': '2026-07-29',
  'Good Regulatory Practices in the Regulation of Medical Products': '2026-05-24',
  'Introduction to Good Manufacturing Practice': '2026-05-12',
  'Food Industry GMP Awareness': '2026-05-13',
  'Quality Control': '2026-05-26',
  'Quality Assurance': '2026-05-25',
  Pharmacogenomics: '2026-05-24',
  'Pharmacovigilance and Drug Safety Certification (Jul 07, 2026)': '2026-07-07',
  'Pharmacovigilance and Drug Safety Certification (May 16, 2026)': '2026-05-16',
  'AI in Healthcare & Drug Discovery': '2026-10-04',
  'AI in Pharma: Transforming Life Sciences Through Technology': '2026-05-05',
  'The Expert-in-the-Loop (EIL) Framework': '2026-05-11',
  'AWS HealthOmics: Getting Started': '2026-05-16',
  'Amazon HealthLake: Getting Started': '2026-05-21',
  'Amazon Comprehend Medical & Amazon Comprehend: Getting Started': '2026-05-19',
  'Cloud Essentials for Business Leaders: Healthcare and Life Sciences': '2026-05-18',
  'AWS Health: Adoption and Maturity Acceleration': '2026-05-21',
  'Introduction to Generative AI — Art of the Possible': '2026-05-17',
  'Building a Generative AI-Ready Organization': '2026-05-17',
  'Planning a Generative AI Project': '2026-05-18',
  'Claude 101': '2026-05-05',
  'Anthropic Claude Code in Action': '2026-05-15',
  'YUVA AI for ALL — Certificate ID: GDKDL39MDHK3': '2026-06-30',
  'Power BI for Beginners': '2026-06-28',
  'Introduction to Data Analytics': '2026-06-03',
  'Build a Free Website with WordPress': '2026-06-20',
};

export const certifications: Certification[] = certificationEntries
  .map((certification) => ({
    ...certification,
    completedAt: certificationDates[certification.name],
  }))
  .sort((a, b) => (b.completedAt ?? '').localeCompare(a.completedAt ?? ''));

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  {
    id: 'pharmacy',
    title: 'Pharmaceutical Sciences',
    subtitle: 'Medication safety and life sciences',
    skills: [
      { name: 'Pharmacy', mono: 'Rx' },
      { name: 'Pharmacovigilance', mono: 'Pv' },
      { name: 'Drug Safety', mono: 'Ds' },
      { name: 'Pharmacogenomics', mono: 'Pg' },
    ],
  },
  {
    id: 'clinical',
    title: 'Clinical Research',
    subtitle: 'Research practice, ethics and communication',
    skills: [
      { name: 'Good Clinical Practice', mono: 'GCP' },
      { name: 'Clinical Research Ethics', mono: 'Et' },
      { name: 'Scientific Writing', mono: 'Sw' },
      { name: 'Medical Writing', mono: 'Mw' },
      { name: 'Systematic Literature Review', mono: 'LR' },
    ],
  },
  {
    id: 'quality',
    title: 'Quality & Regulatory',
    subtitle: 'Manufacturing quality and compliance',
    skills: [
      { name: 'Quality Control', mono: 'QC' },
      { name: 'Quality Assurance', mono: 'QA' },
      { name: 'cGMP / GMP', mono: 'GMP' },
      { name: 'Regulatory Practices', mono: 'Rg' },
      { name: 'Compliance', mono: 'Cp' },
    ],
  },
  {
    id: 'healthtech',
    title: 'HealthTech & AI',
    subtitle: 'Software for safer, smarter care',
    skills: [
      { name: 'Clinical Informatics', mono: 'CI' },
      { name: 'Healthcare AI', mono: 'AI' },
      { name: 'Computer Vision', mono: 'CV' },
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript / TypeScript', mono: 'TS' },
      { name: 'Electron', mono: 'El' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Data',
    subtitle: 'Emerging health cloud services and analytics',
    skills: [
      { name: 'AWS HealthOmics', mono: 'HO' },
      { name: 'Amazon HealthLake', mono: 'HL' },
      { name: 'Amazon Comprehend Medical', mono: 'CM' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Cloudflare', mono: 'Cf' },
      { name: 'Power BI', mono: 'BI' },
      { name: 'Data Analytics', mono: 'DA' },
    ],
  },
  {
    id: 'communication',
    title: 'Communication & Publishing',
    subtitle: 'Turning research into clear, responsible communication',
    skills: [
      { name: 'Biomedical Publishing Ethics', mono: 'PE' },
      { name: 'Peer-Review Standards', mono: 'PR' },
      { name: 'WordPress', mono: 'WP' },
      { name: 'Health Economics & Outcomes Research', mono: 'HE' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Pharmacy: ['B. Pharm — Avanthi Institute of Pharmaceutical Sciences'],
  Pharmacovigilance: ['MediGuard AI', 'Pharmacovigilance internships and certifications'],
  'Drug Safety': ['MediGuard AI', 'Pharmacovigilance and Drug Safety certifications'],
  Pharmacogenomics: ['Pharma Lesson Pharmacogenomics Masterclass'],
  'Good Clinical Practice': ['NIDA Clinical Trials Network GCP v6', 'ICH-GCP Abridged'],
  'Clinical Research Ethics': ['ICMR NIeCer 102: Ethics Review of Health Research'],
  'Scientific Writing': ['ICMR NIeCer 103: Scientific Writing in Health Research', 'Researium Labs'],
  'Medical Writing': ['Researium Labs', 'YuvaIntern (Henry Harvin)'],
  'Systematic Literature Review': ['Researium Labs'],
  'Quality Control': ['Apitoria Pharma', 'Pharma Lesson Quality Control Masterclass'],
  'Quality Assurance': ['Apitoria Pharma', 'Pharma Lesson Quality Assurance Masterclass'],
  'cGMP / GMP': ['Apitoria Pharma', 'Introduction to GMP', 'Food Industry GMP Awareness'],
  'Regulatory Practices': ['CDSCO / WHO / THSTI Good Regulatory Practices'],
  Compliance: ['University of Pennsylvania / Coursera: What is Compliance?'],
  'Clinical Informatics': ['MediGuard AI', 'Healthcare AI and AWS Health training'],
  'Healthcare AI': ['MediGuard AI', 'AI in Healthcare & Drug Discovery'],
  Python: ['MediGuard AI'],
  'JavaScript / TypeScript': ['MediGuard AI'],
  Electron: ['MediGuard AI'],
  'AWS HealthOmics': ['AWS HealthOmics: Getting Started'],
  'Amazon HealthLake': ['Amazon HealthLake: Getting Started'],
  'Amazon Comprehend Medical': ['Amazon Comprehend Medical & Amazon Comprehend: Getting Started'],
  Firebase: ['MediGuard AI'],
  Cloudflare: ['MediGuard AI custom DNS and SSL'],
  'Power BI': ['Power BI for Beginners'],
  'Data Analytics': ['Introduction to Data Analytics'],
  'Biomedical Publishing Ethics': ['Researium Labs'],
  'Peer-Review Standards': ['Researium Labs'],
  WordPress: ['Build a Free Website with WordPress'],
  'Health Economics & Outcomes Research': ['Forage Molecule to Market Job Simulation'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };

const episode = (
  code: string,
  title: string,
  description: string,
  tags: string[],
  runtime: string,
  palette: Palette,
): Episode => ({ code, title, description, tags, runtime, palette });

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Pharmacy Foundation',
    period: pharmacyCompleted ? `${education[0].period} · Completed` : education[0].period,
    synopsis: 'A pharmacy education journey connecting pharmaceutical sciences with clinical informatics, research, and patient safety.',
    episodes: [
      episode(
        'S01 E01',
        education[0].degree,
        `${education[0].school}, ${education[0].place}. ${education[0].score}.`,
        [education[0].school, education[0].period, pharmacyCompleted ? 'Completed' : '4th Year Candidate'],
        pharmacyCompleted ? `${education[0].period} · Completed` : education[0].period,
        violet,
      ),
      episode('S01 E02', education[1].degree, `${education[1].school}, ${education[1].place}. ${education[1].score}.`, [education[1].school, education[1].period, education[1].score], education[1].period, amber),
      episode('S01 E03', education[2].degree, `${education[2].school}, ${education[2].place}.`, [education[2].school, education[2].period], education[2].period, ocean),
    ],
  },
  {
    number: 2,
    title: 'Building HealthTech Originals',
    period: '2026',
    synopsis: 'Clinical software, patient safety, and national innovation challenges shape the product-building arc.',
    episodes: [
      episode('S02 E01', 'MediGuard AI: Medication Safety', 'Desktop and mobile health assistance with interaction screening, side-effect monitoring, and dosage alerts.', ['Python', 'Electron', 'AI APIs', 'Pharmacovigilance'], '2026', jade),
      episode('S02 E02', 'Cloud Deployment & Global Release', 'MediGuard AI live on mediguardai.dpdns.org with Cloudflare DNS/SSL and Firebase integration; published on Uptodown.', ['Cloudflare', 'Firebase', 'Uptodown', 'SSL'], '2026', ocean),
      episode('S02 E03', 'DriveShield: Eyes on the Road', 'A mobile driver-safety concept using phone sensors, location, camera-based fatigue checks, and context-aware alerts.', ['Android', 'GPS', 'Driver Safety', 'Mobile Alerts'], '2026', amber),
      episode('S02 E04', 'MSME HealthTech Prototype', 'Functional prototype submitted to MSME Innovation Challenge 6.0, focused on scalable digital health and automated medical workflows.', ['MSME', 'Innovation Challenge 6.0', 'Digital Health'], '2026', crimson),
      episode('S02 E05', 'Bharatiya Antariksh Hackathon', 'Space-tech and analytical software proposal for ISRO and Hack2skill; received participation and idea submission acknowledgment on August 15, 2026.', ['ISRO', 'Hack2skill', 'SpaceTech', 'Certificate of Participation'], 'Aug 15, 2026', violet),
      episode('S02 E06', 'VitaCode: PharmaTech Direction', 'Executive leadership for pharma-tech strategy and technical direction, leading a five-person team of developers and designers.', ['VitaCode', 'Executive Leadership', 'PharmaTech', 'Team of 5'], '2026', jade),
    ],
  },
  {
    number: 3,
    title: 'Industry & Research',
    period: 'May – June 2026',
    synopsis: 'Practical exposure to pharmaceutical quality systems, biomedical writing, and health-economics pathways.',
    episodes: [
      episode('S03 E01', 'Inside Pharmaceutical Manufacturing', 'Industrial internship at Apitoria Pharma Private Limited covering QC analytical methods, QA protocols, batch records, cGMP, and manufacturing operations.', ['Apitoria Pharma', 'QC', 'QA', 'cGMP', 'Batch Documentation'], 'May 05 – Jun 05, 2026', jade),
      episode('S03 E02', 'Research & Medical Writing Intensive', 'Researium Labs hands-on training in scientific manuscript writing, systematic reviews, peer-review submissions, and biomedical publishing ethics.', ['Researium Labs', 'Scientific Writing', 'Systematic Review', 'Publishing Ethics'], 'Jun 03 – Jun 17, 2026', ocean),
      episode('S03 E03', 'Molecule to Market', 'Forage simulation covering HEOR, market access modeling, pharmaceutical marketing, and go-to-market strategy.', ['Forage', 'HEOR', 'Market Access', 'Pharmaceutical Marketing'], 'May 23, 2026', amber),
      episode('S03 E04', 'Drug Safety Internship', 'Remote SkillDzire virtual internship processing Individual Case Safety Reports (ICSRs), tracking adverse events, evaluating post-marketing surveillance metrics, and studying ICH-GCP, signal detection, and risk management.', ['SkillDzire', 'Pharmacovigilance', 'ICSRs', 'ICH-GCP', 'Signal Detection'], 'May – Jul 2026', crimson),
      episode('S03 E05', 'Medical Writing Internship', 'Professional medical writing internship with YuvaIntern (Henry Harvin).', ['YuvaIntern', 'Henry Harvin', 'Medical Writing'], 'Dates not provided', violet),
    ],
  },
  {
    number: 4,
    title: 'Clinical Research & Quality',
    period: 'May – July 2026',
    synopsis: 'Good Clinical Practice, research ethics, compliance, regulatory practices, and manufacturing quality systems.',
    episodes: [
      episode('S04 E01', 'Good Clinical Practice — Version 6', 'NIDA Clinical Trials Network Good Clinical Practice (Version 6), completed Jun 30, 2026; valid through Jun 30, 2029.', ['NIDA Clinical Trials Network', 'GCP v6', 'Completed Jun 30, 2026', 'Valid through Jun 30, 2029'], 'Jun 30, 2026 – Jun 30, 2029', jade),
      episode('S04 E02', 'ICH-GCP Abridged', 'Good Clinical Practice (Abridged), Global Health Training Center / TCPDF, completed May 15, 2026.', ['Global Health Training Center', 'TCPDF', 'ICH-GCP', 'Completed May 15, 2026'], 'May 15, 2026', ocean),
      episode('S04 E03', 'Scientific Writing in Health Research', 'ICMR-NIE NIeCer 103, completed Jul 2026 with a score of 96%.', ['ICMR-NIE', 'NIeCer 103', 'Score: 96%', 'Completed Jul 2026'], 'Jul 2026', amber),
      episode('S04 E04', 'Ethics Review of Health Research', 'ICMR-NIE NIeCer 102, completed May 2026 with a score of 85%.', ['ICMR-NIE', 'NIeCer 102', 'Score: 85%', 'Completed May 2026'], 'May 2026', violet),
      episode('S04 E05', 'What is Compliance?', 'University of Pennsylvania course via Coursera, completed Jul 29, 2026.', ['University of Pennsylvania', 'Coursera', 'Completed Jul 29, 2026'], 'Jul 29, 2026', crimson),
      episode('S04 E06', 'Good Regulatory Practices', 'CDSCO / WHO / THSTI training in good regulatory practices for medical-product regulation, completed May 24, 2026.', ['CDSCO', 'WHO', 'THSTI', 'Completed May 24, 2026'], 'May 24, 2026', ocean),
      episode('S04 E07', 'GMP Foundations', 'Introduction to Good Manufacturing Practice, completed May 12, 2026.', ['GMP', 'Completed May 12, 2026'], 'May 12, 2026', jade),
      episode('S04 E08', 'Food Industry GMP Awareness', 'Food industry Good Manufacturing Practice awareness, completed May 13, 2026.', ['GMP Awareness', 'Food Industry', 'Completed May 13, 2026'], 'May 13, 2026', amber),
      episode('S04 E09', 'Quality Control Masterclass', 'Pharma Lesson Masterclass, completed May 26, 2026.', ['Pharma Lesson', 'Quality Control', 'Completed May 26, 2026'], 'May 26, 2026', crimson),
      episode('S04 E10', 'Quality Assurance Masterclass', 'Pharma Lesson Masterclass, completed May 25, 2026.', ['Pharma Lesson', 'Quality Assurance', 'Completed May 25, 2026'], 'May 25, 2026', violet),
      episode('S04 E11', 'Pharmacogenomics Masterclass', 'Pharma Lesson Masterclass, completed May 24, 2026.', ['Pharma Lesson', 'Pharmacogenomics', 'Completed May 24, 2026'], 'May 24, 2026', jade),
      episode('S04 E12', 'Pharmacovigilance & Drug Safety', 'Pharmacovigilance and Drug Safety certifications completed Jul 07, 2026 and May 16, 2026.', ['Pharmacovigilance', 'Drug Safety', 'Completed Jul 07, 2026', 'Completed May 16, 2026'], 'May – Jul 2026', ocean),
      episode('S04 E13', 'Prompt Looping in Pharmaceutical Research', 'Won first prize at the Pharma Rx 2K26 presentation in September 2026.', ['Pharma Rx 2K26', '1st Prize', 'Prompt Looping in Pharmaceutical Research'], 'Sep 2026', crimson),
      episode('S04 E14', 'World Pharmacists Day Poster Presentation', 'Won first prize for “THE ANTIBIOTIC AFTERLIFE: When the treatment ends, the journey continues.”', ['World Pharmacists Day', '1st Prize', 'Poster Presentation'], '25 Sep 2026', jade),
      episode('S04 E15', 'BTS Global Pharma Flair Awards', 'Ranked 15th out of 129 participants in the Review Articles category and selected for publication in October 2026.', ['BTS Global Pharma Flair Awards 2026', 'Rank 15 / 129', 'Selected for publication'], 'Oct 2026', violet),
      episode('S04 E16', 'Raktavridhi Herbal Syrup', 'After school, developed a first-prize-winning herbal syrup formulation presented in February 2025 at Avanthi Institute of Pharmaceutical Sciences.', ['Raktavridhi Herbal Syrup', '1st Prize', 'February 2025'], 'Feb 2025', jade),
    ],
  },
  {
    number: 5,
    title: 'Healthcare AI & Cloud',
    period: 'May – October 2026',
    synopsis: 'Applied healthcare AI, responsible regulatory AI, AWS health services, generative AI, and model fluency.',
    episodes: [
      episode('S05 E01', 'AI in Healthcare & Drug Discovery', 'AI CERTs course via Coursera, completed Oct 04, 2026.', ['AI CERTs', 'Coursera', 'Completed Oct 04, 2026'], 'Oct 04, 2026', crimson),
      episode('S05 E02', 'AI in Pharma', 'LSSSDC: AI in Pharma — Transforming Life Sciences Through Technology, completed May 05, 2026.', ['LSSSDC', 'Life Sciences', 'Completed May 05, 2026'], 'May 05, 2026', jade),
      episode('S05 E03', 'Regulatory AI: Expert-in-the-Loop', 'AI Regulatory Compliance Management and the Expert-in-the-Loop (EIL) Framework, completed May 11, 2026.', ['AI Regulatory Compliance', 'EIL Framework', 'Completed May 11, 2026'], 'May 11, 2026', violet),
      episode('S05 E04', 'AWS HealthOmics', 'Getting Started with AWS HealthOmics, completed May 16, 2026.', ['AWS', 'HealthOmics', 'Completed May 16, 2026'], 'May 16, 2026', ocean),
      episode('S05 E05', 'Amazon HealthLake', 'Getting Started with Amazon HealthLake, completed May 21, 2026.', ['AWS', 'Amazon HealthLake', 'Completed May 21, 2026'], 'May 21, 2026', jade),
      episode('S05 E06', 'Comprehend Medical & Comprehend', 'Getting Started with Amazon Comprehend Medical and Amazon Comprehend, completed May 19, 2026.', ['AWS', 'Amazon Comprehend Medical', 'Amazon Comprehend', 'Completed May 19, 2026'], 'May 19, 2026', amber),
      episode('S05 E07', 'Cloud for Healthcare & Life Sciences', 'Cloud Essentials for Business Leaders: Healthcare and Life Sciences, completed May 18, 2026.', ['AWS', 'Cloud Essentials', 'Completed May 18, 2026'], 'May 18, 2026', ocean),
      episode('S05 E08', 'AWS Health Adoption', 'AWS Health: Adoption and Maturity Acceleration, completed May 21, 2026.', ['AWS Health', 'Completed May 21, 2026'], 'May 21, 2026', violet),
      episode('S05 E09', 'Generative AI: The Art of the Possible', 'AWS Generative AI Series — Introduction to Generative AI: Art of the Possible, completed May 17, 2026.', ['AWS', 'Generative AI', 'Completed May 17, 2026'], 'May 17, 2026', crimson),
      episode('S05 E10', 'Building a Generative AI-Ready Organization', 'AWS Generative AI Series, completed May 17, 2026.', ['AWS', 'Generative AI', 'Completed May 17, 2026'], 'May 17, 2026', jade),
      episode('S05 E11', 'Planning a Generative AI Project', 'AWS Generative AI Series, completed May 18, 2026.', ['AWS', 'Generative AI', 'Completed May 18, 2026'], 'May 18, 2026', amber),
      episode('S05 E12', 'Claude 101', 'Anthropic / Skilljar Claude 101, completed May 05, 2026.', ['Anthropic', 'Skilljar', 'Completed May 05, 2026'], 'May 05, 2026', violet),
      episode('S05 E13', 'Claude Code in Action', 'Anthropic / Skilljar Claude Code in Action, completed May 15, 2026.', ['Anthropic', 'Skilljar', 'Claude Code', 'Completed May 15, 2026'], 'May 15, 2026', ocean),
      episode('S05 E14', 'YUVA AI for ALL', 'IndiaAI and MeitY course via Coursera, completed Jun 30, 2026. Certificate ID: GDKDL39MDHK3.', ['IndiaAI', 'MeitY', 'Coursera', 'Certificate ID: GDKDL39MDHK3', 'Completed Jun 30, 2026'], 'Jun 30, 2026', jade),
      episode('S05 E15', 'AI Fluency', 'Framework Foundations and understanding AI capabilities and limitations.', ['AI Fluency', 'Framework Foundations', 'Capabilities', 'Limitations'], 'Date not provided', crimson),
    ],
  },
  {
    number: 6,
    title: 'Analytics, Publishing & What’s Next',
    period: 'May – July 2026',
    synopsis: 'A final season of analytics, web publishing, and a book chapter proposal.',
    episodes: [
      episode('S06 E01', 'Power BI for Beginners', 'Completed Jun 28, 2026.', ['Power BI', 'Completed Jun 28, 2026'], 'Jun 28, 2026', amber),
      episode('S06 E02', 'Introduction to Data Analytics', 'Completed Jun 03, 2026.', ['Data Analytics', 'Completed Jun 03, 2026'], 'Jun 03, 2026', ocean),
      episode('S06 E03', 'Build a Free Website with WordPress', 'Coursera course completed Jun 20, 2026.', ['Coursera', 'WordPress', 'Completed Jun 20, 2026'], 'Jun 20, 2026', violet),
      episode('S06 E04', 'Taste Beyond Perception', 'Authored a book chapter proposal; submitted and currently under review.', ['Book Chapter Proposal', 'Author', 'Under Review'], 'Submitted', jade),
    ],
  },
];

function episodeDateValue(runtime: string): number {
  const months: Record<string, number> = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  };
  const yearMatch = runtime.match(/\b(20\d{2})\b/);
  if (!yearMatch) return 0;
  const year = Number(yearMatch[1]);
  const monthMatches = [...runtime.matchAll(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b(?:\s+(\d{1,2}))?/gi)];
  if (!monthMatches.length) return Date.UTC(year, 0, 1);
  const match = monthMatches[monthMatches.length - 1];
  return Date.UTC(year, months[match[1].toLowerCase()], Number(match[2] ?? 1));
}

for (const season of seasons) {
  season.episodes.sort((a, b) => episodeDateValue(b.runtime) - episodeDateValue(a.runtime));
}

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'The HealthTech Original', title: 'MediGuard AI', detail: 'Medication safety', palette: jade },
  { label: 'The Safety Original', title: 'DriveShield', detail: 'Mobile safety • Driver attentiveness', palette: amber },
  { label: 'The Pharmacy Original', title: 'Raktavridhi Herbal Syrup', detail: 'First prize • Avanthi Institute of Pharmaceutical Sciences • Feb 2025', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[]; image?: { src: string; alt: string } };
export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Pharmacy meets technology.',
    lines: ['Amalapurapu Praneeth Mohan', 'B. Pharm student at Avanthi Institute of Pharmaceutical Sciences'],
    chips: ['Pharmaceutical Sciences', 'Clinical Informatics', 'HealthTech'],
  },
  {
    kicker: 'Mission',
    title: 'Safer medication journeys.',
    lines: ['Clinical health assistance, drug-interaction screening, side-effect monitoring, and dosage alerts.', 'MediGuard AI'],
    chips: ['Pharmacovigilance', 'Medication Safety', 'AI'],
  },
  {
    kicker: 'Originals',
    title: 'Built for real-world problems.',
    lines: [
      'MediGuard AI — medication safety and patient assistance',
      'DriveShield — driver fatigue and attentiveness monitoring',
      'MSME HealthTech prototype and Bharatiya Antariksh hackathon proposal',
    ],
  },
  {
    kicker: 'VitaCode Organization',
    title: 'Where code meets cure.',
    lines: [
      'Executive leadership for pharma-tech strategy and technical direction.',
      'Leading a five-person team of developers and designers.',
      'Building pharma tech, breaking limits, saving lives.',
    ],
    chips: ['Executive Leadership', 'PharmaTech', 'Five-person Team'],
    image: { src: asset('vitacode.png'), alt: 'VitaCode logo — Innovating Life Through Code' },
  },
  {
    kicker: 'Industry',
    title: 'Quality, research, compliance.',
    lines: [
      'Apitoria Pharma — QC, QA, cGMP and manufacturing operations',
      'Researium Labs — scientific writing and systematic literature reviews',
      'Forage — HEOR and market access simulation',
    ],
  },
  {
    kicker: 'Clinical Research',
    title: 'Evidence with integrity.',
    lines: [
      'NIDA Clinical Trials Network Good Clinical Practice, Version 6',
      'ICMR-NIE Scientific Writing in Health Research — 96%',
      'ICMR-NIE Ethics Review of Health Research — 85%',
    ],
  },
  {
    kicker: 'Healthcare AI & Cloud',
    title: 'Learning the health data stack.',
    lines: [
      'AWS HealthOmics, Amazon HealthLake, and Amazon Comprehend Medical',
      'Healthcare AI, generative AI, and expert-in-the-loop regulatory AI',
    ],
    chips: ['AWS', 'Healthcare AI', 'Regulatory AI'],
  },
  {
    kicker: 'Beyond the screen',
    title: 'Research, publishing, and what’s next.',
    lines: [
      'Taste Beyond Perception — book chapter proposal under review',
      'Power BI, data analytics, and WordPress',
    ],
  },
];

export type ProfileId = 'praneeth' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'vitacode' | 'team' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  {
    id: 'praneeth',
    name: 'Amalapurapu Praneeth Mohan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'vitacode', 'team', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, research, quality & credentials first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'vitacode', 'team', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'HealthTech projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'vitacode', 'team', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The journey and cinematic highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'vitacode', 'team', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((count, season) => count + season.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • ${new Date().getFullYear()}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 3 Originals', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  vitacode: { nav: 'VitaCode', card: 'VitaCode Organization', meta: 'Executive Leadership • PharmaTech', palette: jade },
  team: { nav: 'Team', card: 'My Team Members', meta: `${teamMembers.length} Collaborators`, palette: jade },
  moments: {
    nav: 'Moments',
    card: 'Achievements & Credentials',
    meta: `${achievements.length} Moments • ${certifications.length} Credentials`,
    palette: crimson,
  },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Experience • Education • Training', palette: violet },
};