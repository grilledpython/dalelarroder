const siteMetadata = {
  title: 'Arpan Mandal',
  author: 'Arpan Mandal',
  headerTitle: 'Arpan Mandal',
  description: 'Backend Developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://me.arpan.codes',
  siteRepo: 'https://github.com/arpan-mandal',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@arpanm.tech',
  github: 'https://github.com/arpan-mandal',
  twitter: 'https://twitter.com/apcozmic',
  facebook: 'https://www.facebook.com/profile.php?id=100046823093032',
  linkedin: 'https://www.linkedin.com/in/arpan-mandal-b40b07270/',
  spotify: 'https://open.spotify.com/user/i350ehdkle4i64ikfpgn4vtnj?si=843804b5d5e344c7',
  steam: 'https://steamcommunity.com/profiles/76561199074639502/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || 'grilledpython/dalelarroder',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || 'R_kgDOJ13LHg',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'General',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || 'DIC_kwDOJ13LHs4CXnTt',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'dark_protanopia',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
