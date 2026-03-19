export interface ExperienceRole {
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
  isPlaceholder?: boolean;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  logo?: string;
  roles: ExperienceRole[];
  note?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Cover + Associates",
    location: "Wilmington, DE",
    logo: "/logos/coverandassoc.webp",
    roles: [
      {
        title: "Executive Recruiter",
        dates: "Sep. 2024 – Present",
        bullets: [
          "Delivering over a million dollars in annual salary placements by managing full-cycle recruiting across multiple client accounts.",
          "Develop and maintain strong client relationships, securing new business through consultative partnership and talent delivery.",
          "Source and engage top talent using LinkedIn Recruiter, Crelate, and Apollo, building robust pipelines for hard-to-fill roles.",
          "Increase candidate engagement and response rates through targeted outreach and relationship building.",
        ],
      },
    ],
  },
  {
    company: "Network Partners Group",
    location: "Blue Bell, PA",
    logo: "/logos/networkpartners.png",
    roles: [
      {
        title: "Business Development — Client Account Manager",
        dates: "Nov. 2023 – Sep. 2024",
        bullets: [
          "Conducted cadence calls on a 30/60/90-day basis with prospective clients.",
          "Actively engaged with prominent life science organizations to foster valuable business relationships and expand professional networks.",
          "Worked closely with subject matter experts to develop value propositions and submissions to prospective clients.",
          "Successfully originated and closed six-figure sales deals and developed a running pipeline of prospective deals worth ~$2 million.",
        ],
      },
      {
        title: "Senior Talent Acquisition Partner",
        dates: "Apr. 2021 – Oct. 2023",
        bullets: [
          "Cultivated and sustained strong relationships with over twenty consultants through monthly check-ins, achieving the highest retention rate on the recruitment team.",
          "Evaluated resumes, interviewed, and presented qualified candidates to hiring managers; solicited feedback to continuously refine recruiting strategy.",
          "Leveraged LinkedIn Recruiter, job boards, professional networks, and industry events to proactively source and engage high-caliber talent.",
          "Hired over forty medical device and pharmaceutical consultants across regulatory, labeling, packaging, project management, and quality.",
          "Maintained accurate candidate data in Bullhorn ATS.",
        ],
      },
    ],
    note: "Acquired by Network Partners Group in April 2021",
  },
  {
    company: "The Flex Pro Group",
    location: "Blue Bell, PA",
    logo: "/logos/flexpro.png",
    roles: [
      {
        title: "Human Resources Partner & Sourcing Specialist",
        dates: "Nov. 2020 – Apr. 2021",
        bullets: [
          "Identified strong project managers in the pharmaceutical industry for various opportunities.",
          "Onboarded consultants and successfully guided them through tax documents and background checks.",
          "Quickly learned pharmaceutical terminology and effectively applied it to sourcing strategy.",
          "Sourced candidates using various job boards and LinkedIn Recruiter.",
        ],
      },
    ],
  },
  {
    company: "Gen 3 Marketing",
    location: "Blue Bell, PA",
    logo: "/logos/gen3.png",
    roles: [
      {
        title: "Affiliate Marketing Specialist",
        dates: "Dec. 2019 – Mar. 2020",
        bullets: [
          "Managed and optimized data using Google Sheets daily, streamlining processes and enabling increased focus on boosting affiliate revenue.",
          "Doubled the pool of options available to clients by executing weekly outreach to Instagram influencers and bloggers.",
        ],
      },
    ],
  },
  {
    company: "Open World Events",
    location: "Warminster, PA",
    logo: "/logos/openworld.png",
    roles: [
      {
        title: "Marketing & Online Advertising Specialist",
        dates: "Jan. 2018 – Dec. 2019",
        bullets: [
          "Utilized Adobe Premiere to edit videos for paid Facebook ads, contributing to the capture of thousands of leads and ticket sales.",
          "Adapted brand tone and style to craft weekly email copy, saving manager one hour per week while effectively targeting previous leads.",
        ],
      },
    ],
  },
];

export const accomplishments = [
  {
    type: "award",
    title: "Recruiter of the Year",
    subtitle: "Network Partners Group",
    detail: "Top earning recruiter on the team — Medical Device Packaging",
    year: "2022",
  },
  {
    type: "award",
    title: '"You Rock" Achievement Award',
    subtitle: "Network Partners Group",
    detail: "Recognized for having the highest number of client meetings",
    year: "2023",
  },
  {
    type: "volunteer",
    title: "Sponsorship Chair",
    subtitle: "Women in Bio",
    detail: "Led efforts to secure sponsorships and partnerships; cultivated relationships with sponsors and ensured alignment with organizational values.",
    year: "2024",
  },
  {
    type: "volunteer",
    title: "President",
    subtitle: "Main Line Toastmasters — Conshohocken, PA",
    detail: "Developed public speaking skills, facilitated Table Topics sessions, and served as an evaluator providing constructive feedback.",
    year: "2021–2024",
  },
];

export const education = [
  {
    institution: "Kutztown University of Pennsylvania",
    degree: "Bachelor of Science — Electronic Media",
    dates: "Aug. 2014 – Dec. 2017",
    logo: "/logos/kutztown.jpg",
  },
];

export const certifications = [
  {
    title: "Talent Sourcing Certificate",
    issuer: "LinkedIn Learning",
    year: "Nov. 2020",
    logo: "/logos/LinkedIn.png",
  },
  {
    title: "Digital Media & Marketing Certificate",
    issuer: "Duke University",
    year: "Jul. 2020",
    logo: "/logos/duke.png",
  },
];

export const specializationCategories = [
  {
    title: "Medical Device & Life Sciences",
    items: [
      "Medical Devices",
      "Pharmaceuticals",
      "Regulatory Affairs",
      "Labeling",
      "Quality & Compliance",
      "Pharmaceutical Packaging",
      "Biotechnology",
      "Clinical Operations",
    ],
  },
  {
    title: "Packaging & Manufacturing",
    items: [
      "Flexible Packaging",
      "Rigid Packaging",
      "Industrial Manufacturing",
      "Consumer Packaged Goods",
      "Logistics & Supply Chain",
      "OEM",
      "Sustainable Materials",
      "Operations Leadership",
    ],
  },
  {
    title: "Talent Acquisition",
    items: [
      "Executive Search",
      "Full-Cycle Recruiting",
      "Senior-Level Placement",
      "VP & Director Roles",
      "Candidate Sourcing",
      "Offer Negotiation",
      "Retained Search",
      "Succession Planning",
    ],
  },
];
