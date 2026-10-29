//Content-> company names and links the info to where they would be placed in the other div files
export type Social = { label: string; href: string };
export type tools = { name: string; logo: string; };
export type Stat = { value: number; prefix?: string; suffix?: string; label: string };
export type WorkItem = {
  title: string;
  blurb: string;
  categories: string[];
  date: string;
  result?: string;
  image?: string;
  href: string;
};
export type Role = { company: string; role: string; logo: string; period: string; start: number; end?: number; industry: string; note?: string; points: string[]; url?: string };
export type Service = { title: string; blurb: string; points: string[]; card: string; img?: string; };

export const site = {
  name: " JEFFREY EJEZIE",
  logo:"/Bro Jeff/Jeff.jpeg",
  title: "",
  company: "",
  email: "jeffrey.ejezie1994@gmail.com",
  cv: "/CV/502016196_E_cnt_1.pdf",
};

export const navLinks = [
  { to: "#top", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#career", label:"Career" },
  { to: "#work", label: "Work" },
  { to: "#company", label: "Company" },
];

export const socials: Social[] = [
  { label: "LinkedIn", href: "www.linkedin.com/in/jeffrey-ejezie/" },
  { label: "Whatsapp", href: "" },
  { label: "Instagram", href: "https://instagram.com/your-handle" },
  { label: "Email", href: "jeffrey.ejezie1994@gmail.com" },
];

export const tools = [
 { name: "HubSpot", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqNekr86twPI0iqhNy7_yCnBuO_or8bVvRwtSy24suA&s" },
  { name: "Salesforce", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVeT95ioBPQeSMPgA88Xv-71C8oeLciSzgcBNrYZW2w&s" },
  { name: "Saleshandy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToopiwpiX3Arc6qJ4UxNdBCeP6AdpY23iXLS0_1kh2Tw&s=10" },
  { name: "Zoho", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmZuyF0D2u2frQa7AOEmqUNPyY2H-E1lw2rTce3iESw&s=10" },
  { name: "Zoho Analytics", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzN1ZHWDa5DNrBSc4tY00S9YnQLfbPIeGHTiUaCGT3Q&s=10" },
  { name: "Microsoft Office", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCMjasvux56eiMD8s_tZPfCk6DnhR2SdQOHKwL-phFw&s=10" },
  { name: "Microsoft Dynamics", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQU0hzm_qcacRlTp8KfJWN51w6vKRY1uEdhbQ6cdAR8A&s=10" },
  { name: "Zendesk", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWHLglSz_l_zwdiMDdfHnBY7KJ0MoAd9ZQeS9CIEu9Q&s=10" },
  { name: "LinkedIn Sales Navigator", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr68WbKnhSD2SUPLnpsx9I8TYV99GHb3603g_5-QZXXQ&s=10" },
  { name: "Google Maps", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOnXMuL29nmGt4VEJPamL34tembs-d2e1GnaZRaR8Sw&s=10" },
  { name: "Google", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA6lBMVEVHcEzhzAgwhv/9vQr3ywYZvFcRumAvhv3+TEf+Sk6wwRkSvFn+ygUIpqr/gh9uxAwPm8oli/D/SkX/RkMxhf/9SkniwAcMu2EhvFD+zgT/RUH/RUAOvF8th/z/YTIUmND/bijmzAamxwb9TFVEwCkJrZb/oBL9S1L/VTdyxBM9f+ALsIr/zl4whv//RkT/zgkPvF79S1Uuhvz/Sj0LuG2OxQQNncRkwxIYlN7/dSYmi/L/UzcrvzkJs38bvUzZygH/YDEJpqsIrJZCwSTAyAH/sAztzAP4zQX/vAr/ihz/lxX/xQmtxwD/pg9UfIxDAAAALHRSTlMAYjdXlVydT1qcB8LelKmfsum1ORwILjkQxsjf3rnSiJ/e4N/SI+ARErQBvvytO1gAAAErSURBVCiRjdFpU4MwEAZgKjf0rrW1rVe9cZSj9OIoLUVQq///77iBRIIwo+8nNk+yyQ4M879I8mg8HslSWfry7AXHlPsF0iTXnWE1IYXTl9stQfO3NtdrSiFybuzHO6jrdqVeT+oWTXn9Qnr+kJX315Qx3BvSZvV8hwPoXbWxug58Uo2cDlrH84pUNFg4BdQ5vPOZyjHUdYS1Cjz6C1HbJG9rQXLk9CSJrzDit/zcySZxHAR4FC17c3o4XQCKoik9XcdxLOss3ccF0ed8/pjbxWrlOI6YfivIlsubIbbGYgHawVUN2d7zVH4w4AU/3CEVSZ8W2N7bbAzDsH1A0HZ+S4uYYWdKGcPwnpcaoO2HYSObiYynCBmio0+35X/HC+pkogr8sEykh0Y1/AaHgkJ9/L5JEQAAAABJRU5ErkJggg==" },
  { name: "Apollo", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZrmitdyqQlNNZDSvIsMCZpD13EAtMwgqDQ-QzdDexw&s=10" },
];

export const stats: Stat[] = [
  { value: 120, prefix: "+", suffix: "%", label: "Revenue growth" },
  { value: 25, suffix: "K+", label: "Leads generated" },
  { value: 38, suffix: "%", label: "Conversion rate" },
  { value: 6, suffix: "+", label: "Years in the field" },
];

export const leadsByMonth = [
  { month: "Jan", value: 40 }, { month: "Feb", value: 55 }, { month: "Mar", value: 48 },
  { month: "Apr", value: 70 }, { month: "May", value: 82 }, { month: "Jun", value: 76 },
  { month: "Jul", value: 95 }, { month: "Aug", value: 110 }, { month: "Sep", value: 104 },
  { month: "Oct", value: 128 }, { month: "Nov", value: 140 }, { month: "Dec", value: 165 },
];

export const works: WorkItem[] = [
  { title: "Rebuilding the sales pipeline for [Client]", blurb: "Mapped the funnel, fixed the hand-offs between marketing and sales, and set a clear follow-up routine for every lead.", categories: ["Sales", "Leadership"], date: "[Month Year]", result: "+[XX]% closed deals", href: "#" },
  { title: "Launching [Campaign name]", blurb: "Planned and ran a multi-channel campaign built around one offer and one clear call to action.", categories: ["Marketing"], date: "[Month Year]", result: "[XX]K reach", href: "#" },
  { title: "Outbound lead generation for [Client]", blurb: "Built a targeted prospect list, wrote the outreach sequences and tracked replies through to booked calls.", categories: ["Lead Gen", "Sales"], date: "[Month Year]", result: "[XX] qualified leads a month", href: "#" },
  { title: "Growing [Company] from the top", blurb: "Set the strategy, hired the team and put reporting in place so decisions came from numbers.", categories: ["Leadership"], date: "[Month Year]", result: "[XX]x revenue", href: "#" },
  { title: "Email and retention programme for [Client]", blurb: "Segmented the customer list and automated the messages that bring buyers back.", categories: ["Marketing", "Lead Gen"], date: "[Month Year]", result: "+[XX]% repeat purchases", href: "#" },
  { title: "Training the sales team at [Client]", blurb: "Wrote the playbook, ran the workshops and coached reps on discovery calls and objections.", categories: ["Sales", "Leadership"], date: "[Month Year]", result: "[XX]% quota attainment", href: "#" },
];

export const roles: Role[] = [
  {
    company: "Globe Broadcasting and Communication",
    role: "Executive Sales Representative",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlDcQihLhc2rAQ4GeWseg6uf7MfasT6tWFjWYoR1I0Q&s=10",
    period: "Aug 2018 to Dec 2023",
    start: 2018.58,
    end: 2023.92,
    industry: "Media and advertising",
    points: [
      "Found and approached advertisers to sell radio advertising slots and win long-term contracts.",
      "Built customised advertising packages around each client's goals and budget.",
      "Hit sales targets through strategic revenue generation and upselling.",
      "Managed contracts, invoicing follow-up and payment coordination.",
      "Researched the market and competitors to find new sales opportunities.",
    ],
  },
  {
    company: "Lexar Business Support",
    role: "Customer Success Manager",
    logo: "/Experience logo/Lexar logo – 28 Oct 2026, 3.37 pm.png",
    period: "Dec 2023 to May 2025",
    start: 2023.92,
    end: 2025.33,
    industry: "Customer success",
    points: [
      "Acted as the main point of contact and trusted advisor for long-term clients.",
      "Oversaw client onboarding and supported service adoption.",
      "Built retention strategies and spotted upsell opportunities.",
      "Tracked client engagement in Salesforce and HubSpot, working with sales, marketing and product teams.",
    ],
  },
  {
    company: "Digital Bananas",
    role: "Technical Sales Specialist",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUR-K7JAZC1rACJoUhfHNfVTMXydbgrFHor7jGI5cvw&s=10",
    period: "Oct 2024 to Feb 2025",
    start: 2024.75,
    end: 2025.17,
    industry: "Technical sales",
    note: "Remote",
    points: [
      "Generated leads and won new business through digital tools and targeted sales strategies.",
      "Gave product presentations and demos, explaining technical solutions in terms of client needs.",
      "Managed sales pipelines in CRM tools and tracked performance.",
      "Researched markets and competitors to sharpen the sales approach.",
    ],
  },
  {
    company: "Nigeria Capital Development Fund (NCDF)",
    role: "Executive Sales Representative",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPJ-ZNZBGqgX1P23RmD006CmeTB-14V9bay10jn0oyw&s=10",
    period: "May 2025 to Aug 2025",
    start: 2025.33,
    end: 2025.58,
    industry: "Development finance",
    note: "Contract",
    points: [
      "Ran lead generation campaigns across digital platforms, outbound calling, social media and referrals.",
      "Managed the full sales cycle in Salesforce, HubSpot and Zoho.",
      "Presented customised funding solutions matched to client needs and social impact goals.",
      "Built relationships with SMEs, NGOs, government agencies and development partners.",
    ],
  },
  {
    company: "SwiftXR",
    role: "Technical Sales Executive",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcVuhVGY1eFnJZWY43TIni5VBpzZEepnwDj2TUQTb4Q&s=10",
    period: "Aug 2025 to present", // the CV leaves the end date blank; confirm this is right
    start: 2025.58,
    industry: "XR technology",
    note: "Remote",
    points: [
      "Drives the full sales cycle for XR solutions, from lead generation to contract close.",
      "Delivers tailored technical demos and proposals, turning complex requirements into clear solutions.",
      "Runs multi-channel outreach campaigns and keeps CRM records and follow-ups accurate.",
      "Handles onboarding and account management after the sale, and spots upsell opportunities.",
    ],
  },
  {
    company: "Efficacy Professional Services",
    role: "Sales Consultant",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclGbAtZvXqum0W5zc0svn8mV7msKRXzMX-EErMfk&s=10",
    period: "Nov 2025 to present",
    start: 2025.83,
    industry: "Professional services",
    note: "Remote",
    points: [
      "Builds a steady pipeline of qualified prospects for tax, accounting and advisory services.",
      "Writes structured email outreach, follow-up and lead-nurturing sequences.",
      "Calls decision-makers and books discovery meetings and follow-up sessions.",
      "Tracks leads and activity in CRM and prospecting tools, and refines targeting and messaging with internal teams.",
    ],
  },
  {
    company: "Septa Software",
    role: "Sales Associate",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VOUQjZK3809QsjvbQbeYP9teJMO1aGbHni-6_71jzA&s=10",
    period: "Jul 2026 to present",
    start: 2026.5,
    industry: "Software solutions",
    note: "Hybrid",
    points: [
      "Finds and engages prospects for software solutions through targeted outreach and referrals.",
      "Runs product presentations, demos and discovery conversations with decision-makers.",
      "Manages the pipeline from lead qualification through proposals to deal progression.",
      "Keeps CRM records current and works with product and technical teams on customer requirements.",
    ],
  },
];

export const services: Service[] = [
  { title: "Sales executiive", blurb: "Close more of the leads you already have.", points: ["Pipeline set-up", "Pitch and proposal support", "Sales team coaching"], card: "bg-", img: "/network/ss.jpeg" },
  { title: "Marketing", blurb: "Get the right message to the right people.", points: ["Campaign planning", "Email and content", "Brand positioning"], card: "bg", img: "/network/costumer service.jpg" },
  { title: "Lead generation Specialist", blurb: "A steady flow of qualified conversations.", points: ["Prospect research", "Outreach sequences", "Lead qualification"], card: "bg", img: "/network/tech bro.jpg"},
  { title: "Leadership consulting", blurb: "Strategy and structure for growing teams.", points: ["Growth strategy", "Team structure", "Reporting and KPIs"], card: "bg", img: "/network/suit gang.jpg" },
];