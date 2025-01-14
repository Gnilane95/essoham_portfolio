import React from 'react'

export default function SupervisingCard({student}) {
  return (
    <div
    className="pb-4 text-gray-600"
    href="/services/digital-campaigns"
    key={student.id}>
    <h2 className="mt-4 text-xl font-bold ">
      {student.name}
    </h2>
    <p> <span className='badge badge-outline'>{student.year}</span> - {student.location}</p>

    <p className="mt-5 text-sm ">Title: <span className='font-bold'>{student.title}</span>
      
    </p>

    <p className='mt-2'>Defended at : <span className='font-bold'>{student.soutenance_at}</span></p>
    <p className='mt-2'>Co-supervisor: <span className='font-bold'>{student.co_supervisor}</span></p>
    
  </div>

  )
}
