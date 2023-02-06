import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import useAssets from '../hooks/useAssets'

export default function Home({ }) {
  const { asset } = useAssets();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <center>Delivering news and insights about digital assets to millions of investors.</center>
        <center>Welcome to Mini Blockworks where you can learn all about Bitcoin, Ethereum and More!</center>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Featured Assets:</h2>
        <ul key={"assetList"} className={utilStyles.list}>
          {asset.map(({ title }, index) => (
            <li key={index} className={utilStyles.listItem}>
              <Link href={`/posts/${index}`}>{title}</Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout >
  )
}

