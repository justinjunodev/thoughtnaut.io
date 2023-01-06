import Head from 'next/head'

interface SEOProps {
  title: string
}

const SEO = ({ title }: SEOProps) => {
  // Create reference object for meta data.
  const meta = {
    title: `${title} | Thoughtnaut | Explore your mind.`,
    description:
      'Navigate your thoughts with Thoughtnaut. A journaling companion that will explore your mind and help you find clarity.',
    card: '/images/card.png',
    icon: '/images/favicon.png',
  }

  return (
    <Head>
      <title>{meta?.title}</title>
      <link rel="shortcut icon" href={meta?.icon} />
      <meta name="description" content={meta?.description} />
      <meta property="og:url" content="https://www.thoughtnaut.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta?.title} />
      <meta property="og:description" content={meta?.description} />
      <meta property="og:image" content={meta?.card} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="thoughtnaut.io" />
      <meta property="twitter:url" content="https://www.thoughtnaut.io" />
      <meta name="twitter:title" content={meta?.title} />
      <meta name="twitter:description" content={meta?.description} />
      <meta name="twitter:image" content={meta?.card} />
    </Head>
  )
}

export default SEO
