export type IconName =
  | "health"
  | "education"
  | "economy"
  | "security"
  | "infrastructure"
  | "governance"
  | "investment"
  | "welfare";

export type Stat = {
  /** Rendered large. Keep it short. */
  value: string;
  label: string;
  /** Optional starting point, rendered small and struck through. */
  from?: string;
};

export type Sector = {
  slug: string;
  name: string;
  /** Plain language version, used on cards and the issue picker. */
  concern: string;
  icon: IconName;
  /** One sentence under the page title. */
  tagline: string;
  /** Lives in public/images/. Falls back to a green panel if absent. */
  image: string;
  /** The opening argument for this sector. */
  intro: string;
  stats: Stat[];
  now: { headline: string; points: string[] };
  record: { headline: string; points: string[] };
  plan: { headline: string; points: string[] };
};

export const ELECTION_ISO = "2027-01-16T08:00:00+01:00";

export const candidate = {
  name: "Peter Gregory Obi",
  short: "Peter Obi",
  office: "Candidate for President of the Federal Republic of Nigeria",
  party: "Nigeria Democratic Congress",
  partyShort: "NDC",
  runningMate: "Senator Rabiu Musa Kwankwaso",
  slogan: "A New Nigeria is POssible",
  electionLabel: "A New Nigeria is POssible",
  /** Drop the file at public/images/peter-obi.jpg. */
  portrait: "/images/peter-obi.jpg",
  facts: [
    { label: "Background", value: "Business and banking" },
    { label: "Running mate", value: "Rabiu Kwankwaso" },
    { label: "Governed", value: "Anambra, 2006 to 2014" },
    { label: "Political Party", value: "NDC" },
  ],
  bio: [
    "Peter Obi governed Anambra State from 2006 to 2014. He came to office from business, having built companies and chaired banks, and he governed the way he had traded: counting everything, spending carefully, and refusing to sign for what the state could not afford.",
    "He is the first Anambra governor to be removed and to win his mandate back in court rather than on the street, and the first in the state's history to be returned for a second term.",
    "He ran for president in 2023 and moved a generation of young Nigerians into politics for the first time. For 2027 he stands on the Nigeria Democratic Congress ticket with Senator Rabiu Kwankwaso as his running mate.",
  ],
};

/** The numbers that carry the whole argument. Used on the home page. */
export const headlineStats: Stat[] = [
  { value: "1st", from: "26th", label: "National WAEC ranking, from 26th of 36 states" },
  { value: "12+", from: "0", label: "Accredited health institutions, from none in 2006" },
  { value: "5 yrs", label: "Consecutive polio free years in Anambra" },
  { value: "800km+", label: "Roads completed by the administration" },
];

export const sectors: Sector[] = [
  {
    slug: "health",
    name: "Health",
    concern: "Hospitals that work, and doctors who stay",
    icon: "health",
    image: "/images/health.jpg",
    tagline: "He inherited a state with no accredited health institution and left it polio free.",
    intro:
      "Nigeria's health system is in visible crisis, and the country needs someone who has already rebuilt one from nothing. Peter Obi did exactly that in Anambra, on a state budget, in eight years.",
    stats: [
      { value: "12+", from: "0", label: "Accredited health institutions" },
      { value: "5 yrs", label: "Polio free, consecutively" },
      { value: "₦120m", label: "Reported immunisation award" },
      { value: "70+", label: "Ambulances donated to mission hospitals" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Around 85 percent of Primary Healthcare Centres are in distress, without doctors, nurses, clean water or working laboratories, which pushes even minor cases into overwhelmed general hospitals.",
        "More than 50,000 Nigerian trained doctors now practise abroad. The doctor to patient ratio has fallen far below what the World Health Organisation recommends.",
        "Resident doctors have gone on strike repeatedly after government broke agreements within months of signing them.",
        "Health spending has stayed near 4 percent of the federal budget for a decade, nowhere near the 15 percent Nigeria committed to under the Abuja Declaration.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "Anambra had not a single accredited health institution when he took office in 2006. By the end of his tenure, more than twelve had been accredited, including two hospitals.",
        "He built the Anambra State University Teaching Hospital, completed in 2009, upgrading a cottage hospital into a facility with modern laboratories, consulting clinics and vaccine cold chain storage.",
        "He built a Kidney Dialysis Centre and heavily subsidised dialysis and kidney care, years before other states treated it as a priority.",
        "He backed the N10 billion Julie Pharmacy complex, described at the time as one of the most modern pharmaceutical facilities in Africa.",
        "He funded upgrades to Onitsha General Hospital and the School of Health Technology.",
        "He donated more than 70 ambulances to mission and charity hospitals, extending emergency transport far beyond government facilities.",
        "Anambra eradicated polio under his watch and stayed polio free for five consecutive years.",
        "Anambra received a reported ₦120 million award connected to its polio-eradication and routine-immunisation performance in the South-East.",
        "He invested in cardiac care, making heart operations possible at St Joseph's Hospital, Adazi Nnukwu, where they had never been available before.",
        "He funded rehabilitation services for stroke and post traumatic conditions, an area Nigerian states almost never touch.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Health insurance for every family.",
        "Improve maternal and child health care nationwide.",
        "Widen access to essential medicines.",
        "Give health workers the equipment, pay and conditions that keep them in Nigeria.",
        "Rebuild primary health care first, so that ordinary illness is treated locally instead of collapsing the hospitals above it.",
      ],
    },
  },

  {
    slug: "education",
    name: "Education",
    concern: "Schools that teach, and conducive environment for kids",
    icon: "education",
    image: "/images/education.jpg",
    tagline: "From 26th of 36 states to first in the country.",
    intro:
      "The turnaround in Anambra's schools is the least disputed achievement of his eight years, cited even by commentators who criticise everything else he did.",
    stats: [
      { value: "1st", from: "26th", label: "National WAEC ranking" },
      { value: "4,000", label: "Model primary schools planned" },
      { value: "8 yrs", label: "To go from 26th to 1st" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Nigeria carries one of the largest out of school populations in the world.",
        "Basic education money leaks between federal, state and local government, and matching grants sit unclaimed while classrooms go without.",
        "Public confidence in state schools has collapsed to the point that families who cannot afford private schools simply withdraw their children.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "Anambra ranked 26th out of 36 states in the WAEC examinations when he took office.",
        "For the final three years of his eight year tenure, Anambra ranked first in the country in the same examinations.",
        "He rolled out plans for roughly 4,000 model primary schools across the state.",
        "He introduced ICT centres in schools, an early state level push for digital literacy.",
        "He changed how the money moved. Funding went directly to schools, bypassing the state Ministry of Education, where gatekeepers had previously delayed and skimmed disbursements.",
        "That single structural change, cutting out the middleman, is why the results moved. It was not simply a matter of spending more.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Education for every family, alongside health insurance.",
        "Improve basic education, so that primary school actually teaches reading and arithmetic.",
        "Strengthen universities and restore their standing.",
        "Expand technical and vocational training, so that school leads to work.",
        "Apply the direct funding model to national basic education, sending money to schools rather than through the tiers where it disappears.",
      ],
    },
  },

  {
    slug: "economy",
    name: "Economy and money",
    concern: "Jobs, prices, and how government spends",
    icon: "economy",
    image: "/images/economy.jpg",
    tagline: "A record of fiscal restraint that should be judged from the underlying accounts.",
    intro:
      "Obi ran Anambra like a business that intended to still exist in twenty years. He saved, he refused to borrow recklessly, and he left money in the treasury.",
    stats: [
      { value: "₦500m", label: "Presidential lodge he refused to build" },
      { value: "2", label: "Major manufacturers brought into the state" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Inflation, fuel costs and a weak naira have destroyed real incomes, and debt servicing now consumes an enormous share of federal revenue.",
        "The cost of running government itself keeps rising while the services it delivers keep shrinking.",
        "Public office has become the most reliable route to personal wealth in Nigeria, which determines who competes for it and why.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "Debt Management Office records show that Anambra still had domestic and external debt at the end of 2013; claims that the state was completely debt-free are inaccurate.",
        "Obi has repeatedly said his administration left substantial cash and investments. Later fact-checks found that the popular $150 million or ₦75 billion versions cannot be fully established from public records, so this site treats the amount as disputed rather than settled fact.",
        "He coordinated aerial and poverty mapping of the state, using real data to plan infrastructure and social programmes rather than guessing.",
        "He refused to build a N500 million Presidential Lodge for a presidential visit. He vacated his own lodge for the week and stayed in a hotel himself.",
        "He attracted major private investment into the state while keeping its books clean, proving that governance quality is itself an economic input.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Move Nigeria from a consumption economy to a production economy. Produce more of what we consume, process more of what we produce.",
        "Prioritise agriculture, manufacturing, technology, construction, energy and the creative industries.",
        "Build regional development on what each region already does well, so every region produces, contributes and benefits.",
        "Cut the cost of governance, and remove the waste that makes public office attractive for the wrong reasons.",
      ],
    },
  },

  {
    slug: "security",
    name: "Security",
    concern: "Being safe on the road and on the farm",
    icon: "security",
    image: "/images/security.jpg",
    tagline: "He funded and coordinated security without ever commanding a single police officer.",
    intro:
      "No Nigerian governor controls the police. Obi still made Anambra one of the safer states in the federation by funding, equipping and coordinating relentlessly.",
    stats: [
      { value: "500+", label: "Security vehicles supplied to police and military" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Kidnapping, banditry and mass killings continue across Benue, Plateau, Katsina, Zamfara and beyond, emptying farming communities and driving food prices up.",
        "States carry every consequence of insecurity but control none of the policing, leaving governors dependent on federal coordination that often does not come.",
        "Communities have been left to defend themselves without any lawful structure to do it within.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "His administration partnered with the police and military and supplied more than 500 security vehicles to raise patrol capacity across the state.",
        "Anambra's relative security through his tenure came from exactly the state and federal coordination that fails elsewhere.",
        "He held local government elections in Anambra, restoring the tier of government closest to the communities that need security most.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Improve intelligence gathering and coordination between the security agencies.",
        "Strengthen policing and border management.",
        "Use technology for early threat detection and faster response.",
        "Develop lawful community based security systems, so communities can identify threats early within a legal structure.",
      ],
    },
  },

  {
    slug: "infrastructure",
    name: "Infrastructure",
    concern: "Roads that survive the next rainy season",
    icon: "infrastructure",
    image: "/images/infrastructure.jpg",
    tagline: "He made contractors maintain their own roads for seven years.",
    intro:
      "Nigerian roads fail because nobody owns them after the ribbon is cut. Obi fixed that in Anambra with a contract clause that cost the state nothing.",
    stats: [
      { value: "800km+", label: "Roads developed" },
      { value: "5 to 7", label: "Years of contractor maintenance, bonded" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Federal roads are commissioned with fanfare and break apart within a few rainy seasons, because maintenance becomes nobody's contractual responsibility after handover.",
        "The same roads are then re-awarded, re-funded and rebuilt, which is how a permanent problem becomes a permanent contract.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "His administration reported completing more than 800 km of roads. The figure is retained as an attributed government claim while stronger project-by-project documentation is assembled.",
        "Road contractors were required to sign maintenance bonds committing them to maintain what they built for five to seven years after completion.",
        "He established the Anambra Road Maintenance Agency, so that maintaining roads had a permanent owner instead of being left to chance.",
        "He built new government secretariats and a consolidated Three Arms Zone, co-locating the executive, legislature and judiciary as long term institutional planning rather than short term visibility projects.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Treat construction as one of the priority production sectors of the economy.",
        "Apply the maintenance bond model to federal road contracts, so contractors carry the cost of building badly.",
        "Fund maintenance as a standing obligation rather than as a fresh contract every few years.",
      ],
    },
  },

  {
    slug: "governance",
    name: "Governance",
    concern: "Accountable Governance process",
    icon: "governance",
    image: "/images/governance.jpg",
    tagline: "He took his mandate back through the courts, not the street.",
    intro:
      "Everything in this section happened in public and sits on the court record. It is the part of his case that does not depend on any figure at all.",
    stats: [
      { value: "1st", label: "Anambra governor to reclaim his mandate in court" },
      { value: "1st", label: "Governor re-elected for a second term in Anambra history" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Public officials routinely leave office wealthier than the businesses that employ their constituents.",
        "Political disputes are settled by force, money and party machinery far more often than by institutions.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He was impeached in November 2006 and reinstated in February 2007, becoming the first Anambra governor to reclaim his mandate through the courts.",
        "He obtained a landmark constitutional interpretation of gubernatorial tenure length, a ruling that changed how governors' terms are calculated nationally, not only in Anambra.",
        "He became the first governor re-elected for a second term in Anambra State's history.",
        "He chose to fight his impeachment through the courts rather than by extra legal means, at a time when that was not the normal choice.",
        "He routed education funding around his own ministry, accepting less personal control in exchange for less leakage.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Cut the cost of governance so that office attracts people who want to serve rather than people who want to profit.",
        "Campaign and govern on issues, refusing appeals to ethnicity, religion and propaganda.",
        "Meet Nigerians directly rather than through proxies, on the principle that leadership requires presence.",
      ],
    },
  },

  {
    slug: "investment",
    name: "Investment and industry",
    concern: "Factories, and made in Nigeria",
    icon: "investment",
    image: "/images/investment.jpg",
    tagline: "He brought SABMiller and Innoson into Anambra.",
    intro:
      "Obi's fiscal discipline was not an accounting exercise. Clean books and low debt are what made serious manufacturers willing to build in Anambra.",
    stats: [
      { value: "2", label: "Major plants attracted, SABMiller and Innoson" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Nigeria imports what it could make, and exports raw material it could process, which exports the jobs with it.",
        "Indigenous manufacturers struggle for power, credit and policy stability, while foreign competitors are courted with incentives.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "His administration attracted the SABMiller brewery, a major foreign manufacturing investment, into the state.",
        "He brought in Innoson Motors, one of Nigeria's very few indigenous vehicle manufacturers, backing a Nigerian producer rather than only a foreign one.",
        "The low debt profile and clean fiscal position were part of what made Anambra attractive to both. Governance quality is an economic input, not something separate from it.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Back Nigerian manufacturers so that made in Nigeria becomes a commercial reality rather than a slogan.",
        "Prioritise agriculture, manufacturing, technology, construction, energy and the creative industries as the engines of production.",
        "Process more of what Nigeria produces at home, so the value and the jobs stay in the country.",
      ],
    },
  },

  {
    slug: "welfare",
    name: "Social welfare",
    concern: "Children, and the low class-citizen",
    icon: "welfare",
    image: "/images/welfare.jpg",
    tagline: "Human capital first, without abandoning fiscal discipline.",
    intro:
      "Obi spent on people while still saving money, which is the direct answer to anyone who claims social investment requires reckless borrowing.",
    stats: [],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Children are on the streets in every major Nigerian city, and the systems meant to catch them barely function.",
        "Social spending is treated as what is left over after everything else, rather than as the foundation everything else stands on.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He put real resources into child welfare and rehabilitation homes, aimed at getting children off the street and into care.",
        "He funded rehabilitation services for chronic and post traumatic conditions, including stroke rehabilitation, which almost no Nigerian state funds.",
        "Health and education spending ran together as a deliberate human capital strategy, not as scattered spending.",
        "He did all of it while saving money and keeping the state's debt the lowest in the federation.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Health insurance and education for every family, as the floor rather than the ceiling.",
        "Reorder spending priorities toward people without abandoning financial prudence.",
        "Cut the cost of governance and move the savings into the services that reach ordinary Nigerians.",
      ],
    },
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}

/** Used on the About page. */
export const caseFor2027 = [
  "Anambra is one of Nigeria's smaller states by budget. Obi moved health, education and fiscal indicators there on limited resources, which is the harder version of the task, not the easier one.",
  "His platform ties that record directly to a promise to cut the cost of national governance, and to move Nigeria from consuming to producing.",
  "He treats corruption and government waste as the central obstacle to development, and he campaigns with specific, checkable numbers rather than slogans.",
  "He stands on the Nigeria Democratic Congress ticket with Senator Rabiu Kwankwaso, pairing the South East and the North West on one ballot line.",
];

export type VideoSlide = {
  src: string;
  poster: string;
};

export const currentStateVideos: VideoSlide[] = [
  {
    src: "/videos/1.mp4",
    poster: "/videos/1.jpg",
  },
  {
    src: "/videos/4.mp4",
    poster: "/videos/4.jpg",
  },
  {
    src: "/videos/5.mp4",
    poster: "/videos/5.jpg",
  },
  {
    src: "/videos/3.mp4",
    poster: "/videos/3.jpg",
  },
  {
    src: "/videos/2.mp4",
    poster: "/videos/2.jpg",
  },
  {
    src: "/videos/6.mp4",
    poster: "/videos/6.jpg",
  },
];
