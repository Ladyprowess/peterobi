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
  manifesto2023: { title: "Peter Obi releases ‘Our Pact with Nigerians’ manifesto", publisher: "TheCable", url: "https://www.thecable.ng/peter-obi-finally-releases-manifesto-promises-to-build-world-class-infrastructure/", date: "4 December 2022", kind: "reporting" },
  worldBankNigeria: { title: "Nigeria overview and development updates", publisher: "World Bank", url: "https://www.worldbank.org/en/country/nigeria/overview", kind: "official" },
  nbsCpi: { title: "Consumer Price Index reports", publisher: "National Bureau of Statistics", url: "https://www.nigerianstat.gov.ng/elibrary", kind: "official" },
  dmoDebt: { title: "Nigeria public debt data", publisher: "Debt Management Office Nigeria", url: "https://www.dmo.gov.ng/debt-profile/total-public-debt", kind: "official" },
  unicefEducation: { title: "Education in Nigeria", publisher: "UNICEF Nigeria", url: "https://www.unicef.org/nigeria/education", kind: "official" },
  unicefHealth: { title: "Health and child survival in Nigeria", publisher: "UNICEF Nigeria", url: "https://www.unicef.org/nigeria/health", kind: "official" },
  inec2023: { title: "2023 general election results", publisher: "Independent National Electoral Commission", url: "https://www.inecnigeria.org/", kind: "official" },
  obiAcceptance: { title: "Acceptance speech following the NDC presidential nomination", publisher: "Peter Obi", url: "https://x.com/PeterObi/status/2060952436798321054", date: "31 May 2026", kind: "speech" },
  obiCandidacy: { title: "Peter Obi wins NDC presidential nomination", publisher: "Reuters", url: "https://www.reuters.com/world/africa/nigerias-obi-run-president-again-after-opposition-split-2026-06-01/", date: "1 June 2026", kind: "reporting" },
  gatesAward: { title: "Polio eradication award for Anambra", publisher: "Channels Television", url: "https://www.channelstv.com/2013/07/06/polio-eradication-bill-gates-foundation-names-obi-best-governor-in-nigeria/", date: "6 July 2013", kind: "reporting" },
  gatesAwardDetail: { title: "Anambra to match immunisation award for maternal and child centres", publisher: "Vanguard", url: "https://www.vanguardngr.com/2013/06/anambra-to-use-bill-gates-money-to-build-10-hospitals/", date: "13 June 2013", kind: "reporting" },
  educationStudy: { title: "Anambra State Education Rebirth: The Peter Obi Model", publisher: "Selonnes Consult policy assessment", url: "https://selonnes.com/2018/02/01/anambra-state-education-rebirth-the-peter-obi-model/", date: "2018", kind: "reporting" },
  roadReport: { title: "I've built 800km+ of roads, says Obi", publisher: "The Nation", url: "https://thenationonlineng.net/ive-built-800km+-of-roads-says-obi/", date: "22 August 2013", kind: "reporting" },
  debtFactCheck: { title: "Fact check: claim that Obi left no debt is false", publisher: "The Guardian Nigeria", url: "https://guardian.ng/news/fact-check-claim-that-peter-obi-left-no-debt-in-anambra-is-false/", date: "11 June 2025", kind: "reporting" },
  savingsFactCheck: { title: "What public records show about Anambra savings claims", publisher: "International Centre for Investigative Reporting", url: "https://www.icirnigeria.org/fact-check-claim-that-anambras-debt-profile-is-over-n200bn-is-false/", date: "13 January 2021", kind: "reporting" },
  physicianData: { title: "Physicians per 1,000 people: Nigeria", publisher: "World Bank, sourced from WHO", url: "https://data.worldbank.org/indicator/SH.MED.PHYS.ZS?locations=NG", kind: "official" },
  obiSavingsDefence: { title: "Obi defends $150m, N36bn Anambra savings claim", publisher: "The Punch", url: "https://punchng.com/obi-defends-150m-n36bn-anambra-savings-claim/", kind: "reporting" },
  unicefChildren2024: { title: "The State of Nigeria's Children", publisher: "UNICEF Nigeria", url: "https://www.unicef.org/nigeria/press-releases/world-childrens-day-nigeria-and-unicef-unveil-report-state-nigerias-children-urging", date: "20 November 2024", kind: "official" },
};

export const evidence: EvidenceItem[] = [
  { id: "anambra-savings-total", sector: "Economy", claim: "He left $150 million and \u20a636 billion in state savings in 2014.", context: "Reported by The Punch.", status: "record", sourceIds: ["obiSavingsDefence"] },
  { id: "anambra-no-debt", sector: "Economy", claim: "No debt, and nothing owed to any contractor, supplier, salary or pension.", context: "Reported by The Punch.", status: "record", sourceIds: ["obiSavingsDefence"] },
  { id: "anambra-savings-held", sector: "Economy", claim: "The savings sat in standard bonds and accounts at known public rates.", context: "Reported by The Punch.", status: "record", sourceIds: ["obiSavingsDefence"] },
  { id: "anambra-handover", sector: "Economy", claim: "The handover notes are open for anyone to verify.", context: "Reported by The Punch.", status: "record", sourceIds: ["obiSavingsDefence"] },
  { id: "anambra-education", sector: "Education", claim: "He took Anambra from 26th of 36 states to 1st in WAEC.", context: "He sent grants straight to schools, returned schools to their owners and put ICT in classrooms.", status: "record", sourceIds: ["educationStudy"] },
  { id: "anambra-immunisation", sector: "Health", claim: "He won Anambra a \u20a6120 million award for polio eradication and immunisation.", context: "The state matched it with funding for maternal and child health centres.", status: "record", sourceIds: ["gatesAward", "gatesAwardDetail"] },
  { id: "anambra-roads", sector: "Infrastructure", claim: "He built over 800 kilometres of roads.", context: "Contractors signed maintenance bonds covering five to seven years after completion.", status: "record", sourceIds: ["roadReport"] },
  { id: "candidate-2027", sector: "Election", claim: "He is the NDC candidate for the 2027 presidential election.", context: "His acceptance statement and independent reporting.", status: "record", sourceIds: ["obiAcceptance", "obiCandidacy"] },
  { id: "cost-of-living", sector: "Economy", claim: "Prices have outrun what Nigerian incomes can buy.", context: "National Bureau of Statistics Consumer Price Index series.", status: "nigeria-now", sourceIds: ["nbsCpi", "worldBankNigeria"] },
  { id: "public-debt", sector: "Governance", claim: "Nigeria borrows more each year and shows less for it.", context: "Debt Management Office public debt tables.", status: "nigeria-now", sourceIds: ["dmoDebt"] },
  { id: "out-of-school", sector: "Education", claim: "10 million primary age and 8 million secondary age children are out of school.", context: "UNICEF, 2024.", status: "nigeria-now", sourceIds: ["unicefChildren2024", "unicefEducation"] },
  { id: "doctor-density", sector: "Health", claim: "Nigeria has about 0.4 physicians per 1,000 people.", context: "World Bank series, sourced from WHO.", status: "nigeria-now", sourceIds: ["physicianData"] },
  { id: "primary-health", sector: "Health", claim: "Primary health care and child survival are failing nationally.", context: "UNICEF Nigeria country data.", status: "nigeria-now", sourceIds: ["unicefHealth"] },
  { id: "basic-education", sector: "Education", claim: "Millions of children leave school without learning to read.", context: "UNICEF Nigeria country programme.", status: "nigeria-now", sourceIds: ["unicefEducation"] },
  { id: "production-economy", sector: "Economy", claim: "He will move Nigeria from consumption to production.", context: "Agriculture, manufacturing, technology, energy, construction and the creative economy come first.", status: "proposal", sourceIds: ["manifesto2023", "obiAcceptance"] },
];

export const mediaItems = [
  { type: "photo" as const, sector: "Infrastructure", title: "Road conditions across Nigeria", image: "/images/media-bad-road.jpg" },
  { type: "video" as const, sector: "Health", title: "Inside local health facilities", image: "/images/media-health-centre.jpg" },
  { type: "photo" as const, sector: "Education", title: "The classroom reality", image: "/images/media-classroom.jpg" },
  { type: "video" as const, sector: "Cost of living", title: "What families are paying", image: "/images/media-market.jpg" },
];

export function mediaForSector(slug: string, name: string) {
  const subjects = slug === "health"
    ? { now: ["Inside Nigeria's hospitals", "Primary healthcare centres", "The people behind the numbers"], record: ["Anambra's hospital turnaround", "Maternal and child health", "Immunisation and ambulances"], future: ["Healthcare closer to home", "Keeping health workers in Nigeria", "Health insurance that reaches families"] }
    : slug === "education"
      ? { now: ["Classrooms today", "Children outside school", "What teachers work with"], record: ["Schools returned to their owners", "Direct funding for schools", "Anambra's examination results"], future: ["Every child in school", "Better equipped classrooms", "Training that leads to work"] }
      : slug === "infrastructure"
        ? { now: ["The roads Nigerians use", "Damage, delays and lost income", "Communities cut off"], record: ["Road delivery in Anambra", "Maintenance after construction", "Connecting towns and markets"], future: ["Roads built to last", "Maintenance as a duty", "Infrastructure that supports production"] }
        : { now: [`${name} in Nigeria today`, "The human impact", "What needs to change"], record: [`The Anambra ${name.toLowerCase()} record`, "The work on the ground", "The result for residents"], future: [`A national ${name.toLowerCase()} plan`, "What better delivery could look like", "From state experience to national action"] };

  return (Object.keys(subjects) as Array<keyof typeof subjects>).flatMap((stage) =>
    subjects[stage].map((title, index) => ({
      stage,
      image: `/images/${slug}-${stage}-${index + 1}.jpg`,
      type: index === 1 ? "video" as const : "photo" as const,
      title,
      caption: stage === "now" ? "A closer look at what Nigerians experience today." : stage === "record" ? "A closer look at Peter Obi's record in Anambra State." : "What better national delivery would mean for Nigerians.",
    })),
  );
}
