import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import WorkExperienceList from '../components/WorkExperienceList'
import workExperienceData from '../data/work_experience.json'
import { WorkExperience } from '../interfaces'

interface Props {
  readonly workExperiences: ReadonlyArray<WorkExperience>
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      workExperiences: workExperienceData
    }
  }
}

const IndexPage: NextPage<Props> = ({ workExperiences }) => {
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
        <header>
          <HeroBanner
            text={INTRO_TEXT}
            employer={{ href: EMPLOYER_URL, text: EMPLOYER }}
          />
        </header>
        <main>
          <section>
            <Heading text='Work Experience' />
            <WorkExperienceList workExperiences={workExperiences} />
          </section>
        </main>
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
