import Technology from './Technology'

interface Props {
  readonly technologies: ReadonlyArray<string>
}

const TechnologyList: React.FC<Props> = ({ technologies }) => {
  function displayTechnologies(technologies: ReadonlyArray<string>) {
    return technologies.map((technology, index) => (
      <li key={index}>
        <Technology text={technology} />
      </li>
    ))
  }
  return (
    <ul className='technology-list'>{displayTechnologies(technologies)}</ul>
  )
}

export default TechnologyList
