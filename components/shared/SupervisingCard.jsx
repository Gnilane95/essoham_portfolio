import React from 'react'

export default function SupervisingCard({student}) {
  return (
    <div
    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
    href="/services/digital-campaigns"
   key={student.id}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-amber-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>

    <h2 className="mt-4 text-xl font-bold ">
      {student.name}
    </h2>
    <p> <span className='badge badge-outline'>{student.year}</span> - {student.location}</p>

    <p className="mt-5 text-sm ">Title: <span className='font-bold'>{student.title}</span>
      
    </p>

    <p className='mt-2'>Defended at : <span className='font-bold'>{student.soutenance_at}</span></p>
    <p className='mt-5'>Co-supervisor: <span className='font-bold'>{student.co_supervisor}</span></p>
    
  </div>

  )
}
