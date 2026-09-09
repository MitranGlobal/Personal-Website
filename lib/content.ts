/* ---------------------------------------------------------------------------
   All copy and data for the site lives here so you can edit words without
   touching layout. Anything marked TODO is a placeholder I could not verify —
   swap those before you go live.
--------------------------------------------------------------------------- */

export const site = {
  name: 'Vidyashankar Guru',
  shortName: 'Vidyashankar',
  domain: 'vidyashankarguru.com',
  url: 'https://vidyashankarguru.com',
  role: 'Master Trainer in NLP · Speaker · Founder of MiTran Global',
  description:
    'Vidyashankar Guru has spent twenty years teaching people how their own minds work — 250,000 of them, across 40 nationalities. Keynotes, NLP certification, private coaching, and teen transformation through MiTran Global.',
  city: 'Chennai, India',
  email: 'hello@vidyashankarguru.com', // TODO: confirm
  phone: '+91 00000 00000', // TODO: confirm
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/vidyashankarguru/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vidyashankarguru' }, // TODO: confirm
    { label: 'YouTube', href: 'https://www.youtube.com/@vidyashankarguru' }, // TODO: confirm
    { label: 'MiTran Global', href: 'https://www.mitranglobal.com' },
  ],
};

export const nav = [
  { label: 'The work', href: '/#work' },
  { label: 'Programmes', href: '/#programmes' },
  { label: 'The book', href: '/#book' },
  { label: 'On stage', href: '/speaking' },
  { label: 'Write to me', href: '/#contact' },
];

/* Hero -------------------------------------------------------------------- */

export const hero = {
  lines: ['Vidyashankar', 'Guru'],
  statement: 'I teach people how their own mind works.',
  standfirst:
    'Twenty years on the floor. 250,000 people, 40 nationalities, one question that never changes — why do we know exactly what to do and still not do it?',
  primary: { label: 'Bring me to your stage', href: '/speaking' },
  secondary: { label: 'See how I work', href: '/#work' },
};

/* Running credential band ------------------------------------------------- */

export const credentials = [
  'Master Trainer in NLP',
  'TEDx speaker',
  '250,000 people trained',
  '40 nationalities',
  'Best-selling author',
  'Founder, MiTran Global',
  'Chennai, India',
];

/* About ------------------------------------------------------------------- */

export const about = {
  heading: 'I did not set out to be a trainer.',
  body: [
    'I set out to understand why I kept getting in my own way. That question took me into neuro-linguistic programming, then into psychology, then into twenty years of rooms — boardrooms in the Gulf, school halls in Tamil Nadu, a TEDx stage, and by now a few thousand living rooms over video.',
    'The rooms change. The question almost never does. Someone in front of me knows exactly what they should be doing and cannot make themselves do it.',
    'So I teach the mechanism underneath that. Not motivation — motivation is spent by Wednesday. The wiring: how a belief gets installed, how your state decides your behaviour before you have finished thinking, how a pattern you picked up at nine years old is still running the meeting you are sitting in at forty.',
    'Somewhere in that work I started noticing the same wiring being laid down in teenagers, live, and mostly by accident. Nobody was teaching them what was happening inside their own heads. That became MiTran Global.',
  ],
  pullQuote:
    'A pattern you learned at nine is still running the meeting you are in at forty.',
  signature: 'Vidya',
};

/* Numbers ----------------------------------------------------------------- */

export const numbers = [
  { value: 250000, suffix: '+', label: 'people trained', note: 'since 2005' },
  { value: 40, suffix: '', label: 'nationalities', note: 'in the room' },
  { value: 20, suffix: '+', label: 'years', note: 'of practice' },
  { value: 2242, suffix: '', label: 'students assessed', note: 'through MiTran' },
];

/* The four ways in -------------------------------------------------------- */

export const gateways = [
  {
    title: 'Speaking',
    line: 'A keynote your people are still quoting on Monday.',
    href: '/speaking',
    cta: 'Check my dates',
  },
  {
    title: 'Coaching',
    line: 'Twelve weeks, just the two of us, on the thing you keep circling.',
    href: '/#programmes',
    cta: 'See the format',
  },
  {
    title: 'NLP training',
    line: 'Practitioner and Master Practitioner. Learn the method properly.',
    href: '/#programmes',
    cta: 'Next intake',
  },
  {
    title: 'For your teenager',
    line: 'MiTran Global — ninety days of work with a 13 to 19 year old.',
    href: 'https://www.mitranglobal.com',
    cta: 'Go to MiTran',
    external: true,
  },
];

/* Programmes -------------------------------------------------------------- */

export const programmes = [
  {
    id: 'keynote',
    kicker: 'For organisations',
    title: 'Keynotes and corporate workshops',
    duration: '60 minutes to three days',
    audience: 'Leadership teams, sales floors, L&D programmes',
    body: 'I build the session around what your people are actually stuck on, not around my slide deck. Mindset, performance under pressure, influence and language, behavioural change that survives contact with the quarter.',
    details: [
      'Discovery call with your L&D or HR lead before anything is written',
      'Delivered in English or Tamil',
      'On site anywhere in India and the GCC, or virtual',
      'Workbook and a 30-day follow-through for every attendee',
    ],
    cta: { label: 'Ask about a date', href: '/speaking' },
  },
  {
    id: 'nlp',
    kicker: 'For practitioners',
    title: 'NLP Practitioner and Master Practitioner',
    duration: 'Certification intensives',
    audience: 'Coaches, trainers, therapists, HR professionals',
    body: 'The full method, taught the way I was taught it — live, with real demonstrations and real client work, not a video library. You leave able to run the patterns on someone else and have them hold.',
    details: [
      'Live cohort, capped so everyone gets floor time',
      'Practitioner runs in modules; Master Practitioner by invitation after',
      'Supervised practice sessions between modules',
      'Internationally recognised certification',
    ],
    cta: { label: 'Join the next intake', href: '/#contact' },
  },
  {
    id: 'coaching',
    kicker: 'One to one',
    title: 'Private coaching',
    duration: 'Twelve weeks',
    audience: 'Founders, senior professionals, people mid-decision',
    body: 'Fortnightly sessions with me, and a line to me in between. We pick one thing — the business, the pattern, the decision you keep deferring — and we work it until it moves. I take a small number of these at a time.',
    details: [
      'A ninety-minute mapping session to start',
      'Six sessions across twelve weeks',
      'WhatsApp access between sessions',
      'Application and a fit call before we begin',
    ],
    cta: { label: 'Apply for a place', href: '/#contact' },
  },
  {
    id: 'platinum',
    kicker: 'Through MiTran Global',
    title: 'The Platinum Programme',
    duration: '90 days · 24 live sessions',
    audience: 'Students aged 13 to 19, with their parents alongside',
    body: 'Built for the teenager who has gone quiet, or lost their focus, or is carrying more than they will say. Twenty-four one-to-one sessions with a trained transformation coach, grounded in psychology, NLP and accelerated learning, with the parent kept in the loop the whole way.',
    details: [
      'Begins with the Positivity Score across ten areas of wellbeing',
      'One-to-one and live — never pre-recorded',
      'Parent briefing at every milestone',
      'A written report the family keeps',
    ],
    cta: { label: 'Read about it at MiTran', href: 'https://www.mitranglobal.com', external: true },
  },
];

/* The book ---------------------------------------------------------------- */

export const book = {
  // TODO: replace with the real title, subtitle, cover image and buy link.
  title: 'Your Book Title',
  subtitle: 'Best-selling author',
  blurb:
    'The method, on paper. Written for the reader who has had enough of being told to want it more, and would like to know how the mechanism actually works.',
  quote:
    'Most people do not need more discipline. They need to stop running a programme they never chose.',
  buy: { label: 'Get a copy', href: '#' },
  cover: '/media/book-cover.jpg',
};

/* Voices ------------------------------------------------------------------ */
// TODO: replace with real, permissioned testimonials. Named attribution with a
// photograph converts far better than anonymised roles.

export const voices = [
  {
    quote:
      'He spent forty minutes with our sales leads before he wrote a word of the keynote. That showed. People were quoting it back to each other in stand-up a fortnight later.',
    who: 'Head of Learning & Development',
    org: 'Financial services group, Chennai',
  },
  {
    quote:
      'I have sat through a lot of NLP training. This was the first where I left able to actually run the patterns on a client rather than describe them.',
    who: 'Executive coach',
    org: 'Bengaluru',
  },
  {
    quote:
      'My son stopped talking to us somewhere in class ten. Ninety days in, he came and sat with us at dinner without being called. That is the whole review.',
    who: 'Parent',
    org: 'MiTran Platinum Programme',
  },
];

/* Stage gallery ----------------------------------------------------------- */

export const stage = [
  { src: '/media/stage-01.jpg', caption: 'TEDx', place: 'Chennai' },
  { src: '/media/stage-02.jpg', caption: 'Leadership offsite', place: 'Dubai' },
  { src: '/media/stage-03.jpg', caption: 'NLP Practitioner, module two', place: 'Chennai' },
  { src: '/media/stage-04.jpg', caption: 'School assembly', place: 'Coimbatore' },
  { src: '/media/stage-05.jpg', caption: 'Sales conference keynote', place: 'Bengaluru' },
  { src: '/media/stage-06.jpg', caption: 'Parent workshop', place: 'Online' },
];

/* Newsletter -------------------------------------------------------------- */

export const letter = {
  title: 'The Monday Mind Note',
  body: 'One idea about how the mind works, and one thing to try with it. Every Monday morning. Short enough to read before your first meeting.',
  cta: 'Send it to me',
  reassurance: 'No pitch decks. Leave whenever you like.',
};

/* Speaking page ----------------------------------------------------------- */

export const speaking = {
  heading: 'Bring me to your stage',
  standfirst:
    'I do somewhere between thirty and forty engagements a year and I book two to three quarters ahead. Tell me who is in the room and what you need them to walk out doing.',
  formats: [
    {
      title: 'Keynote',
      length: '45 to 90 minutes',
      body: 'One idea, carried the whole way, with the room doing something rather than watching. Conferences, annual meets, leadership summits.',
    },
    {
      title: 'Half-day workshop',
      length: '3 to 4 hours',
      body: 'The keynote plus the practice. Small enough that everyone gets to run the thing themselves at least twice.',
    },
    {
      title: 'Intensive',
      length: '2 to 3 days',
      body: 'Full behavioural work with a leadership group or a sales organisation, with follow-through built in.',
    },
  ],
  topics: [
    'Performance under pressure — what actually happens to a good decision-maker at 2 a.m.',
    'The language of influence — how the words you choose install a belief',
    'Rewiring a stuck pattern — behavioural change that outlives the offsite',
    'Raising a teenager you can still talk to — for parent audiences and school communities',
    'The mind of a high performer — for sales and leadership floors',
  ],
  logistics: [
    ['Travel', 'Anywhere in India and the GCC. Elsewhere with enough notice.'],
    ['Languages', 'English and Tamil.'],
    ['Lead time', 'Two to three quarters, typically.'],
    ['Included', 'Pre-event discovery call, attendee workbook, 30-day follow-through.'],
  ],
};

/* Contact ----------------------------------------------------------------- */

export const contact = {
  heading: 'Write to me',
  body: 'Enquiries about speaking, training, coaching or a programme for your teenager all land in the same inbox. A person reads them. You will hear back within two working days.',
  subjects: [
    'Speaking or a corporate workshop',
    'NLP certification',
    'Private coaching',
    'A programme for my teenager',
    'Something else',
  ],
};
