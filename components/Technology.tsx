interface Props {
  readonly text: string
}

const Technology: React.FC<Props> = ({ text }) => {
  return <div className='technology'>{text}</div>
}

export default Technology
