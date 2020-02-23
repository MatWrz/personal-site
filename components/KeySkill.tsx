import React from 'react'
import { KeySkill as keySkill } from '../interfaces'

const KeySkill: React.FC<keySkill> = ({
  title,
  competencyLevel,
  years,
  description
}) => {
  return (
    <tr className='key-skill'>
      <td>{title}</td>
      <td>{competencyLevel}</td>
      <td>{years} years</td>
      <td>{description}</td>
    </tr>
  )
}

export default KeySkill
