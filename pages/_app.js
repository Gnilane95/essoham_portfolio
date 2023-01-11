import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// import { Poppins } from '@next/font/google'

// // const poppins = Poppins({ subsets: ['latin'] })
// const poppins = Poppins({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
// })

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={poppins.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }

