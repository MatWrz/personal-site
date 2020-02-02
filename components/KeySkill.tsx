import React from 'react'
import { KeySkill as keySkill } from '../interfaces'

interface Props {
  readonly keySkill: keySkill
}

const KeySkill: React.FC<Props> = ({ keySkill }) => {
  return (
    <tr className='key-skill'>
      <td>{keySkill.title}</td>
      <td>{keySkill.competencyLevel}</td>
      <td>{keySkill.years} years</td>
      <td>{keySkill.description}</td>
    </tr>
  )
}

export default KeySkill
