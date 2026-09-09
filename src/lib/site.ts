/**
 * All copy lives here. Written in first person on purpose — this is a person's
 * site, not an organisation's. Keep the voice plain and specific when editing.
 */

export const site = {
  name: 'Vidyashankar Guru',
  role: 'I coach teenagers. And their parents, usually.',
  org: 'MiTran Global',
  since: 2005,

  urls: {
    mitran: 'https://www.mitranglobal.com',
    calendly: 'https://calendly.com/mitranglobal/consultation',
    freeTraining: 'https://www.mitranglobal.com/free-training',
    positivityScore: 'https://www.mitranglobal.com/positivity-score',
    mediaKit: '/media-kit.pdf',
  },

  contact: {
    email: 'connect@mitranglobal.com',
    office: 'MiTran Global, India',
  },

  social: [
    { label: 'YouTube', href: 'https://youtube.com/@mitranglobal' },
    { label: 'Instagram', href: 'https://instagram.com/vidyashankarguru' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vidyashankarguru' },
    { label: 'Facebook', href: 'https://facebook.com/mitranglobal' },
  ],

  nav: [
    { label: 'About me', href: '/about' },
    { label: 'The 90 days', href: '/programs' },
    { label: 'Books', href: '/books' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Get in touch', href: '/contact' },
  ],

  hero: {
    margin: 'Working with teenagers since 2005',
    headline: 'I work with teenagers who have stopped trying.',
    standfirst: 'And with the parents who have been watching it happen.',
    body: [
      'Most of them have already tried tuition. Some have seen a counsellor. There was nothing wrong with any of that. It just was not aimed at the thing that had actually gone wrong.',
      'A teenager who panics before an exam they prepared for does not have a study problem. A teenager who cannot hold a timetable for more than three days does not have a scheduling problem. Something underneath was never built. That is the part I work on.',
    ],
    primary: { label: 'Watch the free training', href: '/programs#training' },
    secondary: { label: 'Or read how the 90 days work', href: '/programs' },
    caption: 'Gold silk, woven live in your browser.',
  },

  /** The complaints parents actually arrive with, in their words. */
  voices: [
    'He was fine until Class 9. I do not know what happened.',
    'She knows the answers. She just freezes in the exam hall.',
    'Every timetable we make lasts three days.',
    'He has stopped telling me anything.',
    'I can see she wants to do better. Something stops her.',
    'We have tried everything. I am running out of ideas.',
  ],
  voicesNote:
    'I have heard each of these in the last month. Not variations of them. These sentences, more or less exactly.',

  about: {
    headline: 'I did not come to this from psychology. I came to it as a parent.',
    body: [
      'I am Vidyashankar Guru. I co-founded MiTran Global and I am its Chief Vision Officer, which is a grander title than the work deserves. Most weeks I am on a call with a sixteen-year-old who does not especially want to be on it yet.',
      'Twenty years ago I noticed something in my own house that I could not explain and did not want to wait out. That turned into training, then into practice, then into a method. Since then I have worked with young people from around forty nationalities, spoken at TEDx, and written five books, mostly because parents kept asking the same questions and I ran out of time to answer them one at a time.',
      'What I have learned in all of it is unglamorous. Almost every teenager who is struggling is struggling for the same reason, and it is almost never the reason anyone is looking at.',
    ],
    marginalia: [
      'TEDx speaker',
      'Five books',
      'Certified NLP practitioner',
      'Around 40 nationalities',
      'Co-founder, MiTran Global',
    ],
    photoCaption: 'Bengaluru, last year. I talk with my hands.',
  },

  work: {
    headline: 'What the ninety days actually involve',
    standfirst:
      'One-to-one, weekly, with a parallel track for parents. Here is the honest shape of it, in order, because the order matters more than people expect.',
    phases: [
      {
        when: 'Weeks 1 to 3',
        title: 'Getting the panic down',
        body: 'Nothing can be taught to a mind that floods. We start by making exams, marks and failure survivable at the level of the body, before touching habits at all.',
      },
      {
        when: 'Weeks 4 to 6',
        title: 'Building a standard they own',
        body: 'This is where borrowed motivation gets replaced. The aim is a teenager who works on a day nobody asked, and does not need praise for it afterwards.',
      },
      {
        when: 'Weeks 7 to 10',
        title: 'Time, priorities, follow-through',
        body: 'Only now do we reach the practical things everyone wanted to start with. They stick at this point because there is finally something underneath to hold them.',
      },
      {
        when: 'Weeks 11 to 13',
        title: 'Handing it over',
        body: 'The programme is designed to end. The last stretch removes me and the parent from the loop, so what is left is a teenager running their own life.',
      },
    ],
    parentNote:
      'Parents get their own sessions throughout. Not because parents are the problem, but because the household usually has to change shape a little for any of this to hold.',
    roadmap: 'The full method runs to 24 steps. The four phases above are how they group.',
  },

  score: {
    headline: 'Before any of that, a straight look at where they are',
    body: 'The Positivity Score assesses ten areas of a young person\u2019s wellbeing. It takes about twenty minutes and gives you something concrete to look at instead of a feeling that something is off.',
    areas: [
      'Emotional regulation',
      'Sense of purpose',
      'Self-awareness',
      'Healthy lifestyle',
      'Adaptability',
      'Leadership',
      'Self-management',
      'Resilience',
      'Interpersonal skills',
      'Decision-making',
    ],
    cta: { label: 'Take the assessment', href: '/programs#score' },
    stat: {
      figure: '1 in 7',
      body: 'adolescents between 10 and 19 is living with a mental health condition, worldwide.',
      source: 'World Health Organization',
    },
  },

  training: {
    headline: 'Start with the free training',
    body: 'Twenty-five minutes on what is actually happening in your child\u2019s head, and what changes first. It costs nothing and I do not ask for a card. If it makes sense afterwards, book a call.',
    primary: { label: 'Watch it now', href: '/programs#training' },
    secondary: { label: 'Book a call instead', href: '/contact' },
  },

  books: {
    headline: 'Five books',
    standfirst:
      'Each one started as a question I was answering too often in person. They are short on theory and long on what to do on a Tuesday evening.',
    items: [
      { title: 'One Untold Secret of Success', note: 'The single thing underneath every turnaround I have watched.' },
      { title: 'Sweep Through Your Interviews', note: 'For the twenty minutes that decide an offer, and the nerve it takes.' },
      { title: 'Be a Champ', note: 'Written for teenagers, not about them.' },
      { title: '101 Secrets of Effective Parenting', note: 'Small changes, tested on real households, mine included.' },
    ],
    fifthNote: 'Add the fifth title in src/lib/site.ts once you confirm which it is.',
  },

  letters: {
    headline: 'What parents write afterwards',
    items: [
      {
        text: 'We had been to three tuition centres and a counsellor. You were the first person who asked what was going on in her head instead of what was on her report card.',
        from: 'Mother of a Class 11 student, Bengaluru',
      },
      {
        text: 'By the sixth week he was starting work before I said anything. I had genuinely stopped believing that would happen in this house.',
        from: 'Father of a Class 9 student, Chennai',
      },
      {
        text: 'Our students came out talking about pressure differently. He speaks to teenagers without ever speaking down to them, which is rarer than it sounds.',
        from: 'Principal, Hyderabad',
      },
      {
        text: 'I used to freeze in exams even when I knew everything. That does not happen to me now.',
        from: 'Student, Class 12, Mumbai',
      },
    ],
  },

  speaking: {
    headline: 'If you want me on a stage',
    body: 'I speak at schools, parent bodies, conferences and the occasional corporate leadership day. I do not read from a deck, and I would rather talk about the room I am in than deliver a set piece.',
    topics: [
      'Why your child\u2019s problem is almost never the problem you can see',
      'Raising a teenager who can sit inside pressure',
      'From marks to ownership: what actually shifts performance',
      'Building resilience before the stakes get high',
    ],
    cta: { label: 'Ask about a date', href: '/contact' },
  },

  recognition: {
    headline: 'Recognition',
    note: 'Listed because people ask, not because it changed how the work is done.',
    items: [
      {
        year: '2011',
        title: 'Indian Achievers Award for Industrial Excellence',
        by: 'Indian Economic Development & Research Association',
      },
      { year: '2012', title: 'Edupreneur of the Year', by: 'Times Group' },
      { year: '', title: 'Lifetime Achievement Award', by: 'Global Education Conclave' },
    ],
  },

  newsletter: {
    headline: 'One note a week, for parents',
    body: 'Something short and usable every Sunday. No pitch in it. Unsubscribe whenever you like and I will not chase you.',
    cta: 'Send it to me',
  },

  footerNote:
    'Every child has the right to feel positive about themselves. That line has been on everything I have made for twenty years and I have not found a reason to change it.',
} as const;

export type Site = typeof site;
