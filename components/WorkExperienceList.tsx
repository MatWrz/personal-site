import { WorkExperience as workExperience } from '../interfaces'
import WorkExperience from './WorkExperience'
import Heading from './Heading'

interface Props {
  readonly workExperiences: ReadonlyArray<workExperience>
}

const WorkExperienceList: React.FC<Props> = ({ workExperiences }) => {
  function displayWorkExperiences(
    workExperiences: ReadonlyArray<workExperience>
  ) {
    return workExperiences.map((workExperience, index) => (
      <WorkExperience key={index} workExperience={workExperience} />
    ))
  }
  return (
    <div className='work-experience-list'>
      {displayWorkExperiences(workExperiences)}
    </div>
  )
}

export default WorkExperienceList
