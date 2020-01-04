import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'

const IndexPage: NextPage<{}> = () => {
  const EMAIL = 'mathieu.wrzesien@outlook.com'
  const INTRO_TEXT =
    'I’m Mathieu Wrzesien, a software developer living in Montréal, currently working for'
  const EMPLOYER = 'Vention'
  const EMPLOYER_URL = 'https://www.vention.io'

  return (
    <>
      <Head>
        <title>Mathieu Wrzesien - Software Developer</title>
        <meta name='description' content={INTRO_TEXT + ' ' + EMPLOYER} />
      </Head>
      <Layout>
        <HeroBanner
          text={INTRO_TEXT}
          employer={{ href: EMPLOYER_URL, text: EMPLOYER }}
        />
        <Footer
          email={{
            href: 'mailto:' + EMAIL,
            text: EMAIL
          }}
          linkedinUrl='https://www.linkedin.com/in/mathieu-wrzesien-93763890/'
        />
      </Layout>
    </>
  )
}

export default IndexPage
