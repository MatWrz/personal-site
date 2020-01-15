import { WorkExperience as workExperience } from '../interfaces'
import TechnologyList from './TechnologyList'

interface Props {
  readonly workExperience: workExperience
}

const WorkExperience: React.FC<Props> = ({ workExperience }) => {
  function displayAccomplishments(accomplishments: ReadonlyArray<string>) {
    return accomplishments.map((accomplishment, index) => (
      <li key={index}>{accomplishment}</li>
    ))
  }
  return (
    <div className='work-experience'>
      <div className='work-experience-heading'>
        <span className='work-experience-heading-employer'>
          {workExperience.employer}
        </span>{' '}
        <span className='work-experience-heading-date'>
          {workExperience.timeFrame}
        </span>
      </div>
      <div className='work-experience-technologies'>
        <TechnologyList technologies={workExperience.technologies} />
      </div>
      <div className='work-experience-accomplishments'>
        <ul>{displayAccomplishments(workExperience.accomplishments)}</ul>
      </div>
    </div>
  )
}

export default WorkExperience
