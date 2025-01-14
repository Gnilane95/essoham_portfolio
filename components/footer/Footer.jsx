import React from "react";
import Link from "next/link";

import ProfileAli from "../shared/ProfileAli";



export default function Footer() {
  return (
    <div>
      <footer>
        <div className="p-6 bg-gray-100 text-white mt-20 flex flex-col items-center">
         
           <ProfileAli/>
          
          <div className="my-5 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>Essoham ALI</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">Essoham ALI Portofilio</Link>
          </div>
          <div className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            Template designed by Agathe.ALI
          </div>
        </div>
      </footer>
    </div>
  );
}
