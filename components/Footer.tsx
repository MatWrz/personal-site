import { Anchor as anchor } from '../interfaces'
import Anchor from './Anchor'

interface Props {
  readonly email: anchor
  readonly linkedinUrl: string
}

const Footer: React.FC<Props> = ({ email, linkedinUrl }) => {
  return (
    <footer className='footer'>
      <Anchor anchor={email} />
      <br />
      <Anchor anchor={{ href: linkedinUrl, text: 'LinkedIn' }} />
    </footer>
  )
}

export default Footer
