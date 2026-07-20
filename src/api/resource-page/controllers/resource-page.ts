import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::resource-page.resource-page', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entries = await strapi.documents('api::resource-page.resource-page').findMany({
      filters: { slug },
      status: 'published',
      populate: {
        pageBuilder: {
          on: {
            'acf-sections.demo-sections-hero': {
              populate: '*',
            },
            'acf-sections.demo-sections-video-showcase': {
              populate: {
                thumbnail: true,
              },
            },
            'acf-sections.demo-sections-capability-card': {
              populate: {
                card: { populate: '*' },
              },
            },
            'acf-sections.demo-sections-contact-cta': {
              populate: {
                form_fields: { populate: '*' },
              },
            },
            'acf-sections.banner-layout': {
              populate: '*',
            },
            'acf-sections.resource-grid-layout': {
              populate: '*',
            },
            'acf-sections.faq-hero': {
              populate: '*',
            },
            'acf-sections.faq-list': {
              populate: {
                groups: {
                  populate: {
                    faq: { populate: '*' },
                  },
                },
              },
            },
            'acf-sections.faq-cta': {
              populate: '*',
            },
          },
        },
      },
    });

    if (!entries || entries.length === 0) {
      return ctx.notFound();
    }

    ctx.body = { data: entries[0] };
  },
}));