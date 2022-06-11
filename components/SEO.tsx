import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
      openGraph={{
        site_name: 'matheusmazeto.com'
      }}
      twitter={{
        handle: '@matheusmazeto',
        site: '@matheusmazeto',
        cardType: 'summary_large_image'
      }}
    />
  );
};
