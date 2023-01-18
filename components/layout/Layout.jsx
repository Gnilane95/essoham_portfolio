import Head from 'next/head'
import Footer from '../footer/Footer'

export default function Layout({ children, title, metaContent, image ="../assets/essoham.jpg" }) {
  return (
    <>
      <Head>
          <title>Essoham ALI Portfolio | {title}</title>
          <meta name="description" content={metaContent} key="desc" />
          <meta property='og:title' content="Bienvenue sur le site de Essoham ALI - Ph.D. in Applied Mathematics"/>
          <meta property='og:description' content={metaContent}/>
          <meta property='og:image' content={image}/>
      </Head>
      <div className='flex flex-col'>
        <div className="">
          <main className='flex-grow'>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}