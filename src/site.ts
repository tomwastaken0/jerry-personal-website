// Central site configuration — edit names, nav, and social links here once.
export const SITE = {
  name: 'Jerry Ng',
  title: 'Jerry Ng',
  description:
    'Industrial & Systems Engineering student writing about engineering, tech, projects, books, and more.',
  // Your résumé PDF (lives in public/). Replace the file or update this path to
  // change it. Set to '' to hide the download buttons.
  resume: '/Jerry_Ng_Resume.pdf',
  email: 'jerryng3008@gmail.com',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/books', label: 'Books' },
  { href: '/watching', label: 'Watching' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

// Social / external links — used in the footer. Edit or remove as needed.
export const SOCIALS = [
  { href: 'https://github.com/tomwastaken0', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/jerry-ng-57974a154/', label: 'LinkedIn' },
  { href: 'mailto:jerryng3008@gmail.com', label: 'Email' },
];

// Contact form (Web3Forms). Get a free access key at https://web3forms.com
// (just enter your email — no account needed). Paste it here to activate the form.
export const WEB3FORMS_KEY = '50e34849-bb08-42e9-b1d9-8fbcd32ae69a';

// Comments (Giscus). After you: (1) push this repo to GitHub (public),
// (2) enable the Discussions tab, (3) install the giscus app at
// https://github.com/apps/giscus, (4) configure at https://giscus.app —
// paste the generated values here to turn comments on.
export const GISCUS = {
  repo: '', // e.g. 'jerryng/personal-website'
  repoId: '',
  category: 'Announcements',
  categoryId: '',
};

// Privacy-friendly analytics (Cloudflare Web Analytics). After deploying to
// Cloudflare Pages, create a Web Analytics site and paste the token here.
export const ANALYTICS_TOKEN = '';
