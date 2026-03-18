export interface ExperienceRole {
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Independent Executive Search",
    location: "Greater Philadelphia Area",
    roles: [
      {
        title: "Executive Recruiter — Life Sciences & Packaging",
        dates: "2018 – Present",
        bullets: [
          "Partner with C-suite and senior leadership teams to identify and recruit executive and director-level talent across life sciences and packaging sectors.",
          "Manage full-cycle executive search engagements from needs assessment through offer negotiation and onboarding.",
          "Build and maintain a deep network of passive candidates across R&D, regulatory, operations, and commercial functions.",
          "Advise clients on compensation benchmarking, market positioning, and talent acquisition strategy.",
        ],
      },
    ],
  },
  {
    company: "Life Sciences Search Partners",
    location: "Philadelphia, PA",
    roles: [
      {
        title: "Senior Recruiter",
        dates: "2014 – 2018",
        bullets: [
          "Specialized in placing senior-level professionals in pharmaceutical, biotech, and medical device organizations.",
          "Developed targeted candidate pipelines for niche technical and regulatory roles.",
          "Collaborated with hiring managers to define role requirements, competency profiles, and cultural fit criteria.",
          "Consistently exceeded placement targets and maintained 90%+ client retention rate.",
        ],
      },
    ],
  },
  {
    company: "PackagingTalent Group",
    location: "King of Prussia, PA",
    roles: [
      {
        title: "Recruiter — Packaging & Consumer Goods",
        dates: "2010 – 2014",
        bullets: [
          "Placed packaging engineers, R&D scientists, and supply chain leaders at Fortune 500 consumer goods and pharmaceutical companies.",
          "Managed relationships with key accounts in flexible packaging, rigid containers, and specialty materials.",
          "Built candidate networks within the Institute of Packaging Professionals (IoPP) community.",
        ],
      },
    ],
  },
];

export const specializationCategories = [
  {
    title: "Life Sciences",
    items: [
      "Pharmaceuticals",
      "Biotechnology",
      "Medical Devices",
      "Regulatory Affairs",
      "Clinical Operations",
      "Quality & Compliance",
      "R&D Leadership",
      "Drug Delivery",
    ],
  },
  {
    title: "Packaging",
    items: [
      "Flexible Packaging",
      "Rigid Containers",
      "Pharmaceutical Packaging",
      "Sustainable Materials",
      "Package Engineering",
      "Supply Chain",
      "Operations Leadership",
      "Materials Science",
    ],
  },
  {
    title: "Executive Functions",
    items: [
      "C-Suite Placement",
      "VP & Director Roles",
      "Board Advisory",
      "Succession Planning",
      "Compensation Analysis",
      "Talent Strategy",
      "Diversity Initiatives",
      "Retained Search",
    ],
  },
];
