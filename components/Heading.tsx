interface Props {
  readonly text: string
}

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <div className='heading'>
      <h2 className='heading-text'>{text}</h2>
    </div>
  )
}

export default Heading
