import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const IndexPage: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>Mathieu Wrzesien - Software Developer</title>
        <meta
          name='description'
          content='I’m Mathieu Wrzesien, a software developer living in Montréal, currently working for Bell Media.'
        />
      </Head>
      <Layout />
    </>
  )
}

export default IndexPage
