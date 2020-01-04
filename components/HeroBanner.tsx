import { Anchor as anchor } from '../interfaces'
import Anchor from './Anchor'

interface Props {
  readonly text: string
  readonly employer: anchor
}

const HeroBanner: React.FC<Props> = ({ text, employer }) => {
  return (
    <div className='hero-banner'>
      <h1 className='hero-banner-text'>
        {text} <Anchor anchor={employer} />.
      </h1>
    </div>
  )
}

export default HeroBanner
