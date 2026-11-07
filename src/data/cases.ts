// One entry per case study page, at /work/<slug>.
// page: the background colour token. Set its hex value in index.css (--color-webpage1 ... --color-webpage8).
// hero, figure: optional image paths (files in public/cases/). Empty = a quiet empty slot.

export type Case = {
  slug: string;
  title: string;
  page: string;
  tools?: string[];
  hero?: string;
  figure?: string;
  overview: string[];
  work: string[];
  outcome: string[];
};

export const cases: Case[] = [
  {
    slug: "sales-pipeline",
    title: "Rebuilding the Sales Pipeline for a B2B Technology Company",
    page: "bg-webpage1",
    hero: "",
    overview: [
      "A key part of my sales experience has involved developing and improving sales pipelines for technology businesses looking to generate new business opportunities and establish a more structured outbound sales process.",
      "The focus was to move beyond random prospecting and create a repeatable system for identifying potential customers, qualifying prospects, engaging decision-makers and converting interest into sales opportunities.",
      "I worked on defining target customer profiles, identifying relevant industries, researching companies, sourcing decision-makers and organising prospects into structured lead databases.",
      "I also worked with sales engagement tools to organise prospect information, execute email sequences, manage follow-ups and monitor campaign performance.",
    ],
    work: [
      "Reviewing existing prospecting and outreach activities.",
      "Defining ideal customer profiles (ICPs).",
      "Segmenting prospects according to industry, company size and business needs.",
      "Building and organising targeted lead databases.",
      "Establishing outreach and follow-up processes.",
      "Monitoring prospect engagement and pipeline progress.",
      "Identifying bottlenecks affecting lead conversion.",
    ],
    outcome: [
      "The work helped establish a more organised approach to prospecting, improve visibility across sales activities and create a structured foundation for consistent business development.",
    ],
  },
  {
    slug: "ai-campaign",
    title: "Launching a B2B AI Product Marketing and Sales Campaign",
    page: "bg-webpage2",
    overview: [
      "I was involved in developing and executing a go-to-market sales campaign for an AI-powered customer support solution designed to help businesses improve customer interactions, automate repetitive support activities and scale customer service operations.",
      "My responsibility covered the sales preparation and outbound execution stages of the campaign.",
      "This involved understanding the product's value proposition, identifying suitable industries, developing sales messaging, preparing sales collateral and building targeted prospect lists.",
      "I also worked on developing email outreach sequences and identifying decision-makers who could benefit from customer service automation.",
    ],
    work: [
      "Identifying businesses with high customer support demands.",
      "Researching organisations that could benefit from AI-powered automation.",
      "Developing product positioning and sales messaging.",
      "Preparing sales presentations and supporting materials.",
      "Building targeted prospect databases.",
      "Developing email sequences and outbound messaging.",
      "Coordinating product demonstrations and discovery conversations.",
      "Tracking campaign engagement and identifying opportunities for improvement.",
    ],
    outcome: [
      "The campaign moved from sales preparation into active prospecting and outreach. It established a clearer product proposition, created an outbound engagement structure and supported the development of a pipeline for potential product demonstrations and business opportunities.",
    ],
  },
  {
    slug: "lead-generation",
    title: "Outbound Lead Generation for a B2B Services Company",
    page: "bg-webpage3",
    tools: ["Apollo", "Saleshandy", "LinkedIn", "Spreadsheets", "CRM systems"],
    overview: [
      "I have worked on outbound lead generation projects focused on helping businesses identify, qualify and engage potential customers across international markets.",
      "My approach combines company research, decision-maker identification, lead enrichment and personalised outreach.",
      "Rather than relying on generic contact lists, I focus on understanding the businesses being targeted, their potential operational challenges and whether their requirements align with the services being offered.",
    ],
    work: [
      "Researching companies across selected industries and geographical markets.",
      "Identifying CEOs, founders, directors and other relevant decision-makers.",
      "Building prospect databases using structured research methods.",
      "Enriching lead information with business emails and other relevant contact details.",
      "Qualifying prospects against established ICP requirements.",
      "Segmenting leads for personalised outreach.",
      "Executing outbound email and LinkedIn campaigns.",
      "Conducting follow-ups and managing responses.",
      "Tracking prospect engagement and identifying qualified opportunities.",
    ],
    outcome: [
      "The process supported the development of targeted prospect databases and created a repeatable approach to international B2B prospecting.",
      "My emphasis was on lead relevance, accurate data, decision-maker access and the quality of opportunities generated rather than simply increasing contact volume.",
    ],
  },
  {
    slug: "sales-process",
    title: "Sales Process Development and Team Enablement",
    page: "bg-webpage4",
    overview: [
      "An effective sales team needs more than a list of prospects. It needs a clearly defined process that explains how to research, qualify, engage and manage potential customers.",
      "I have worked on developing structured sales workflows and evaluating sales execution capabilities to improve the effectiveness of business development activities.",
      "This includes defining prospecting expectations, establishing lead qualification criteria, developing outreach workflows and identifying the tools required at different stages of the sales process.",
    ],
    work: [
      "Structuring the sales process from lead sourcing to opportunity management.",
      "Establishing prospecting and qualification procedures.",
      "Developing outreach templates and follow-up sequences.",
      "Identifying appropriate sales engagement tools.",
      "Defining activity and performance indicators.",
      "Evaluating sales candidates based on practical experience and measurable activities.",
      "Assessing candidates' familiarity with prospecting, CRM and email automation tools.",
      "Identifying gaps between reported experience and practical execution capabilities.",
    ],
    outcome: [
      "The objective was to create a more accountable and measurable sales environment where activities could be monitored, performance evaluated and execution improved.",
      "It also reinforced the importance of assessing sales professionals based on their ability to execute rather than relying solely on previous job titles.",
    ],
  },
  {
    slug: "email-outreach",
    title: "Email Outreach and Follow-up Programme for a B2B Business",
    page: "bg-webpage5",
    tools: ["Saleshandy", "Apollo", "Spreadsheet tracking"],
    overview: [
      "I have worked on email-based outbound campaigns designed to generate interest, initiate business conversations and move potential customers towards discovery meetings.",
      "The approach involved developing targeted email lists, segmenting prospects, preparing personalised messaging and organising follow-up sequences.",
      "A major consideration was ensuring that the messaging addressed the recipient's business needs rather than simply promoting a product or service.",
    ],
    work: [
      "Building and cleaning email prospect lists.",
      "Segmenting contacts based on industry and customer profile.",
      "Developing introductory and follow-up email sequences.",
      "Personalising messages for different decision-makers.",
      "Setting up and managing email campaigns.",
      "Monitoring open rates and engagement.",
      "Reviewing campaign performance.",
      "Improving messaging and targeting based on observed results.",
      "Tracking replies and identifying prospects ready for sales conversations.",
    ],
    outcome: [
      "The work created a more structured approach to outbound communication, improved campaign visibility and established a process for following up with prospects consistently.",
      "It also demonstrated the importance of looking beyond email opens to assess meaningful engagement, positive replies and qualified sales opportunities.",
    ],
  },
  {
    slug: "executive-bd",
    title: "Executive-Level Business Development and Partnership Acquisition",
    page: "bg-webpage6",
    overview: [
      "I have participated in business development initiatives targeting senior executives, founders and decision-makers within technology, financial services and other B2B organisations.",
      "The objective was to identify strategic opportunities, establish business relationships and initiate conversations around potential partnerships, technology services and outsourcing arrangements.",
      "My approach involved researching organisations, understanding their business models, identifying relevant stakeholders and developing personalised approaches based on potential areas of collaboration.",
    ],
    work: [
      "Researching target organisations and their business operations.",
      "Identifying founders, CEOs, directors and senior decision-makers.",
      "Developing tailored business introduction messages.",
      "Conducting direct outreach through email, LinkedIn and telephone.",
      "Arranging discovery conversations.",
      "Preparing for business meetings through company and stakeholder research.",
      "Identifying potential partnership opportunities.",
      "Following up on proposals and business discussions.",
    ],
    outcome: [
      "This work strengthened the business development process by creating access to senior decision-makers, opening conversations around potential partnerships and identifying opportunities for further commercial engagement.",
      "It also developed my understanding of consultative selling, relationship building and executive-level communication.",
    ],
  },
  {
    slug: "market-research",
    title: "Market Research, ICP Development and Competitor Analysis",
    page: "bg-webpage7",
    overview: [
      "Before executing a successful outbound campaign, it is important to understand the market, identify the right customers and determine why a business should choose the services being offered.",
      "I have conducted market research projects for technology businesses seeking to identify new markets, understand competitors and improve their customer acquisition strategies.",
      "The research process involved examining industry segments, company profiles, business needs, competitors and potential buying indicators.",
    ],
    work: [
      "Identifying relevant market segments.",
      "Researching companies based on industry, size and geographical location.",
      "Defining ideal customer profiles.",
      "Identifying potential business challenges and buying indicators.",
      "Researching competitor offerings and positioning.",
      "Comparing service propositions and market opportunities.",
      "Identifying decision-makers within target accounts.",
      "Developing recommendations for prospecting and outreach.",
      "Translating research findings into actionable lead-generation strategies.",
    ],
    outcome: [
      "The research provided a stronger foundation for targeting decisions, improved prospect relevance and helped align sales activities with identifiable business opportunities.",
    ],
  },
  {
    slug: "growth-system",
    title: "Building a Repeatable Sales Growth System for an Emerging Business",
    page: "bg-webpage8",
    overview: [
      "One of the most important aspects of business development is creating a sales system that can support sustainable growth rather than depending on occasional referrals or inconsistent outreach.",
      "I have worked on structuring sales activities for growing businesses, particularly within the technology and professional services sectors.",
      "The focus was on establishing the processes, tools and performance indicators needed to generate opportunities consistently.",
      "I also considered the relationship between sales and marketing, ensuring that marketing activities supported the sales pipeline through relevant content, campaigns and product positioning.",
    ],
    work: [
      "Market research and customer segmentation.",
      "Lead generation and prospect enrichment.",
      "Sales messaging and value proposition development.",
      "Email and LinkedIn outreach.",
      "Discovery meeting generation.",
      "Lead qualification and opportunity management.",
      "Proposal preparation and follow-up.",
      "Sales reporting and performance monitoring.",
    ],
    outcome: [
      "The work focused on establishing a repeatable sales development framework that could be monitored, improved and scaled as the business grew.",
      "Rather than treating sales as isolated activities, the approach connected research, marketing, prospecting, engagement and opportunity management into one process.",
    ],
  },
];
