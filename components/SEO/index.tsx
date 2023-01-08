import Head from 'next/head'

interface SEOProps {
  title: string
}

const SEO = ({ title }: SEOProps) => {
  // Create reference object for meta data.
  const meta = {
    title: `${title} | Thoughtnaut | Explore your mind`,
    description:
      'Navigate your thoughts with Thoughtnaut. A journaling companion that will explore your mind and help you find clarity.',
    card: 'https://www.thoughtnaut.io/images/card.png',
    icon: 'https://www.thoughtnaut.io/images/favicon.png',
  }

  return (
    <Head>
      <title>{meta?.title}</title>
      <link rel="shortcut icon" href={meta?.icon} />
      <meta property="og:title" content={meta?.title} key="og:title" />
      <meta property="og:image" content={meta?.card} key="og:image" />
      <meta
        property="og:url"
        content="https://www.thoughtnaut.io"
        key="og:url"
      />
      <meta
        property="description"
        content={meta?.description}
        key="description"
      />
      <meta
        property="og:description"
        content={meta?.description}
        key="og:description"
      />
      <meta property="og:type" content="website" />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        property="twitter:domain"
        content="thoughtnaut.io"
        key="twitter:domain"
      />
      <meta
        property="twitter:url"
        content="https://www.thoughtnaut.io"
        key="twitter:url"
      />
      <meta
        property="twitter:title"
        content={meta?.title}
        key="twitter:title"
      />
      <meta
        property="twitter:description"
        content={meta?.description}
        key="twitter:description"
      />
      <meta property="twitter:image" content={meta?.card} key="twitter:image" />
    </Head>
  )
}

export default SEO
