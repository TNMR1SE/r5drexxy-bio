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

const name = "r5Drexxy";
const handle = "r5drexxy";

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
  /** Optional — remove the quickInfo object below to hide this section. */
  quickInfo?: { heading: string; subheading: string; items: QuickFact[] };
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
    label: "Another Corrupt Founder • UTC",
    tagline: "Another Corrupt Founder • Game Developer",
  },

  /* The dot next to your name. Set show: false to hide it. */
  status: { show: true, label: "Online" },

  /* One line under your name. */
  bio: "Known As A Fast Ground Player In Gorilla Tag!",

  /* Pills under your name. Marks the first one as highlighted. */
  tags: [
    { label: "Another Corrupt Founder", highlight: true },
    { label: "UTC" },
    { label: "Programming" },
    { label: "Gaming" },
    { label: "Music" },
    { label: "Photography" },
    { label: "Friends" },
  ],

  about: {
    heading: `Who is ${name}?`,
    subheading: `A little more about ${name}.`,
    cardTitle: "Small Description",
    paragraphs: [
      `**I'm r5Drexxy.** I build things on the internet, play a lot of games, and spend my free time watching caseoh and learning something new.`,
      "Most of what I know I taught myself. **Gorilla Tag** started as a hobby and turned into the thing I do most days.",
      "Outside of that I'm into **music, and photography**. If something looks interesting, I'll usually try it at least once.",
      "This page collects the basics: what I'm into, where to find me, and the answers to the things people ask most.",
    ],
    embed: {
      title: `A Few Things About ${name}`,
      label: "Profile",
      paragraphs: [
        "The fast version: I like building things, gaming, music, and learning new skills.",
        "**Programming** is the main one — mostly gamedev, with a bit of web stuff on the side.",
        "When I'm not at a screen I'm probably hanging around with my friends and taking photos if something is good.",
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
        title: "painting",
        text: "i like painting space and painting planets, its just calm and it gets stuff off my mind.",
      },
      {
        category: "TECHNOLOGY",
        title: "Programming",
        text: "Building small projects and developing games",
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
      {
        category: "After Effects",
        title: "Editing",
        text: "I love to make edits of cars, movies, and games, i am somewhat skilled at it and i will continue to be making more!",
      },
    ],
  },

  socials: {
    heading: "Find Me",
    subheading: "These Are All Of My Socials.",
    items: [
      {
        label: "Video and short form",
        title: "YouTube",
        description: "Videos, projects, and whatever else I feel like uploading.",
        url: "https://youtube.com/@r5drexxy",
      },
      {
        label: "Discord Account",
        title: "r5Drexxy's Discord Account.",
        description: "r5Drexxy's Official Discord Account.",
        url: "https://discord.com/users/1218767833778094200",
      },
      {
        label: "Discord",
        title: "Cozmic Tag",
        description: "The Official Cozmic tag Discord Server!",
        url: "https://discord.gg/zf3rBez5kC",
      },
      {
        label: "Steam",
        title: "r5Drexxy's Steam Account",
        description: "r5Drexxy's Only Steam Account!",
        url: "https://steamcommunity.com/profiles/76561199792366380/",
      },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Questions people may have.",
    items: [
      {
        question: "Can I DM you?",
        answer:
          "Yes, my DMs are open. I will always respond to your dms.",
      },
      {
        question: "Can I add you?",
        answer:
          "yes you can add me i add everyone just only if you are above 13+.",
      },
      {
        question: "Why Is your Voice So Deep?",
        answer:
          "I dont know, puberty hit different.",
      },
      {
        question: "Do you cheat in Gorilla Tag?",
        answer:
          "No I do not cheat in Gorilla Tag",
      },
      {
        question: "Do you take requests or commissions?",
        answer:
          "Only for edits that are worth making.",
      },
      {
        question: "Where can I find you online?",
        answer:
          "All my profiles are linked in the socials section of this page. That's the best place to keep up with what I'm doing.",
      },
    ],
  },

  quote: {
    text: "There are far, far better things ahead than any we leave behind.",
    author: "C.S Lewis",
  },

  footer: {
    line: `${name} • Another Corrupt Manager`,
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
