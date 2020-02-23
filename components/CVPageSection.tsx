import React from 'react'

interface Props {
  readonly children?: any
}

const CVPageSection: React.FC<Props> = ({ children }) => {
  return <div className='cv-page'>{children}</div>
}

export default CVPageSection
