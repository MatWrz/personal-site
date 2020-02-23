import React from 'react'
import { Language as language } from '../interfaces'

const Language: React.FC<language> = ({ name, description }) => {
  return (
    <div className='language'>
      <p>
        {name} - {description}
      </p>
    </div>
  )
}

export default Language
