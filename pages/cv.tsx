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

const CVHeaderProps: CVHeaderInfo = cvHeaderData
const workExperiences: ReadonlyArray<WorkExperience> = workExperienceData
const educations: ReadonlyArray<Education> = educationData
const languages: ReadonlyArray<Language> = languageData

const CVPage: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>CV - Mathieu Wrzesien</title>
        <meta name='description' content="Mathieu Wrzesien's CV" />
      </Head>
      <CVLayout>
        <main>
          <CVPageSection>
            <CVHeader {...CVHeaderProps} />
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
