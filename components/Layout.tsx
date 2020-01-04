import Head from 'next/head'
import '../styles/styles.scss'

interface Props {
  readonly children?: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge;chrome=1' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#0069A0' />
        <link rel='shortcut icon' type='image/x-icon' href='/img/favicon.png' />
      </Head>
      <header>hi</header>
      {children}
      <footer className='footer'>
        <div className='content has-text-centered'>
          <span>I'm the footer</span>
        </div>
      </footer>
    </>
  )
}

export default Layout
