import { WorkExperience as workExperience } from '../interfaces'
import TechnologyList from './TechnologyList'

const WorkExperience: React.FC<workExperience> = ({
  employer,
  position,
  timeFrame,
  technologies,
  accomplishments
}) => {
  function displayAccomplishments(accomplishments: ReadonlyArray<string>) {
    return accomplishments.map((accomplishment, index) => (
      <li key={index}>{accomplishment}</li>
    ))
  }
  return (
    <div className='work-experience'>
      <div className='work-experience-heading'>
        <p>
          {`${employer} - ${position} `}
          <small>{timeFrame}</small>
        </p>
      </div>
      <div className='work-experience-technologies'>
        <TechnologyList technologies={technologies} />
      </div>
      <div className='work-experience-accomplishments'>
        <ul>{displayAccomplishments(accomplishments)}</ul>
      </div>
    </div>
  )
}

export default WorkExperience
