
module.exports = {
  seo: {
  "title": "Appliances EMEA",
  "description": "A fast and performant storefront",
  "titleTemplate": "%s | Appliances EMEA",
  "author": "Diego Donaggio"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "appliancesemea",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
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
  storeUrl: "https://appliancesemea.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/coffee",
    search: "/s?q=Caff%C3%A8%20Campetelli",
    pdp: "/brasile-santos-descascado-ouro-fino-69/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/brasile-santos-descascado-ouro-fino-69/p",
      collection: "/coffee",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/brasile-santos-descascado-ouro-fino-69/p",
      collection: "/coffee",
      collection_filtered: "/coffee/?category-1=coffee&brand=Caff%C3%A8%20Campetelli&facets=category-1%2Cbrand%27",
      search: "/s?q=Caff%C3%A8%20Campetelli",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://appliancesemea.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
