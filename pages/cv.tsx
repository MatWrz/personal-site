import { NextPage } from 'next'
import CVLayout from '../components/CVLayout'
import CVHeader from '../components/CVHeader'
import cvHeaderData from '../data/cv_header.json'
import keySkillsData from '../data/key_skills.json'
import workExperienceData from '../data/work_experience.json'
import educationData from '../data/education.json'
import languageData from '../data/language.json'
import { CVHeaderInfo, Education } from '../interfaces'
import Head from 'next/head'
import Heading from '../components/Heading'
import KeySkillList from '../components/KeySkillList'
import WorkExperienceList from '../components/WorkExperienceList'
import { WorkExperience } from '../interfaces'
import EducationList from '../components/EducationList'
import CVPageSection from '../components/CVPageSection'
import { Language } from '../interfaces'
import LanguageList from '../components/LanguageList'

interface Props {
  readonly cvHeader: CVHeaderInfo
  readonly workExperiences: ReadonlyArray<WorkExperience>
  readonly educations: ReadonlyArray<Education>
  readonly languages: ReadonlyArray<Language>
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      cvHeader: cvHeaderData,
      workExperiences: workExperienceData,
      educations: educationData,
      languages: languageData
    }
  }
}

const CVPage: NextPage<Props> = ({
  cvHeader,
  workExperiences,
  educations,
  languages
}) => {
  return (
    <>
      <Head>
        <title>CV - Mathieu Wrzesien</title>
        <meta name='description' content="Mathieu Wrzesien's CV" />
      </Head>
      <CVLayout>
        <main>
          <CVPageSection>
            <CVHeader {...cvHeader} />
            <section>
              <Heading text='Key Skills' />
              <KeySkillList keySkills={keySkillsData}></KeySkillList>
            </section>
            <section>
              <Heading text='Work Experience' />
              <WorkExperienceList workExperiences={workExperiences} />
            </section>
          </CVPageSection>
          <CVPageSection>
            <section>
              <Heading text='Education' />
              <EducationList educations={educations}></EducationList>
            </section>
            <section>
              <Heading text='Language' />
              <LanguageList languages={languages} />
            </section>
          </CVPageSection>
        </main>
      </CVLayout>
    </>
  )
}

export default CVPage
