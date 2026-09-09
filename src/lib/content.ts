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
        "85 percent of primary health centres lack doctors, nurses, clean water or working laboratories.",
        "Over 50,000 Nigerian trained doctors now practise abroad.",
        "The doctor to patient ratio sits far below the WHO minimum.",
        "Resident doctors strike again each time government breaks an agreement it signed.",
        "Health takes 4 percent of the federal budget. Nigeria pledged 15.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He met a state with no accredited health institution.",
        "Twelve stood accredited when he left, two of them hospitals.",
        "He built the Anambra State University Teaching Hospital.",
        "Modern laboratories, consulting clinics and vaccine cold storage went in with it.",
        "He built a kidney dialysis centre and subsidised the treatment.",
        "The ₦10 billion Julie Pharmacy complex had his backing.",
        "Onitsha General Hospital and the School of Health Technology got their upgrades.",
        "Over 70 ambulances went to mission and charity hospitals.",
        "Polio disappeared from Anambra and stayed gone five straight years.",
        "That record won the state a ₦120 million immunisation award.",
        "Heart surgery arrived at St Joseph's Hospital, Adazi Nnukwu.",
        "Stroke and trauma rehabilitation got funding almost no state provides.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Every family gets health insurance.",
        "He will improve maternal and child care.",
        "Essential medicines come within reach.",
        "Health workers get equipped and paid enough to stay.",
        "Primary health care gets rebuilt first.",
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
        "10 million primary age children are out of school.",
        "Another 8 million secondary age children are out with them.",
        "Education money leaks between federal, state and local government.",
        "Matching grants sit unclaimed while classrooms go without.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He met Anambra ranked 26th of 36 states in WAEC.",
        "He left it ranked 1st in the country.",
        "That position held for his last three years.",
        "He sent funding straight to schools and cut the ministry out of the path.",
        "4,000 model primary schools went into the plan.",
        "ICT centres went into the classrooms.",
        "Schools went back to their mission owners.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will fund basic education directly.",
        "Universities get strengthened.",
        "Technical and vocational training expands.",
        "Every family gets education.",
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
      { value: "$150m", label: "Left in state savings in 2014" },
      { value: "₦36bn", label: "Left alongside it in state savings" },
      { value: "₦500m", label: "Presidential lodge he refused to build" },
      { value: "2", label: "Major manufacturers brought into the state" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Prices rise faster than wages.",
        "The naira buys less every month.",
        "Debt servicing swallows most of federal revenue.",
        "Government costs more each year and delivers less.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He left $150 million and ₦36 billion in state savings in 2014.",
        "No debt, and nothing owed to any contractor, supplier, salary or pension.",
        "The money sat in standard bonds and accounts at known public rates.",
        "The handover notes are open for anyone to verify.",
        "He refused a ₦500 million presidential lodge and stayed in a hotel instead.",
        "Anambra became the first Nigerian state to start sovereign wealth savings.",
        "Aerial mapping told him where the roads and the programmes should go.",
        "Major private investment followed.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will move Nigeria from consumption to production.",
        "We produce more of what we consume.",
        "We process more of what we produce.",
        "Agriculture, manufacturing, technology, construction, energy and the creative industries come first.",
        "The cost of governance comes down.",
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
        "Kidnapping, banditry and mass killings continue across the country.",
        "Farmers are driven off their land and food prices climb.",
        "States carry every loss but control no police.",
        "Communities defend themselves with no lawful structure to do it within.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He put over 500 vehicles into the hands of the police and the military.",
        "He funded and coordinated security without commanding a single officer.",
        "Anambra stayed among the safer states in the federation.",
        "He held local government elections.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will make the agencies share intelligence.",
        "Policing and border management get strengthened.",
        "Technology goes in to catch threats early.",
        "Community security gets a lawful structure at last.",
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
        "Federal roads break apart within a few rainy seasons.",
        "After handover, maintenance belongs to nobody.",
        "The same roads are re-awarded, re-funded and rebuilt again.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He built over 800 kilometres of roads.",
        "Every contractor signed a maintenance bond.",
        "That bond held them for five to seven years after completion.",
        "He created the Anambra Road Maintenance Agency.",
        "New government secretariats went up.",
        "A Three Arms Zone brought the executive, legislature and judiciary together.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will treat construction as a priority production sector.",
        "Maintenance bonds go onto federal road contracts.",
        "Maintenance gets funded as a standing duty, not a fresh contract.",
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
        "Public officials leave office richer than the people who employ them.",
        "Money and force settle political disputes, not institutions.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "They impeached him in November 2006.",
        "He went to court and won his mandate back in February 2007.",
        "No Anambra governor had ever reclaimed the seat that way.",
        "He won the ruling that fixed how a governor's four year term is counted.",
        "That ruling changed the position for governors nationwide.",
        "He became the first governor Anambra ever re-elected.",
        "He routed school money around his own ministry to stop the leakage.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will cut the cost of governance.",
        "Issues decide the campaign, not ethnicity or religion.",
        "He will meet Nigerians directly, not through proxies.",
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
        "Nigeria imports what it could make.",
        "Nigeria exports raw material it could process.",
        "Nigerian manufacturers fight for power, credit and stable policy.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He brought the SABMiller brewery to Anambra.",
        "Innoson Motors, a Nigerian vehicle manufacturer, came with it.",
        "Clean books are why both of them came.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will back Nigerian manufacturers.",
        "Agriculture, manufacturing, technology, construction, energy and the creative industries come first.",
        "More of what Nigeria produces gets processed at home.",
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
        "Children live on the streets of every major Nigerian city.",
        "Social spending is what is left over, never the foundation.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He funded child welfare and rehabilitation homes.",
        "Children came off the street and into care.",
        "Stroke and trauma rehabilitation got funding almost no state provides.",
        "Health and education moved together as one plan.",
        "The savings kept growing while he did it.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "Every family gets health insurance and education.",
        "He will put spending into the services that reach ordinary Nigerians.",
        "Savings from cheaper governance go into people.",
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
