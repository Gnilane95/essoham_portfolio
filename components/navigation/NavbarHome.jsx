import Link from 'next/link'
import Typical from 'react-typical'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

export default function NavbarHome() {
  return (
    <div className="">
        <div className="bg-[url('../public/assets/bg.jpg')] h-[82%] w-full px-56 pb-36 relative text-white ">
          <nav className=' flex justify-between py-10'>
            <Link href='/' className='font-black text-2xl uppercase logo'>
              <span className='text-amber-700 pl-40'>Essoham ALI</span>
            </Link>
            <div className='flex space-x-7 text-xl font-semibold'>
              <Link href='/research' className='hover:text-amber-600'>
                Research
              </Link>
              <Link href='/publications' className='hover:text-amber-600'>
                Publications
              </Link>
              <Link href='/teaching' className='hover:text-amber-600'>
                Teaching
              </Link>
              <Link href='/talks' className='hover:text-amber-600'>
                Talks
              </Link>
            </div>
          </nav>
          <hero className='mt-36'>
            <div className="flex justify-between items-center pt-10">
              <div className="flex flex-col items-center">
                {" "}
                <div className="flex text-3xl gap-2 mb-5">
                  <Link href='#'><AiFillLinkedin/></Link>
                  <Link href='#'><AiFillTwitterSquare/></Link>
                </div>
                <p className='text-xl'>
                  Hello, I'm Essoham ALI
                </p>
                <h1 className='text-2xl pt-5 uppercase font-semibold'>
                  {" "}
                  <Typical
                  loop={Infinity}
                  steps={[
                      "Ph.D. in Mathematics Applied",
                      1000,
                      "Attaché Temporaire de recherche",
                      1000,
                      "Chercheur en statistique",
                      1000,
                  ]}
                  />
                </h1>
                <p className='pt-5'>I am, actually, an temporary Research and Teaching Attached (ATER).</p>
                <div className="mt-10 flex justify-center">
                  <Link href='cv_EA.pdf' download='CV Essoham ALI' className='btn bg-amber-900 border-white px-16 rounded-2xl hover:bg-slate-50 hover:text-slate-900'>Mon Cv</Link>
                </div>
              </div>
              <div className="rounded-full shadow-lg pb-3 px-2 border-b-2">
                <img src="../assets/essoham.jpg" alt="" className='rounded-full h-64 w-64 '/>
              </div>
            </div>
          </hero>
          {/* <div className="bg-[url('../public/assets/shape-bg.png')] bg-cover bg-center absolute top-10h bottom-0 z-50 h-32 w-screen left-0"></div> */}
          <img src="../assets/shape-bg.png" alt="" className='absolute top-10h bottom-0 z-50 h-32 w-screen left-0'/>
        </div>
    </div>
  )
}
