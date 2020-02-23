import React from 'react'
import { Language as language } from '../interfaces'
import Language from './Language'

interface Props {
  readonly languages: ReadonlyArray<language>
}

const LanguageList: React.FC<Props> = ({ languages }) => {
  function displayLanguages(languages: ReadonlyArray<language>) {
    return languages.map((language, index) => {
      return <Language key={index} {...language} />
    })
  }
  return <div className='language-list'>{displayLanguages(languages)}</div>
}

export default LanguageList
