export type Source = {
  title: string;
  publisher: string;
  url: string;
  date?: string;
  kind: "official" | "reporting" | "speech";
};

export type EvidenceItem = {
  id: string;
  sector: string;
  claim: string;
  context: string;
  status: "record" | "nigeria-now" | "proposal";
  sourceIds: string[];
};

export const sources: Record<string, Source> = {
  manifesto2023: { title: "Our Pact with Nigerians", publisher: "Peter Obi presidential campaign", url: "https://www.peterobi.com/", kind: "speech" },
  worldBankNigeria: { title: "Nigeria overview and development updates", publisher: "World Bank", url: "https://www.worldbank.org/en/country/nigeria/overview", kind: "official" },
  nbsCpi: { title: "Consumer Price Index reports", publisher: "National Bureau of Statistics", url: "https://www.nigerianstat.gov.ng/elibrary", kind: "official" },
  dmoDebt: { title: "Nigeria public debt data", publisher: "Debt Management Office Nigeria", url: "https://www.dmo.gov.ng/debt-profile/total-public-debt", kind: "official" },
  unicefEducation: { title: "Education in Nigeria", publisher: "UNICEF Nigeria", url: "https://www.unicef.org/nigeria/education", kind: "official" },
  unicefHealth: { title: "Health and child survival in Nigeria", publisher: "UNICEF Nigeria", url: "https://www.unicef.org/nigeria/health", kind: "official" },
  inec2023: { title: "2023 general election results", publisher: "Independent National Electoral Commission", url: "https://www.inecnigeria.org/", kind: "official" },
  obiAcceptance: { title: "Acceptance speech following the NDC presidential nomination", publisher: "Peter Obi", url: "https://x.com/PeterObi/status/2060952436798321054", date: "31 May 2026", kind: "speech" },
  obiCandidacy: { title: "Peter Obi wins NDC presidential nomination", publisher: "Reuters", url: "https://www.reuters.com/world/africa/nigerias-obi-run-president-again-after-opposition-split-2026-06-01/", date: "1 June 2026", kind: "reporting" },
};

export const evidence: EvidenceItem[] = [
  { id: "production-economy", sector: "Economy", claim: "Move Nigeria from consumption to production.", context: "The programme prioritises agriculture, manufacturing, technology, energy, construction and the creative economy.", status: "proposal", sourceIds: ["manifesto2023", "obiAcceptance"] },
  { id: "cost-of-living", sector: "Economy", claim: "High prices have reduced what Nigerian incomes can buy.", context: "This record should be updated whenever NBS releases a new CPI report; the source link leads to the official series rather than a frozen social-media graphic.", status: "nigeria-now", sourceIds: ["nbsCpi", "worldBankNigeria"] },
  { id: "public-debt", sector: "Governance", claim: "Public debt must be judged against what the borrowing produced.", context: "The site links to the DMO tables so readers can inspect the official totals and composition themselves.", status: "nigeria-now", sourceIds: ["dmoDebt"] },
  { id: "basic-education", sector: "Education", claim: "Millions of Nigerian children remain outside school or leave without foundational learning.", context: "The national education case is grounded in UNICEF's country programme and should be paired with state-level results where available.", status: "nigeria-now", sourceIds: ["unicefEducation"] },
  { id: "primary-health", sector: "Health", claim: "Primary healthcare and child survival remain urgent national problems.", context: "The evidence page points readers to the underlying institutional source, not only the campaign interpretation.", status: "nigeria-now", sourceIds: ["unicefHealth"] },
  { id: "candidate-2027", sector: "Election", claim: "Peter Obi accepted the NDC presidential nomination for the 2027 election.", context: "The record includes both his own acceptance statement and independent reporting.", status: "record", sourceIds: ["obiAcceptance", "obiCandidacy"] },
];

export const mediaItems = [
  { type: "photo" as const, sector: "Infrastructure", title: "Road conditions across Nigeria", description: "Before-and-after photographs, location, date captured and the road authority responsible.", image: "/images/media-bad-road.jpg" },
  { type: "video" as const, sector: "Health", title: "Inside local health facilities", description: "Short, permission-cleared videos showing staffing, power, water, equipment and patient access.", image: "/images/media-health-centre.jpg" },
  { type: "photo" as const, sector: "Education", title: "The classroom reality", description: "Documented school conditions paired with enrolment and learning data—not images without context.", image: "/images/media-classroom.jpg" },
  { type: "video" as const, sector: "Cost of living", title: "What families are paying", description: "Market visits, receipts and first-person accounts with dates so viewers can verify when prices changed.", image: "/images/media-market.jpg" },
];
