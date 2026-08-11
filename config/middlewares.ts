import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',

  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:8095',
        'https://qubistrapidev.unitdtechnologies.com',
      ],

      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
      ],

      credentials: true,

      keepHeaderOnError: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',

  {
    name: 'global::normalize-media-urls',
  },

  'strapi::favicon',
  'strapi::public',

  // Temporarily disabled custom page admin optimization
  // until the issue is fixed.
  //
  // {
  //   name: 'global::optimize-page-admin-list',
  // },

  {
    name: 'global::qbo-posts-router',
  },
];

export default config;