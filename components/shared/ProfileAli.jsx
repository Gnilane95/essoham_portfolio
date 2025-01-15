import React from 'react'
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { personalData } from "../../data/siteData";


export default function ProfileAli() {
  return (
    <div className="mt-4">
      <p className='pb-4 flex items-center'>
        <Link target="_blank" rel="noreferrer" href={personalData.googleScholar} className='mr-3'>
          <SiGooglescholar />
        </Link>
        <span className='text-gray-600'>Googlescholar</span>
      </p>
      <p className='flex items-center'>
        <Link target="_blank" rel="noreferrer" href={personalData.linkedin} className='mr-3'>
          <AiFillLinkedin />
        </Link>
        <span className='text-gray-600'>Linkedin</span>
      </p>
    </div>
  )
}
