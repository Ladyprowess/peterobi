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
    tagline: "He met a state with no accredited hospital and left it polio free.",
    intro:
      "Nigeria's hospitals are breaking down. Peter Obi has already rebuilt a state health system from nothing, on a state budget, in eight years.",
    stats: [
      { value: "12+", from: "0", label: "Accredited health institutions" },
      { value: "5 yrs", label: "Polio free, consecutively" },
      { value: "₦120m", label: "Immunisation award won" },
      { value: "70+", label: "Ambulances donated to mission hospitals" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "85 percent of primary health centres lack doctors, nurses, clean water or working laboratories.",
        "Over 50,000 Nigerian trained doctors now practise abroad.",
        "There is roughly one doctor for every 2,500 Nigerians.",
        "Doctors go on strike again every time government breaks a deal it signed with them.",
        "Nigeria promised to spend 15 percent of its budget on health. It spends about 4 percent.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He met a state with no accredited health institution.",
        "Twelve were accredited by the time he left, two of them hospitals.",
        "He built the Anambra State University Teaching Hospital.",
        "It opened with modern laboratories, consulting clinics and vaccine cold storage.",
        "He built a kidney dialysis centre and paid most of the cost of treatment.",
        "He funded the ₦10 billion Julie Pharmacy complex.",
        "He upgraded Onitsha General Hospital and the School of Health Technology.",
        "He gave over 70 ambulances to mission and charity hospitals.",
        "Polio disappeared from Anambra and stayed gone for five straight years.",
        "That record won the state a ₦120 million immunisation award.",
        "He brought heart surgery to St Joseph's Hospital, Adazi Nnukwu.",
        "He funded stroke and trauma rehabilitation, which almost no state pays for.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will give every family health insurance.",
        "He will improve care for mothers and babies.",
        "He will make essential medicines easier to get.",
        "He will pay and equip health workers well enough to keep them in Nigeria.",
        "He will fix primary health centres first, so small illnesses stop filling the hospitals.",
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
      "Anambra's schools went from near the bottom of the country to the top in eight years. Even his critics accept this one.",
    stats: [
      { value: "1st", from: "26th", label: "National WAEC ranking" },
      { value: "4,000", label: "Model primary schools planned" },
      { value: "8 yrs", label: "To go from 26th to 1st" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "10 million primary age children are out of school.",
        "Another 8 million secondary age children are out as well.",
        "Money for schools leaks away between federal, state and local government.",
        "States that cannot pay their share leave federal grants unclaimed.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He met Anambra ranked 26th of 36 states in WAEC.",
        "He left it ranked first in the country.",
        "It stayed first for his last three years in office.",
        "He sent the money straight to the schools instead of through the ministry.",
        "That one change is why the results moved.",
        "He planned 4,000 model primary schools.",
        "He put computer centres in classrooms.",
        "He handed schools back to the missions that founded them.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will send money straight to schools, the way he did in Anambra.",
        "He will rebuild primary schools first.",
        "He will strengthen the universities.",
        "He will expand technical and trade training so school leads to work.",
      ],
    },
  },

  {
    slug: "economy",
    name: "Economy and money",
    concern: "Jobs, prices, and how government spends",
    icon: "economy",
    image: "/images/economy.jpg",
    tagline: "He left office with money in the bank and no debt.",
    intro:
      "Peter Obi ran Anambra like a business meant to outlive him. He saved, he refused to borrow recklessly, and he left money behind.",
    stats: [
      { value: "$150m", label: "Left in state savings in 2014" },
      { value: "₦36bn", label: "Also left in state savings" },
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
        "He mapped the state from the air to decide where roads and clinics should go.",
        "SABMiller and Innoson Motors both built their plants in the state.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will move Nigeria from buying to making.",
        "He will make more of what we buy and process more of what we grow.",
        "He will put agriculture, manufacturing, technology, construction, energy and the creative industries first.",
        "He will cut what government spends on itself.",
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
        "Communities defend themselves with no law to back them.",
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
        "He will make the security agencies share what they know.",
        "He will strengthen the police and tighten the borders.",
        "He will use technology to spot threats early.",
        "He will give community security groups a legal footing.",
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
        "That bond made them repair the road for five to seven years after building it.",
        "He created the Anambra Road Maintenance Agency to own the job.",
        "He built new government secretariats.",
        "He built a Three Arms Zone to put the executive, legislature and judiciary in one place.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will treat construction as a priority industry.",
        "He will put maintenance bonds on federal road contracts.",
        "He will pay for repairs every year instead of rebuilding the same road.",
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
      "Everything here happened in public and sits on the court record.",
    stats: [
      { value: "1st", label: "Anambra governor to reclaim his mandate in court" },
      { value: "1st", label: "Governor re-elected for a second term in Anambra history" },
    ],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Public officials leave office richer than the people who employ them.",
        "Money and force settle political disputes, not the courts.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "They impeached him in November 2006.",
        "He went to court and won his seat back in February 2007.",
        "No Anambra governor had ever taken his mandate back that way.",
        "He won the case that fixed how a governor's four year term is counted.",
        "That ruling changed the rule for governors across the country.",
        "He became the first governor Anambra ever re-elected.",
        "He sent school money past his own ministry so less of it went missing.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will cut what government spends on itself.",
        "He will campaign on issues, not on tribe or religion.",
        "He will meet Nigerians himself instead of sending proxies.",
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
      "Clean books are not an accounting detail. They are why serious manufacturers were willing to build in Anambra.",
    stats: [
      { value: "2", label: "Plants attracted, SABMiller and Innoson" },
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
        "They came because the state paid its bills and carried little debt.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will back Nigerian manufacturers.",
        "He will put agriculture, manufacturing, technology, construction, energy and the creative industries first.",
        "He will have more of what Nigeria grows and mines processed at home.",
      ],
    },
  },

  {
    slug: "welfare",
    name: "Social welfare",
    concern: "Children, and the low class-citizen",
    icon: "welfare",
    image: "/images/welfare.jpg",
    tagline: "He spent on people and still saved money.",
    intro:
      "Anyone who says caring for people means reckless borrowing should look at Anambra. Obi did both at once.",
    stats: [],
    now: {
      headline: "Where Nigeria stands today",
      points: [
        "Children live on the streets of every major Nigerian city.",
        "Spending on people is treated as whatever is left over.",
      ],
    },
    record: {
      headline: "What he did in Anambra",
      points: [
        "He funded child welfare and rehabilitation homes.",
        "Children came off the street and into care.",
        "He funded stroke and trauma rehabilitation, which almost no state pays for.",
        "He funded health and education together as one plan.",
        "He paid for all of it while the state savings still grew.",
      ],
    },
    plan: {
      headline: "What he will do as president",
      points: [
        "He will give every family health insurance and schooling.",
        "He will spend on the services ordinary Nigerians actually use.",
        "He will move the money saved from cheaper government into people.",
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
