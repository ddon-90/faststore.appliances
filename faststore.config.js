
module.exports = {
  seo: {
  "title": "Appliances EMEA",
  "description": "A fast and performant storefront",
  "titleTemplate": "%s | Appliances EMEA",
  "author": "Diego Donaggio"
},

  // Theming
  theme: 'midnight',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "appliancesemea",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: false,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "GBP",
      symbol: "£",
    },
    locale: "en-GB",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "GBR",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://appliancesemea-cm0w665v70048pdb4dr7f3em4-gv16dbelz.b.vtex.app",
  secureSubdomain: "https://appliancesemea.myvtex.com/",
  checkoutUrl: "https://appliancesemea.myvtex.com/checkout",
  loginUrl: "https://appliancesemea.myvtex.com/api/io/login",
  accountUrl: "https://appliancesemea.myvtex.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/appliances",
    search: "/s?q=PlayStation",
    pdp: "/smart-kitchen-dock/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/smart-kitchen-dock/p",
      collection: "/appliances",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/smart-kitchen-dock/p",
      collection: "/appliances",
      collection_filtered: "/appliances?category-1=appliances&brand=dyson&facets=category-1%2Cbrand&sort=score_desc&page=0",
      search: "/s?q=PlayStation",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-59ZTPWL9",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
    noRobots: false
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://appliancesemea.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
