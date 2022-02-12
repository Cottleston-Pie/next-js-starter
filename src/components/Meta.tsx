import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  siteName?: string;
  twitterHandle?: string;
  ogImage?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/ypy1yno.css"
          as="style"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="stylesheet" href="https://use.typekit.net/ypy1yno.css" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: router.locale,
          site_name: props.siteName,
          images: [
            {
              url: String(props.ogImage),
              width: 1200,
              height: 628,
              alt: '',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: props.canonical,
          handle: props.twitterHandle,
        }}
      />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-[#TODO]-2"
      />

      <Script strategy="afterInteractive" id="ga-embed">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-[#TODO]', {
        page_path: window.location.pathname,
      });
  `}
      </Script>
      {/* eslint-enable */}
    </>
  );
};

export { Meta };
