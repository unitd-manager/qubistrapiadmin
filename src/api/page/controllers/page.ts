import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const entries = await strapi.documents('api::page.page').findMany({
      filters: { slug },
      status: 'published',
      populate: <never>{
        pageBuilder: {
          on: {
            'acf-sections.qubi-home-hero': {
              populate: {
                section_space_padding: true,
                button: { populate: '*' },
                hero_image: true,
              },
            },
            'acf-sections.qubi-demo-preview': {
              populate: {
                section_space_padding: true,
                video: true,
              },
            },
            'acf-sections.qubi-problem-section': {
              populate: {
                section_space_padding: true,
                problem_items: { populate: '*' },
              },
            },
            'acf-sections.qubi-capabilities-section': {
              populate: {
                section_space_padding: true,
                capability_items: { populate: '*' },
              },
            },
            'acf-sections.qubi-outcomes-section': {
              populate: {
                section_space_padding: true,
                outcome_items: { populate: '*' },
              },
            },
            'acf-sections.qubi-how-it-works-section': {
              populate: {
                section_space_padding: true,
                steps: { populate: '*' },
              },
            },
            'acf-sections.qubi-use-cases-section': {
              populate: {
                section_space_padding: true,
                use_case_items: { populate: '*' },
              },
            },
            'acf-sections.qubi-integration-section': {
              populate: {
                section_space_padding: true,
                integration_items: { populate: '*' },
              },
            },
            'acf-sections.qubi-human-in-loop-section': {
              populate: {
                section_space_padding: true,
                badges: { populate: '*' },
                button: { populate: '*' },
              },
            },
            'acf-sections.qubi-analytics-section': {
              populate: {
                section_space_padding: true,
                features: { populate: '*' },
              },
            },
            'acf-sections.qubi-final-cta-section': {
              populate: {
                section_space_padding: true,
                button: { populate: '*' },
                secondary_button: { populate: '*' },
              },
            },
            'acf-sections.qubi-simple-hero': {
              populate: {
                section_space_padding: true,
              },
            },
            'acf-sections.qubi-stats-section': {
              populate: {
                section_space_padding: true,
                stats: { populate: '*' },
              },
            },
            'acf-sections.qubi-case-studies-section': {
              populate: {
                section_space_padding: true,
                case_studies: {
                  populate: {
                    metrics: { populate: '*' },
                  },
                },
              },
            },
            'acf-sections.qubi-story-section': {
              populate: {
                section_space_padding: true,
                paragraphs: { populate: '*' },
                stats: { populate: '*' },
              },
            },
            'acf-sections.qubi-differentiators-section': {
              populate: {
                section_space_padding: true,
                items: { populate: '*' },
              },
            },
            'acf-sections.qubi-callout-section': {
              populate: {
                section_space_padding: true,
              },
            },
            'acf-sections.qubi-plans-section': {
              populate: {
                section_space_padding: true,
                plans: {
                  populate: {
                    features: { populate: '*' },
                  },
                },
              },
            },
            'acf-sections.qubi-icon-grid-section': {
              populate: {
                section_space_padding: true,
                items: { populate: '*' },
              },
            },
            'acf-sections.qubi-execution-section': {
              populate: {
                section_space_padding: true,
                items: { populate: '*' },
              },
            },
            'acf-sections.qubi-comparison-section': {
              populate: {
                section_space_padding: true,
                rows: { populate: '*' },
              },
            },
            'acf-sections.qubi-faq-section': {
              populate: {
                section_space_padding: true,
                items: { populate: '*' },
              },
            },
            'acf-sections.qubi-blog-list-section': {
              populate: {
                section_space_padding: true,
              },
            },
            'acf-sections.qubi-subscribe-cta-section': {
              populate: {
                section_space_padding: true,
                button: { populate: '*' },
              },
            },
            'acf-sections.solutions-hero-banner': {
              populate: '*',
            },
            'acf-sections.solutions-stats-band': {
              populate: {
                stats: { populate: '*' },
              },
            },
            'acf-sections.solutions-use-cases-layout': {
              populate: {
                useCases: {
                  populate: {
                    stats: { populate: '*' },
                  },
                },
              },
            },
            'acf-sections.solutions-industry-layout': {
              populate: {
                industry_cards: {
                  populate: {
                    highlights: { populate: '*' },
                  },
                },
              },
            },
            'acf-sections.solutions-execution-flow': {
              populate: {
                steps: { populate: '*' },
                verbs: { populate: '*' },
              },
            },
            'acf-sections.solutions-final-cta': {
              populate: '*',
            },
            'acf-sections.solutions-comparison-block': {
              populate: '*',
            },
            'acf-sections.solutions-problems-block': {
              populate: '*',
            },
            'acf-sections.solutions-what-we-do': {
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