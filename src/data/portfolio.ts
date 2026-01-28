import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Nitin Kapoor",
    "title": "Sr. Business Analyst - Products",
    "email": "nitin.eih1@gmail.com",
    "phone": "9529576558",
    "linkedin": "https://www.linkedin.com/in/nitin-kapoor-90b69b16a",
    "github": "",
    "location": "House no 6/64 Mukta prasad colony, Gurgaon, 122008",
    "summary": "Certified Professional as an IT Business Analyst/Product Owner with extensive experience in the BFSI and Energy domains. Skilled in product backlog management, market analysis, and cross-functional collaboration with significant knowledge of SDLC, Agile, and Waterfall models."
  },
  "experience": [
    {
      "title": "Sr. Business Analyst - Products",
      "company": "EASYREWARDZ SOFTWARE SOLUTIONS PVT LTD",
      "dates": "Aug 2024 - Present",
      "description": "Product: Rewards and Loyalty Platform for Banks and NBFCs.",
      "highlights": [
        "Owned and prioritized the product backlog for loyalty and rewards modules, driving feature delivery.",
        "Defined user stories, conducted user research, and collaborated with design, engineering, and QA teams to launch scalable, intuitive features.",
        "Conducted market and competitor analysis to inform roadmap decisions.",
        "Led sprint ceremonies, UAT cycles, and release planning."
      ]
    },
    {
      "title": "Sr. Business Analyst",
      "company": "RANOSYS TECHNOLOGIES",
      "dates": "Jul 2022 - Jul 2024",
      "description": "Worked on ELISE and Metro Pinnacle Bank projects in the E-commerce, Energy, and BFSI domains.",
      "highlights": [
        "Facilitated client interactions to gather requirements and prepare clear Business Requirement Documents.",
        "Designed and constructed end-to-end workflow diagrams and wireframes.",
        "Translated client requirements into detailed user stories in Agile projects.",
        "Participated in functional testing and reviewed test cases prepared by QA teams."
      ]
    },
    {
      "title": "Manager - Govt Business",
      "company": "RELIANCE GENERAL INSURANCE CO LTD",
      "dates": "Jan 2022 - Jul 2022",
      "description": "Project - ESS - Agri Insurance: A web-based application with features to manage rural crop insurance policies.",
      "highlights": [
        "Managing vendor interactions for the elaboration of requirements.",
        "Prepared BRD, FRD, as per the organization's product requirements.",
        "Created wireframes and prototypes for the business requirements."
      ]
    },
    {
      "title": "Business Analyst",
      "company": "TATA AIG GENERAL INSURANCE CO LTD",
      "dates": "Aug 2018 - Jan 2022",
      "description": "Project : IPDS V1 and V2 (Integration with Bank LOS system)",
      "highlights": [
        "Worked with Bank of Baroda and Canara Bank stakeholders to integrate IPDS into bank’s LOS system.",
        "Document data flow, triggers points for IPDS with LOS system.",
        "Prepared the BRD according to the organization's product requirements on LOS use cases and insurance trigger points."
      ]
    }
  ],
  "education": [
    {
      "degree": "MBA",
      "institution": "Manipal University",
      "years": "2009",
      "gpa": ""
    },
    {
      "degree": "Bachelor of Science",
      "institution": "Poddar International College",
      "years": "",
      "gpa": ""
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Rewards and Loyalty Platform",
      "description": "Platform for Banks and NBFCs focusing on loyalty and rewards modules.",
      "technologies": [],
      "link": "",
      "github": ""
    },
    {
      "name": "ELISE (e-License Information on Services)",
      "description": "Centralized system for managing licensing for electrical, gas, and cable products and establishments.",
      "technologies": [],
      "link": "",
      "github": ""
    },
    {
      "name": "Metro Pinnacle Bank (Loan Origination System)",
      "description": "In-house application for managing the loan origination process.",
      "technologies": [],
      "link": "",
      "github": ""
    },
    {
      "name": "ESS - Agri Insurance",
      "description": "Web-based application to manage rural crop insurance policies.",
      "technologies": [],
      "link": "",
      "github": ""
    },
    {
      "name": "IPDS V1 and V2",
      "description": "Web-based application used to issue general insurance policies through integration with bank's LOS system.",
      "technologies": [],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "cards",
  "experience": "cards",
  "projects": "masonry",
  "skills": "circular",
  "skillsDisplay": "separate",
  "contact": "floating",
  "colorPalette": "blue"
};
