import React from 'react'
import { Education as education } from '../interfaces'
import Education from './Education'

interface Props {
  readonly educations: ReadonlyArray<education>
}

const EducationList: React.FC<Props> = ({ educations }) => {
  function displayEducation(educations: ReadonlyArray<education>) {
    return educations.map((education, index) => {
      return <Education key={index} {...education} />
    })
  }
  return <div className='education-list'>{displayEducation(educations)}</div>
}

export default EducationList
