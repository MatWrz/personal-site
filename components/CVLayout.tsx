import Head from 'next/head'
import '../styles/styles.scss'

interface Props {
  readonly children?: any
}

const CVLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge;chrome=1' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#0069A0' />
        <link rel='shortcut icon' type='image/x-icon' href='/img/favicon.png' />
        <style> </style>
      </Head>
      <div className='cv-layout'>
        <style jsx>{`
          @page {
            margin: 2em 0 0;
          }
        `}</style>
        <div className='cv-layout-a4'>{children}</div>
      </div>
    </>
  )
}

export default CVLayout
