import React from 'react'

const Sections = ({title,subtitle,children}) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">

        <h2 className=" text-indigo-500 uppercase  py-6 lg:text-xl">{title}</h2>

        {children}
    </section>
    
  )
}

export default Sections