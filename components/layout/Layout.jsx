import Navbar from '../navigation/Navbar'
import Head from 'next/head'
import Footer from '../footer/Footer'

export default function Layout({ children, title, metaContent, image ="img/undraw_Certification_re_ifll.png" }) {
  return (
    <>
      <Head>
          <title>Essoham ALI | {title}</title>
          <meta name="description" content={metaContent} />
          <meta property='og:title' content={title}/>
          <meta property='og:description' content={metaContent}/>
          <meta property='og:image' content={image}/>
      </Head>
      <div className='flex flex-col'>
        <div className="">
          <Navbar />
          <main className='flex-grow'>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}