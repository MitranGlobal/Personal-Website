/**
 * Single source of truth for every piece of copy on the site.
 * Edit here — no component holds hard-coded content.
 */

export const site = {
  name: 'Vidyashankar Guru',
  role: 'TEDx Speaker · Author · Teen Performance Coach',
  title: 'Co-Founder & Chief Vision Officer, MiTran Global',
  tagline: 'Every child has the right to feel #positive',

  urls: {
    mitran: 'https://www.mitranglobal.com',
    calendly: 'https://calendly.com/mitranglobal/consultation',
    freeTraining: 'https://www.mitranglobal.com/free-training',
    positivityScore: 'https://www.mitranglobal.com/positivity-score',
    mediaKit: '/media-kit.pdf',
  },

  contact: {
    email: 'connect@mitranglobal.com',
    phone: '+91 00000 00000',
    office: 'MiTran Global · India',
  },

  social: [
    { label: 'YouTube', href: 'https://youtube.com/@mitranglobal', handle: '@mitranglobal' },
    { label: 'Instagram', href: 'https://instagram.com/vidyashankarguru', handle: '@vidyashankarguru' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vidyashankarguru', handle: '/in/vidyashankarguru' },
    { label: 'Facebook', href: 'https://facebook.com/mitranglobal', handle: '/mitranglobal' },
    { label: 'X', href: 'https://x.com/vidyashankaru', handle: '@vidyashankaru' },
    { label: 'Spotify', href: 'https://open.spotify.com', handle: 'The MiTran Podcast' },
  ],

  nav: [
    {
      label: 'About',
      href: '/about',
      children: [
        { label: 'The Story', href: '/about' },
        { label: 'Awards & Recognition', href: '/about#awards' },
        { label: 'Press & Media Kit', href: '/about#media' },
      ],
    },
    {
      label: 'Programs',
      href: '/programs',
      children: [
        { label: 'Teen Performance System', href: '/programs#system' },
        { label: 'Platinum Program', href: '/programs#platinum' },
        { label: 'Positivity Score', href: '/programs#score' },
        { label: 'For Schools', href: '/programs#schools' },
      ],
    },
    {
      label: 'Books',
      href: '/books',
      children: [
        { label: 'All Books', href: '/books' },
        { label: 'Free Chapter', href: '/books#free' },
      ],
    },
    {
      label: 'Speaking',
      href: '/speaking',
      children: [
        { label: 'Book Vidyashankar', href: '/speaking' },
        { label: 'Keynote Topics', href: '/speaking#topics' },
        { label: 'Past Stages', href: '/speaking#stages' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ],

  hero: {
    eyebrow: 'MiTran Global',
    line1: 'Vidyashankar',
    line2: 'Guru',
    kicker: 'Fix the root. Everything else follows.',
    blurb:
      'Twenty years inside the minds of teenagers. Hundreds of families across India, forty-plus nationalities, and one finding that never changed — marks, focus and confidence are symptoms. The mind underneath is the cause. Train that, and the rest takes care of itself.',
    primaryCta: { label: 'Watch the free training', href: '/programs#training' },
    secondaryCta: { label: 'Read the story', href: '/about' },
  },

  credentials: [
    'TEDx Speaker',
    'Author of five books',
    'NLP Practitioner',
    'Teen Psychology',
    '40+ nationalities coached',
    'Lifetime Achievement Award',
  ],

  stats: [
    { value: 20, suffix: '+', label: 'Years coaching teenagers' },
    { value: 40, suffix: '+', label: 'Nationalities worked with' },
    { value: 5, suffix: '', label: 'Books on teen performance' },
    { value: 90, suffix: '', label: 'Days to rebuild the root' },
  ],

  about: {
    heading: 'A parent who felt something was off, and decided not to wait.',
    body: [
      'Vidyashankar Guru is the Co-Founder and Chief Vision Officer of MiTran Global, a TEDx speaker, and the author of five books on performance, parenting and self-belief.',
      'For two decades he has sat across from parents watching a bright child shrink — the one who stops trying before the attempt, who studies in last-minute panic, who disappears into a room and answers in single words. Every one of those parents had already tried the obvious things. Tuition. Timetables. Counselling. Talks.',
      'His work starts one level below all of that. Not the leaves — the root. A mind that was never trained to hold pressure and failure from the inside. Once that single capability is built, marks improve, focus returns and confidence comes back on its own, without anyone pushing.',
    ],
    signature: 'Vidyashankar Guru',
  },

  tiles: [
    {
      title: 'Coaching',
      note: 'The 90-day Teen Performance System',
      href: '/programs#system',
    },
    {
      title: 'Speaking',
      note: 'Keynotes for schools, corporates and conferences',
      href: '/speaking',
    },
    {
      title: 'Books',
      note: 'Five titles on performance and parenting',
      href: '/books',
    },
    {
      title: 'Positivity Score',
      note: 'Assess wellbeing across ten vital areas',
      href: '/programs#score',
    },
  ],

  system: {
    heading: 'The MiTran Teen Performance System',
    lead: 'A 90-day, one-to-one coaching programme built on four pillars. Not a timetable — a mindset.',
    pillars: [
      {
        title: 'Calm under pressure & focus reset',
        body: 'Rebuild the response to stress, exams and failure so the mind stops flooding at the moment it is needed most.',
      },
      {
        title: 'Confidence & self-discipline',
        body: 'Replace borrowed motivation with an internal standard the teenager holds themselves to, on the days nobody is watching.',
      },
      {
        title: 'Study performance & life skills',
        body: 'Ownership of time, priorities and follow-through — the skills school assumes are already there and never teaches.',
      },
      {
        title: 'Guided implementation & personal coaching',
        body: 'Weekly one-to-one work with a coach, plus a parallel track for parents, so the change holds after the ninety days end.',
      },
    ],
    roadmap: 'The MiTran Roadmap · 24 steps to mind transformation and performance mastery',
  },

  positivity: {
    heading: 'The Positivity Score',
    lead: 'A structured assessment of a young person\u2019s wellbeing across ten vital areas — clear enough for a parent to read, specific enough to act on.',
    areas: [
      'Emotional Regulation',
      'Sense of Purpose',
      'Self-Awareness',
      'Healthy Lifestyle',
      'Adaptability',
      'Leadership',
      'Self-Management',
      'Resilience',
      'Interpersonal Skills',
      'Decision-Making',
    ],
    stat: {
      figure: '1 in 7',
      body: 'adolescents aged 10\u201319 lives with a mental health condition worldwide.',
      source: 'World Health Organization',
    },
  },

  books: [
    {
      title: 'One Untold Secret of Success',
      note: 'The single internal capability behind every turnaround he has seen.',
      href: '/books',
    },
    {
      title: 'Sweep Through Your Interviews',
      note: 'Preparation, presence and nerve for the moment that decides the offer.',
      href: '/books',
    },
    {
      title: 'Be a Champ',
      note: 'Building the champion\u2019s mindset in a young person, long before the trophy.',
      href: '/books',
    },
    {
      title: '101 Secrets of Effective Parenting',
      note: 'Practical shifts for parents raising teenagers under modern pressure.',
      href: '/books',
    },
  ],

  testimonials: [
    {
      quote:
        'We had tried three tuition centres and a counsellor. This was the first time anyone asked what was happening inside her head rather than on her report card.',
      author: 'Parent of a Grade 11 student',
      place: 'Bengaluru',
    },
    {
      quote:
        'By week six he was starting work before I said anything. I had stopped believing that would happen.',
      author: 'Parent of a Grade 9 student',
      place: 'Chennai',
    },
    {
      quote:
        'Our students came out of the sessions talking about pressure differently. Vidyashankar speaks to teenagers without ever speaking down to them.',
      author: 'School Principal',
      place: 'Hyderabad',
    },
    {
      quote:
        'I used to freeze in exams even when I knew the answers. That does not happen to me anymore.',
      author: 'Student, Grade 12',
      place: 'Mumbai',
    },
  ],

  awards: [
    {
      title: 'Indian Achievers Award for Industrial Excellence',
      body: 'Indian Economic Development & Research Association',
      year: '2011',
    },
    {
      title: 'Edupreneur of the Year',
      body: 'Times Group',
      year: '2012',
    },
    {
      title: 'Lifetime Achievement Award',
      body: 'Global Education Conclave',
      year: '—',
    },
  ],

  speaking: {
    heading: 'Bring Vidyashankar to your stage',
    lead: 'Keynotes and workshops for schools, parent bodies, conferences and corporate leadership teams — delivered in English, and shaped for the room rather than read from a deck.',
    topics: [
      'Why your child\u2019s problem is never the problem you can see',
      'Raising a teenager who can hold pressure',
      'The performance mindset: from marks to ownership',
      'Building resilience before the stakes get high',
    ],
    cta: { label: 'Enquire about a date', href: '/contact' },
  },

  training: {
    heading: 'Start with the free training',
    body: 'A walk through exactly what is happening inside your child\u2019s mind, and what changes in the first ninety days. No cost. If it makes sense, book a call with the team afterwards.',
    cta: { label: 'Watch the free training', href: '/programs#training' },
    secondary: { label: 'Book a consultation', href: '/contact' },
  },

  newsletter: {
    heading: 'One idea for parents, every week',
    body: 'Short, practical notes on what actually moves a teenager. No pitch, no filler.',
    cta: 'Subscribe',
  },

  press: [
    'TEDx',
    'Times Group',
    'Global Education Conclave',
    'Indian Achievers Award',
    'MiTran Global',
    'Positivity Hub',
  ],

  footer: {
    columns: [
      {
        heading: 'Work with me',
        links: [
          { label: 'Teen Performance System', href: '/programs#system' },
          { label: 'Platinum Program', href: '/programs#platinum' },
          { label: 'Positivity Score', href: '/programs#score' },
          { label: 'For Schools', href: '/programs#schools' },
        ],
      },
      {
        heading: 'About',
        links: [
          { label: 'The Story', href: '/about' },
          { label: 'Awards', href: '/about#awards' },
          { label: 'Speaking', href: '/speaking' },
          { label: 'Media Kit', href: '/about#media' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Free Training', href: '/programs#training' },
          { label: 'Books', href: '/books' },
          { label: 'Newsletter', href: '/#newsletter' },
          { label: 'MiTran Global', href: 'https://www.mitranglobal.com' },
        ],
      },
      {
        heading: 'Support',
        links: [
          { label: 'Contact', href: '/contact' },
          { label: 'Book a Consultation', href: '/contact' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ],
      },
    ],
  },
} as const;

export type Site = typeof site;
