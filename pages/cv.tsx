import { NextPage } from 'next'
import CVLayout from '../components/CVLayout'
import CVHeader from '../components/CVHeader'
import cvHeaderData from '../data/cv_header.json'
import keySkillsData from '../data/key_skills.json'
import workExperienceData from '../data/work_experience.json'
import { CVHeaderInfo } from '../interfaces'
import Head from 'next/head'
import Heading from '../components/Heading'
import KeySkillList from '../components/KeySkillList'
import WorkExperienceList from '../components/WorkExperienceList'
import { WorkExperience } from '../interfaces'

const CVPage: NextPage<{}> = () => {
  const CVHeaderProps: CVHeaderInfo = cvHeaderData
  const workExperiences: ReadonlyArray<WorkExperience> = workExperienceData
  return (
    <>
      <Head>
        <title>CV - Mathieu Wrzesien</title>
        <meta name='description' content="Mathieu Wrzesien's CV" />
      </Head>
      <CVLayout>
        <header>
          <CVHeader {...CVHeaderProps} />
        </header>
        <main>
          <section>
            <Heading text='Key Skills' />
            <KeySkillList keySkills={keySkillsData}></KeySkillList>
          </section>
          <section>
            <Heading text='Work Experience' />
            <WorkExperienceList workExperiences={workExperiences} />
          </section>
        </main>
      </CVLayout>
    </>
  )
}

export default CVPage
