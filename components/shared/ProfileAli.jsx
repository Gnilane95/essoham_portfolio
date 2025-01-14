import React from 'react'
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { personalData } from "../../data/siteData";


export default function ProfileAli() {
  return (
    <div className="flex text-gray-600 gap-2 mt-5">
              <Link target="_blank" rel="noreferrer" href={personalData.googleScholar}>
        <SiGooglescholar />
      </Link>
      <Link target="_blank" rel="noreferrer" href={personalData.linkedin}>
        <AiFillLinkedin />
      </Link>
      <Link target="_blank" rel="noreferrer" href={personalData.twitter}>
        <AiFillTwitterSquare />
      </Link>
    </div>
  )
}
