import React from 'react'
import { KeySkill as keySkill } from '../interfaces'
import KeySkill from './KeySkill'

interface Props {
  readonly keySkills: ReadonlyArray<keySkill>
}

const KeySkillList: React.FC<Props> = ({ keySkills }) => {
  function displayKeySkill(keySkills: ReadonlyArray<keySkill>) {
    return keySkills.map((keySkill, index) => {
      return <KeySkill key={index} keySkill={keySkill} />
    })
  }
  return (
    <table className='key-skill-list'>
      <tbody>{displayKeySkill(keySkills)}</tbody>
    </table>
  )
}

export default KeySkillList
