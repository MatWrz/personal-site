import Anchor from './Anchor'
import { CVHeaderInfo } from '../interfaces'

const CVHeader: React.FC<CVHeaderInfo> = ({
  fullName,
  email,
  website,
  address,
  city,
  province,
  country,
  phoneNumber
}) => {
  return (
    <div className='cv-header'>
      <h1>{fullName}</h1>
      <p>
        <Anchor
          anchor={{
            href: 'mailto:' + email,
            text: email
          }}
        />{' '}
        |{' '}
        <Anchor
          anchor={{
            href: 'https://' + website,
            text: website
          }}
        />
      </p>
      <p>{`${address} | ${city}, ${province}, ${country}`}</p>
      <p>{phoneNumber}</p>
    </div>
  )
}

export default CVHeader
