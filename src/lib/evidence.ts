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
  unicefChildren2024: { title: "The State of Nigeria's Children", publisher: "UNICEF Nigeria", url: "https://www.unicef.org/nigeria/press-releases/world-childrens-day-nigeria-and-unicef-unveil-report-state-nigerias-children-urging", date: "20 November 2024", kind: "official" },
};

export const evidence: EvidenceItem[] = [
  { id: "production-economy", sector: "Economy", claim: "Move Nigeria from consumption to production.", context: "The programme prioritises agriculture, manufacturing, technology, energy, construction and the creative economy.", status: "proposal", sourceIds: ["manifesto2023", "obiAcceptance"] },
  { id: "cost-of-living", sector: "Economy", claim: "High prices have reduced what Nigerian incomes can buy.", context: "This record should be updated whenever NBS releases a new CPI report; the source link leads to the official series rather than a frozen social-media graphic.", status: "nigeria-now", sourceIds: ["nbsCpi", "worldBankNigeria"] },
  { id: "public-debt", sector: "Governance", claim: "Public debt must be judged against what the borrowing produced.", context: "The site links to the DMO tables so readers can inspect the official totals and composition themselves.", status: "nigeria-now", sourceIds: ["dmoDebt"] },
  { id: "basic-education", sector: "Education", claim: "Millions of Nigerian children remain outside school or leave without foundational learning.", context: "The national education case is grounded in UNICEF's country programme and should be paired with state-level results where available.", status: "nigeria-now", sourceIds: ["unicefEducation"] },
  { id: "primary-health", sector: "Health", claim: "Primary healthcare and child survival remain urgent national problems.", context: "The evidence page points readers to the underlying institutional source, not only the campaign interpretation.", status: "nigeria-now", sourceIds: ["unicefHealth"] },
  { id: "candidate-2027", sector: "Election", claim: "Peter Obi accepted the NDC presidential nomination for the 2027 election.", context: "The record includes both his own acceptance statement and independent reporting.", status: "record", sourceIds: ["obiAcceptance", "obiCandidacy"] },
  { id: "anambra-immunisation", sector: "Health", claim: "Anambra received recognition and a cash award for polio-eradication and immunisation performance.", context: "Contemporary reports put the award at ₦120 million and said the state planned matching funds for maternal and child health centres. The site no longer repeats the unsupported $1 million version.", status: "record", sourceIds: ["gatesAward", "gatesAwardDetail"] },
  { id: "doctor-density", sector: "Health", claim: "Nigeria had about 0.4 physicians per 1,000 people in the latest World Bank series value.", context: "The figure is linked to the underlying WHO-sourced indicator and carries its reference year rather than being described as a live headcount.", status: "nigeria-now", sourceIds: ["physicianData"] },
  { id: "anambra-education", sector: "Education", claim: "Anambra's school reforms combined school returns, direct grants, infrastructure and ICT investment.", context: "A policy assessment documents the reform design and the state's reported improvement in national examination performance. Examination ranking claims remain attributed to that record.", status: "record", sourceIds: ["educationStudy"] },
  { id: "out-of-school", sector: "Education", claim: "Nigeria's out-of-school population remains a national emergency.", context: "UNICEF's 2024 report says 10 million primary-age and 8 million secondary-age children were out of school. The site keeps the source date visible because estimates vary by definition and year.", status: "nigeria-now", sourceIds: ["unicefChildren2024", "unicefEducation"] },
  { id: "anambra-roads", sector: "Infrastructure", claim: "Obi's administration reported completing more than 800 kilometres of roads by 2013.", context: "This is an attributed administration figure reported contemporaneously, not an independently audited project total. A project-level road register remains a research priority.", status: "record", sourceIds: ["roadReport"] },
  { id: "anambra-debt", sector: "Economy", claim: "Anambra was not debt-free when Obi left office.", context: "DMO figures cited by independent fact-checkers show ₦3.03 billion domestic debt and $30.3 million external debt at December 2013. Fiscal restraint can be argued without making a false zero-debt claim.", status: "record", sourceIds: ["debtFactCheck", "dmoDebt"] },
  { id: "anambra-savings", sector: "Economy", claim: "The exact amount Obi left in cash and investments is disputed.", context: "Obi has defended a large savings figure, but public records and successor-government accounts do not fully establish the popular $150 million or ₦75 billion claim. The site does not present it as verified fact.", status: "record", sourceIds: ["savingsFactCheck", "debtFactCheck"] },
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
