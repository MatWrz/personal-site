import { Anchor as anchor } from '../interfaces'

interface Props {
  readonly anchor: anchor
}

const Anchor: React.FC<Props> = ({ anchor }) => {
  return (
    <a
      className='anchor'
      href={anchor.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {anchor.text}
    </a>
  )
}

export default Anchor
