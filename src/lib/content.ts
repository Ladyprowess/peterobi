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
        "Resident doctors strike repeatedly after government breaks agreements it signed.",
        "Health takes about 4 percent of the federal budget. Nigeria pledged 15 percent.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He met a state with no accredited health institution.",
        "He left more than twelve accredited, including two hospitals.",
        "He built the Anambra State University Teaching Hospital.",
        "He fitted it with modern laboratories, consulting clinics and vaccine cold storage.",
        "He built a kidney dialysis centre.",
        "He subsidised dialysis and kidney care.",
        "He backed the ₦10 billion Julie Pharmacy complex.",
        "He upgraded Onitsha General Hospital and the School of Health Technology.",
        "He donated over 70 ambulances to mission and charity hospitals.",
        "He eradicated polio in Anambra.",
        "He kept the state polio free for five straight years.",
        "He won the state a ₦120 million immunisation award.",
        "He brought heart surgery to St Joseph's Hospital, Adazi Nnukwu.",
        "He funded stroke and trauma rehabilitation.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will give every family health insurance.",
        "He will improve maternal and child health care.",
        "He will widen access to essential medicines.",
        "He will equip health workers and pay them enough to stay.",
        "He will rebuild primary health care first.",
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
        "8 million secondary age children are out of school.",
        "Education money leaks between federal, state and local government.",
        "Matching grants sit unclaimed while classrooms go without.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He met Anambra ranked 26th of 36 states in WAEC.",
        "He left it ranked 1st in the country.",
        "He held that position for his last three years.",
        "He sent funding straight to schools and bypassed the ministry.",
        "He planned 4,000 model primary schools.",
        "He put ICT centres in schools.",
        "He returned schools to their mission owners.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will fund basic education directly.",
        "He will strengthen universities.",
        "He will expand technical and vocational training.",
        "He will give every family education.",
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
        "He left no debt.",
        "He owed no contractor, no supplier, no salary and no pension.",
        "He held the money in standard bonds and accounts at known public rates.",
        "He left handover notes open for anyone to verify.",
        "He refused to build a ₦500 million presidential lodge.",
        "He gave up his own lodge for the visit and stayed in a hotel.",
        "He started sub sovereign wealth savings, the first state in Nigeria to do it.",
        "He mapped the state from the air to plan roads and programmes.",
        "He brought major private investment into Anambra.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will move Nigeria from consumption to production.",
        "He will produce more of what we consume.",
        "He will process more of what we produce.",
        "He will prioritise agriculture, manufacturing, technology, construction, energy and the creative industries.",
        "He will cut the cost of governance.",
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
        "He supplied over 500 vehicles to the police and the military.",
        "He funded and coordinated security without commanding a single officer.",
        "He kept Anambra among the safer states in the federation.",
        "He held local government elections.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will improve intelligence sharing between the agencies.",
        "He will strengthen policing and border management.",
        "He will use technology to detect threats early.",
        "He will build lawful community security systems.",
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
        "Nobody is contractually responsible for maintenance after handover.",
        "The same roads are re-awarded, re-funded and rebuilt again.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He built over 800 kilometres of roads.",
        "He made contractors sign maintenance bonds.",
        "He held them to five to seven years of maintenance after completion.",
        "He created the Anambra Road Maintenance Agency.",
        "He built new government secretariats.",
        "He built a Three Arms Zone for the executive, legislature and judiciary.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will treat construction as a priority production sector.",
        "He will put maintenance bonds on federal road contracts.",
        "He will fund maintenance as a standing duty, not a fresh contract.",
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
        "Political disputes are settled by money and force, not by institutions.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He was impeached in November 2006.",
        "He went to court and won his mandate back in February 2007.",
        "He was the first Anambra governor to reclaim his seat through the courts.",
        "He won the ruling that fixed how a governor's four year term is counted.",
        "That ruling changed the position for governors nationwide.",
        "He was the first governor re-elected in Anambra's history.",
        "He sent school money around his own ministry to stop the leakage.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will cut the cost of governance.",
        "He will govern on issues, not on ethnicity or religion.",
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
        "He brought Innoson Motors, a Nigerian vehicle manufacturer, to Anambra.",
        "He kept the books clean, which is why they came.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will back Nigerian manufacturers.",
        "He will prioritise agriculture, manufacturing, technology, construction, energy and the creative industries.",
        "He will process more of what Nigeria produces at home.",
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
        "Social spending is treated as what is left over, not as the foundation.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He funded child welfare and rehabilitation homes.",
        "He got children off the street and into care.",
        "He funded stroke and trauma rehabilitation.",
        "He spent on health and education together as one plan.",
        "He did it while still putting money into savings.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will give every family health insurance and education.",
        "He will put spending into the services that reach ordinary Nigerians.",
        "He will cut the cost of governance and move the savings into people.",
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
