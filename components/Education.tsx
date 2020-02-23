import React from 'react'
import { Education as education } from '../interfaces'

const Education: React.FC<education> = ({ timePeriod, school, degree }) => {
  return (
    <div className='education'>
      <p className='education-time-period'>{timePeriod}</p>
      <div className='education-school'>
        <p>{school}</p>
        <p>{degree}</p>
      </div>
    </div>
  )
}

export default Education
