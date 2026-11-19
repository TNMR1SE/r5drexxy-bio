/**
 * ─────────────────────────────────────────────────────────────
 *  THIS IS THE ONLY FILE YOU NEED TO EDIT.
 * ─────────────────────────────────────────────────────────────
 *
 *  Everything on the page comes from this file — your name, your
 *  interests, your links, your FAQ. Change the text, save, and the
 *  page updates. No other file needs to be touched.
 *
 *  How to edit:
 *   1. Change `const name` and `handle` below to your own.
 *   2. Replace the copy in each section with what you're about.
 *   3. Swap the social links for your real profiles.
 *   4. Add or delete items in any list (tags, hobbies, socials,
 *      quickInfo, faq) — the layout handles any number.
 *
 *  Formatting tip: wrap words in **double asterisks** to highlight
 *  them in the accent colour, like **this**.
 */

const name = "Your Name";
const handle = "yourhandle";

/* ── Colours / theme ───────────────────────────────────────────
   The palette lives in app/globals.css (the :root variables at the
   top). Change them there if you want a different look.            */

export interface Tag {
  label: string;
  /** Highlight this tag in the accent colour. */
  highlight?: boolean;
}

export interface Hobby {
  /** Short uppercase label, e.g. "CREATIVE", "TECHNOLOGY". */
  category: string;
  title: string;
  text: string;
}

export interface Social {
  /** Small uppercase label above the title, e.g. "VIDEO". */
  label: string;
  title: string;
  description: string;
  url: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Profile {
  name: string;
  handle: string;
  nav: { label: string; href: string }[];
  hero: { label: string; tagline: string };
  status: { show: boolean; label: string };
  bio: string;
  tags: Tag[];
  about: {
    heading: string;
    subheading: string;
    cardTitle: string;
    paragraphs: string[];
    embed: { title: string; label: string; paragraphs: string[] };
  };
  hobbies: { heading: string; subheading: string; items: Hobby[] };
  socials: { heading: string; subheading: string; items: Social[] };
  quickInfo: { heading: string; subheading: string; items: QuickFact[] };
  faq: { heading: string; subheading: string; items: FaqItem[] };
  quote: { text: string; author: string };
  footer: {
    line: string;
    timezone: { label: string; iana: string; abbreviation: string };
  };
}

export const profile: Profile = {
  name,
  handle,

  /* Links in the top nav. `href` must match a section id below. */
  nav: [
    { label: "About", href: "#about" },
    { label: "Hobbies", href: "#hobbies" },
    { label: "Socials", href: "#socials" },
    { label: "FAQ", href: "#faq" },
  ],

  /* Text inside the big banner at the top. */
  hero: {
    label: "Your Role • Your Timezone",
    tagline: "Your Role • Hobby • Passion • Skill",
  },

  /* The dot next to your name. Set show: false to hide it. */
  status: { show: true, label: "Online" },

  /* One line under your name. */
  bio: "A one-line description of what you do.",

  /* Pills under your name. Marks the first one as highlighted. */
  tags: [
    { label: "Your Role", highlight: true },
    { label: "Your Timezone" },
    { label: "Programming" },
    { label: "Gaming" },
    { label: "Music" },
    { label: "Photography" },
    { label: "Travel" },
    { label: "Movies" },
  ],

  about: {
    heading: `Who is ${name}?`,
    subheading: `A little more about ${name}.`,
    cardTitle: "The Short Version",
    paragraphs: [
      `**I'm ${name}.** I build things on the internet, play a lot of games, and spend too much of my free time listening to music and learning something new.`,
      "Most of what I know I taught myself. **Programming** started as a hobby and turned into the thing I do most days — building small projects, breaking them, and fixing them again.",
      "Outside of that I'm into **music, photography, and travel**. If something looks interesting, I'll usually try it at least once.",
      "This page collects the basics: what I'm into, where to find me, and the answers to the things people ask most.",
    ],
    embed: {
      title: `A Few Things About ${name}`,
      label: "Profile",
      paragraphs: [
        "The fast version: I like building things, gaming, music, and learning new skills.",
        "**Programming** is the main one — mostly web stuff, with a bit of gamedev on the side.",
        "When I'm not at a screen I'm probably out taking photos or planning the next trip.",
        "That's about it. **Say hi** if any of that sounds like you.",
      ],
    },
  },

  hobbies: {
    heading: "Hobbies & Interests",
    subheading: "Some of the things I enjoy.",
    items: [
      {
        category: "CREATIVE",
        title: "Music",
        text: "Always got something playing. I like finding new artists and slowly building a playlist for every mood.",
      },
      {
        category: "TECHNOLOGY",
        title: "Programming",
        text: "Building small projects and learning by breaking things. Mostly web, occasionally gamedev.",
      },
      {
        category: "GAMING",
        title: "Gaming",
        text: "A long-time hobby. I play a bit of everything, but I keep coming back to the games I grew up with.",
      },
      {
        category: "OFFLINE",
        title: "Photography",
        text: "I like capturing places and small details. Nothing professional — just whatever looks good in the moment.",
      },
    ],
  },

  socials: {
    heading: "Find Me",
    subheading: "Follow me and keep up with what I'm doing.",
    items: [
      {
        label: "Video",
        title: "YouTube",
        description: "Videos, projects, and whatever else I feel like uploading.",
        url: "https://youtube.com/@yourhandle",
      },
      {
        label: "Short Form",
        title: "TikTok",
        description: "Short clips and the occasional random post.",
        url: "https://tiktok.com/@yourhandle",
      },
      {
        label: "Code",
        title: "GitHub",
        description: "Repositories, side projects, and things I'm experimenting with.",
        url: "https://github.com/yourhandle",
      },
      {
        label: "Photos",
        title: "Instagram",
        description: "Photos, travels, and the occasional update.",
        url: "https://instagram.com/yourhandle",
      },
    ],
  },

  quickInfo: {
    heading: "Quick Info",
    subheading: "A few quick facts.",
    items: [
      { label: "Role", value: "Your Role" },
      { label: "Based In", value: "Your City" },
      { label: "Main Interest", value: "Programming" },
      { label: "Currently Learning", value: "Something New" },
      { label: "Favorite Game", value: "Your Favorite" },
      { label: "Timezone", value: "Your Timezone" },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Questions people may have.",
    items: [
      {
        question: "Can I DM you?",
        answer:
          "Yes, my DMs are open. I can't promise a reply to everything, but if it's a real question or something worth talking about, I'll do my best to get back to you.",
      },
      {
        question: "Can I add you?",
        answer:
          "If we've talked before or we're in the same circles, sure. I don't usually accept random requests, but I'm always up for meeting people through the things I'm into.",
      },
      {
        question: "What do you actually do?",
        answer:
          "Mostly programming and building things for fun. Outside of that: gaming, music, photography, and whatever else has my attention that month.",
      },
      {
        question: "What are you learning right now?",
        answer:
          "Whatever the current project needs. I like picking something up, using it in a real build, and seeing how far I get before something breaks.",
      },
      {
        question: "Do you take requests or commissions?",
        answer:
          "Not at the moment. If that changes I'll mention it here and on my socials.",
      },
      {
        question: "Where can I find you online?",
        answer:
          "All my profiles are linked in the socials section of this page. That's the best place to keep up with what I'm doing.",
      },
    ],
  },

  quote: {
    text: "Make things. Learn constantly.",
    author: name,
  },

  footer: {
    line: `${name} • Your Role`,
    /* Shows a live clock. Use any IANA timezone, e.g.
       "Europe/London", "America/New_York", "Asia/Kolkata", "UTC". */
    timezone: {
      label: "Your Time",
      iana: "UTC",
      abbreviation: "UTC",
    },
  },
};

export default profile;
