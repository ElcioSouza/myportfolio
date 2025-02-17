import Head from 'next/head'
 
export function HeadPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
    </>
  )
}